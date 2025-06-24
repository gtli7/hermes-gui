import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MenuComponent } from './menu.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthenticationService } from '../../../_services/authentication.service';
import { SharedService } from '../../../_services/shared.service';
import { WebsocketService } from '../../../_services/websocket.service';
import { UtilsService } from '../../../_services/utils.service';
import { LoadingComponent } from '../../utils/loading/loading.component';
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
      formatDate: (date: any) => date,
      isItRuningLocal: () => false,
      isSBitxRadio: () => false
    };

    await TestBed.configureTestingModule({
    declarations: [MenuComponent, LoadingComponent],
    imports: [RouterTestingModule,
        ReactiveFormsModule,
        FormsModule],
    providers: [
        { provide: AuthenticationService, useValue: mockAuthService },
        { provide: SharedService, useValue: mockSharedService },
        { provide: WebsocketService, useValue: mockWebsocketService },
        { provide: UtilsService, useValue: mockUtilsService },
        provideHttpClient(withInterceptorsFromDi())
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
