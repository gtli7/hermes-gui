import { TestBed } from '@angular/core/testing';
import { CustomErrorsService } from './custom-errors.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('CustomErrorsService', () => {
  let service: CustomErrorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [provideHttpClient(withInterceptorsFromDi())]
});
    service = TestBed.inject(CustomErrorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
