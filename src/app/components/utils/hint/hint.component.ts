import { Component, OnChanges, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { User } from 'src/app/interfaces/user';
import { GlobalConstants } from 'src/app/global-constants';

@Component({
  selector: 'hint',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.less']
})

export class HintComponent {

  constructor(
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  @Input() showHint: boolean
  @Input() hint: string

  public loading: boolean = false
  public language: string = null
  public currentUser: User;
  public bitx: string = GlobalConstants.bitx

  toggleHint() {
    if (this.showHint)
      return this.showHint = false

    if (!this.showHint)
      return this.showHint = true
  }

  ngOnInit(): void {
    this.language = localStorage.getItem('language')
  }

}
