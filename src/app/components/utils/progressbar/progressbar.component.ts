import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'progressbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.less']
})
export class ProgressBarComponent implements OnChanges {

  constructor() {
    this.value = null
  }

  @Input() value: string

  ngOnChanges(change) {
    change && change.value.currentValue != change.value.previousValue ? this.value = change.value.currentValue : null
  }

  
}
