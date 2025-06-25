import { Component, OnChanges, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'switch',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.less']
})
export class SwitchComponent implements OnChanges {

  constructor() {
    this.inputName = 'Switch';
    this.label = 'switch'
    this.i18n = 'Translate';
    this.enabled = ''
    this.value = 0
    this.customFunction = function () { console.log("Custom function called with param: " + this.disabled); }
  }

  @Input() inputName: string
  @Input() label: string
  @Input() i18n: string
  @Input() enabled: string
  @Input() value: number
  @Input() customFunction: any

  onSwitch() {
    try {
      if (typeof this.customFunction === 'function') {
        this.customFunction();
      } else if (typeof this.customFunction === 'string') {
        const func = new Function('return ' + this.customFunction);
        func();
      }
    } catch (error) {
      console.log(error)
    }
  }

  ngOnInit(): void {
  }

  ngOnChanges(change) {    
    change.enabled && change.enabled.currentValue != change.enabled.previousValue ? this.enabled = change.name.currentValue: null
    change.value && change.value.currentValue != change.value.previousValue ? this.value = change.value.currentValue: null
  }
}
