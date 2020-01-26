import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input()
  public label: string;

  @Input()
  public disabled: boolean;

  @Output()
  public press = new EventEmitter<void>();

  constructor() { }

}
