import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RadioConfigComponent } from './radio-config.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from '../../utils/loading/loading.component';
import { HintComponent } from '../../utils/hint/hint.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('RadioConfigComponent', () => {
  let component: RadioConfigComponent;
  let fixture: ComponentFixture<RadioConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [RadioConfigComponent, LoadingComponent, HintComponent],
    schemas: [NO_ERRORS_SCHEMA],
    imports: [FormsModule],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
