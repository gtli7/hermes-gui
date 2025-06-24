import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { homeComponent } from './home.component';
import { WebsocketService } from '../../../_services/websocket.service';

describe('homeComponent', () => {
  let component: homeComponent;
  let fixture: ComponentFixture<homeComponent>;

  beforeEach(async () => {
    const mockWebsocketService = {
      connect: () => {},
      disconnect: () => {},
      send: () => {}
    };

    await TestBed.configureTestingModule({
      declarations: [ homeComponent ],
      imports: [ HttpClientModule ],
      providers: [
        { provide: WebsocketService, useValue: mockWebsocketService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(homeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
