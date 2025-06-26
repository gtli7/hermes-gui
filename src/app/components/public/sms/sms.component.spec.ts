import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SMSComponent } from './sms.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoadingComponent } from '../../utils/loading/loading.component';
import { HintComponent } from '../../utils/hint/hint.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SearchPipe } from '../../../pipes/search.pipe';

describe('SMSComponent', () => {
  let component: SMSComponent;
  let fixture: ComponentFixture<SMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [SMSComponent, LoadingComponent, HintComponent],
    schemas: [NO_ERRORS_SCHEMA],
    imports: [RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        SearchPipe],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
