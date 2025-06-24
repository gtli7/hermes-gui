import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SMSChatComponent } from './smschat.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoadingComponent } from '../../utils/loading/loading.component';
import { HintComponent } from '../../utils/hint/hint.component';

describe('SMSChatComponent', () => {
  let component: SMSChatComponent;
  let fixture: ComponentFixture<SMSChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [SMSChatComponent, LoadingComponent, HintComponent],
    imports: [RouterTestingModule,
        ReactiveFormsModule,
        FormsModule],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SMSChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
