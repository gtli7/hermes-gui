import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageConfigComponent } from './message-config.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from '../../utils/loading/loading.component';
import { HintComponent } from '../../utils/hint/hint.component';

describe('MessageadmComponent', () => {
  let component: MessageConfigComponent;
  let fixture: ComponentFixture<MessageConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessageConfigComponent, LoadingComponent, HintComponent],
      imports: [HttpClientModule, FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
