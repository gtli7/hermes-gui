import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MenuComponent } from './menu.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthenticationService } from '../../../_services/authentication.service';
import { SharedService } from '../../../_services/shared.service';
import { WebsocketService } from '../../../_services/websocket.service';
import { UtilsService } from '../../../_services/utils.service';
import { of, BehaviorSubject } from 'rxjs';

describe('CustomErrorsComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    const mockAuthService = {
      currentUser: of({ admin: true, username: 'testuser' }),
      logout: () => {}
    };
    
    const mockSharedService = {
      radioObj: new BehaviorSubject({ connection: true, profile: 0 })
    };
    
    const mockWebsocketService = {
      connect: () => {},
      disconnect: () => {},
      closeConnection: () => {},
      send: () => {}
    };
    
    const mockUtilsService = {
      formatDate: (date: any) => date
    };

    await TestBed.configureTestingModule({
      declarations: [MenuComponent],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule],
      providers: [
        { provide: AuthenticationService, useValue: mockAuthService },
        { provide: SharedService, useValue: mockSharedService },
        { provide: WebsocketService, useValue: mockWebsocketService },
        { provide: UtilsService, useValue: mockUtilsService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
