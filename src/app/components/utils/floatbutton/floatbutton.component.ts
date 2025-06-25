import { Component, OnChanges, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from 'src/app/_services/api.service';
import { GlobalConstants } from 'src/app/global-constants';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'floatbutton',
  standalone: true,
  imports: [CommonModule, LoadingComponent],
  templateUrl: './floatbutton.component.html',
  styleUrls: ['./floatbutton.component.less']
})

export class FloatButtonComponent {

  constructor(
    private apiService: ApiService,
  ) {

  }

  @Input() shuttingDown: boolean
  @Input() shuttingDownNow: boolean

  public loading: boolean = false

  ngOnInit(): void { }


  confirmShutDown() {
    this.shuttingDown = true
  }

  cancelShutDown() {
    this.shuttingDown = false
    this.shuttingDownNow = false
  }

  shutDown() {
    this.shuttingDownNow = true
    this.loading = true
    this.apiService.sysShutdown().subscribe(
      (data: any) => {
        this.loading = false
      }, (err) => {
        this.loading = false;
      }
    );
    this.loading = false
  }
}
