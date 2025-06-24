import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperatorComponent } from './operator.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from '../../utils/loading/loading.component';
import { HintComponent } from '../../utils/hint/hint.component';
import { ProgressBarComponent } from '../../utils/progressbar/progressbar.component';
import { ClockHandGraphComponent } from '../../utils/clockhandgraph/clockhandgraph.component';
import { XYGraphComponent } from '../../utils/xygraph/xygraph.component';
import { MapGraphComponent } from '../../utils/mapgraph/mapgraph.component';

describe('OperatorComponent', () => {
  let component: OperatorComponent;
  let fixture: ComponentFixture<OperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorComponent, LoadingComponent, HintComponent, ProgressBarComponent, ClockHandGraphComponent, XYGraphComponent, MapGraphComponent ],
      imports: [ HttpClientModule, FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
