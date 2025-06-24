import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GPSComponent } from './gps.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from '../../utils/loading/loading.component';
import { HintComponent } from '../../utils/hint/hint.component';
import { MapGraphComponent } from '../../utils/mapgraph/mapgraph.component';

describe('GPSComponent', () => {
  let component: GPSComponent;
  let fixture: ComponentFixture<GPSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GPSComponent, LoadingComponent, HintComponent, MapGraphComponent],
      imports: [HttpClientModule, FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
