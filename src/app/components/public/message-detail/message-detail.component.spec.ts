import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageDetailComponent } from './message-detail.component';
import { Message } from '../../../interfaces/message';
import { RouterTestingModule } from "@angular/router/testing";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { LoadingComponent } from '../../utils/loading/loading.component';

describe('MessageDetailComponent', () => {
  let component: MessageDetailComponent;
  let fixture: ComponentFixture<MessageDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [MessageDetailComponent, LoadingComponent],
    imports: [RouterTestingModule],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
