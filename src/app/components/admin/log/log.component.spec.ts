import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogComponent } from './log.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from '../../utils/loading/loading.component';
import { HintComponent } from '../../utils/hint/hint.component';
import { AuthenticationService } from '../../../_services/authentication.service';
import { of } from 'rxjs';

describe('LogComponent', () => {
  let component: LogComponent;
  let fixture: ComponentFixture<LogComponent>;

  beforeEach(async () => {
    const mockAuthService = {
      currentUser: of({ admin: true, username: 'testuser' })
    };

    await TestBed.configureTestingModule({
      declarations: [LogComponent, LoadingComponent, HintComponent],
      imports: [HttpClientModule, FormsModule],
      providers: [
        { provide: AuthenticationService, useValue: mockAuthService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
