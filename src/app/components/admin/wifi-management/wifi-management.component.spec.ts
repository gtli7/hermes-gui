import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { WiFiManagementComponent } from './wifi-management.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthenticationService } from '../../../_services/authentication.service';
import { LoadingComponent } from '../../utils/loading/loading.component';
import { HintComponent } from '../../utils/hint/hint.component';
import { of } from 'rxjs';

describe('CustomErrorsComponent', () => {
  let component: WiFiManagementComponent;
  let fixture: ComponentFixture<WiFiManagementComponent>;

  beforeEach(async () => {
    const mockAuthService = {
      currentUser: of({ admin: true, username: 'testuser' })
    };

    await TestBed.configureTestingModule({
      declarations: [WiFiManagementComponent, LoadingComponent, HintComponent],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [
        { provide: AuthenticationService, useValue: mockAuthService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WiFiManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
