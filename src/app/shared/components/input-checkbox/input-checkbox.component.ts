import { Component, Input, EventEmitter, Output, forwardRef, Optional, Self, Host, SkipSelf, OnInit } from '@angular/core';
import { InputCheckbox } from '@shared/models/input-checkbox';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl, ControlContainer, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputCheckboxComponent),
      multi: true
    }
  ]
})
export class InputCheckboxComponent implements ControlValueAccessor {

  @Input()
  private error: boolean;

  private checkboxes: InputCheckbox[];
  public onChangeCb: (checkboxes: InputCheckbox[]) => void = () => { };
  public onTouchedCb: (checkboxes: InputCheckbox[]) => void = () => { };

  constructor() {

  }

  public writeValue(checkboxes: InputCheckbox[]): void {
    this.checkboxes = checkboxes;
  }

  public registerOnChange(fn: any): void {
    this.onChangeCb = fn;
    this.error = false;
  }

  public registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }

  public setChecked(label: string, checked: boolean): void {
    this.checkboxes.map(res => {
      if (res.label === label) {
        res.checked = checked;
      }
    });
    this.error = false;
    this.onChangeCb(this.checkboxes);
  }

}
