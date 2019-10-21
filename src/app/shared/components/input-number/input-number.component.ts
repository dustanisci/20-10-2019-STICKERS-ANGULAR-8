import { Component, Output, EventEmitter, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputNumberComponent),
      multi: true
    }
  ]
})

export class InputNumberComponent implements ControlValueAccessor {

  @Input()
  private error: boolean;

  private counter: number;
  public onChangeCb: (counter: number) => void = () => { };
  public onTouchedCb: (counter: number) => void = () => { };

  constructor() {

  }

  public writeValue(counter: number): void {
    this.counter = counter;
  }

  public registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }

  private add(): void {
    this.counter++;
    this.onChangeCb(this.counter);
    this.error = false;
  }

  private subtract(): void {
    if (this.counter > 0) {
      this.counter--;
      this.onChangeCb(this.counter);
    }
  }

  private digit(event: any): void {
    this.counter = +event.value.match('^[0-9]*$')[0];
    this.onChangeCb(this.counter);
  }

}
