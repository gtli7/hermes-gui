import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StationInformationComponent } from './station-information.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from '../../utils/loading/loading.component';
import { HintComponent } from '../../utils/hint/hint.component';

describe('NetadminComponent', () => {
  let component: StationInformationComponent;
  let fixture: ComponentFixture<StationInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StationInformationComponent, LoadingComponent, HintComponent],
      imports: [HttpClientModule, FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StationInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
