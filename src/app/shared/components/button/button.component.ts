import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input()
  private label: string;

  @Input()
  private disabled: boolean;

  @Output()
  private press = new EventEmitter<void>();

  constructor() { }

}
