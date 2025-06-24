import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RadioConfigComponent } from './radio-config.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from '../../utils/loading/loading.component';
import { HintComponent } from '../../utils/hint/hint.component';

describe('RadioConfigComponent', () => {
  let component: RadioConfigComponent;
  let fixture: ComponentFixture<RadioConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RadioConfigComponent, LoadingComponent, HintComponent],
      imports: [HttpClientModule, FormsModule]
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
