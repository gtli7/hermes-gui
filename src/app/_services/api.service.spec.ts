import { TestBed } from '@angular/core/testing'
import { ApiService } from './api.service'
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing'
import { HttpClient, HttpErrorResponse, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'
import { GlobalConstants } from '../global-constants';
import { Schedule } from '../interfaces/schedule'

describe('ApiService', () => {
  let service: ApiService,
    http: HttpClient,
    httpMock: HttpTestingController,
    originalTimeout,
    schedules: any

  beforeEach(() => {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000

    TestBed.configureTestingModule({
    imports: [],
    providers: [
        ApiService,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
    ]
})
    service = TestBed.inject(ApiService)
    http = TestBed.inject(HttpClient)
    httpMock = TestBed.inject(HttpTestingController)
  })

  afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout
    httpMock.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  //APP GENERALS
  it('should test url server status', () => {
    const spy = spyOn(http, 'get').and.callThrough()
    service.getStatus()
    expect(spy).toHaveBeenCalledWith(`${GlobalConstants.apiURL}/sys/status`);
  })

  it('should return get status server defined', (done: DoneFn) => {
    const mockResponse = { status: 'ok' };
    
    service.getStatus().subscribe(data => {
      expect(data).toBeDefined()
      expect(data).toEqual(mockResponse)
      done()
    })
    
    const req = httpMock.expectOne(`${GlobalConstants.apiURL}/sys/status`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  })

  it('should test url system configurations server', () => {
    const spy = spyOn(http, 'get').and.callThrough()
    service.getSysConfig()
    expect(spy).toHaveBeenCalledWith(`${GlobalConstants.apiURL}/sys/config`);
  })

  it('should get system configurations server defined', (done: DoneFn) => {
    const mockResponse = { config: 'test' };
    
    service.getSysConfig().subscribe(data => {
      expect(data).toBeDefined()
      expect(data).toEqual(mockResponse)
      done()
    })
    
    const req = httpMock.expectOne(`${GlobalConstants.apiURL}/sys/config`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  })

  //LOGIN NAO USA ******** TODO VERIFICAR
  it('should test url user login', () => {
    const login = 'root'
    const password = 'caduceu'
    service.getLogin(login, password).subscribe()
    
    const req = httpMock.expectOne(`${GlobalConstants.apiURL}/login`);
    expect(req.request.method).toBe('POST');
    req.flush({});
  })

  it('should get login response defined', (done: DoneFn) => {
    const login = 'root'
    const password = 'caduceu'
    const mockResponse = { token: 'test-token' };
    
    service.getLogin(login, password).subscribe(data => {
      expect(data).toBeDefined()
      expect(data).toEqual(mockResponse)
      done()
    })
    
    const req = httpMock.expectOne(`${GlobalConstants.apiURL}/login`);
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  })
  //END APP GENERALS

  //LOGS
  it('should get email log defined', (done: DoneFn) => {
    const mockResponse = { logs: [] };
    
    service.getMailLog().subscribe(data => {
      expect(data).toBeDefined()
      expect(data).toEqual(mockResponse)
      done()
    })
    
    const req = httpMock.expectOne(`${GlobalConstants.apiURL}/sys/maillog`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  })

  it('should get UUCP log defined', (done: DoneFn) => {
    const mockResponse = { logs: [] };
    
    service.getUucpLog().subscribe(data => {
      expect(data).toBeDefined()
      expect(data).toEqual(mockResponse)
      done()
    })
    
    const req = httpMock.expectOne(`${GlobalConstants.apiURL}/sys/uulog`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  })

  it('should get UUCP debug log defined', (done: DoneFn) => {
    const mockResponse = { logs: [] };
    
    service.getUucpDebugLog().subscribe(data => {
      expect(data).toBeDefined()
      expect(data).toEqual(mockResponse)
      done()
    })
    
    const req = httpMock.expectOne(`${GlobalConstants.apiURL}/sys/uudebug`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  })
  //END LOGS

  //SCHEDULES
  it('should add an schedule and return it', (done: DoneFn) => {
    const schedule: Schedule = {
      id: 1,
      title: 'Jasmine teste new schedule',
      starttime: '15:30:00',
      stoptime: '16:30:00',
      stations: ['local'],
      enable: true
    };

    const mockResponse = {
      id: 3,
      title: 'Jasmine teste new schedule',
      starttime: '15:30:00',
      stoptime: '16:30:00',
      stations: ['local'],
      enable: true
    };

    service.createSchedule(schedule).subscribe(data => {
      expect(data).toBeDefined()
      done()
    });
    
    const req = httpMock.expectOne(`${GlobalConstants.apiURL}/caller`);
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });

  it('should get schedules defined', (done: DoneFn) => {
    const mockResponse = [{ id: 1, title: 'Test Schedule' }];
    
    service.getSchedules().subscribe(data => {
      expect(data).toBeDefined()
      done()
    })
    
    const req = httpMock.expectOne(`${GlobalConstants.apiURL}/caller`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  })

  it('should get schedule 1 defined', (done: DoneFn) => {
    const mockResponse = { id: 1, title: 'Test Schedule' };
    
    service.getSchedule(1).subscribe(data => {
      expect(data).toBeDefined()
      expect(data).toEqual(mockResponse)
      done()
    })
    
    const req = httpMock.expectOne(`${GlobalConstants.apiURL}/caller/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  })

  it('should update schedule 1 and return it', (done: DoneFn) => {
    const schedule: Schedule = {
      id: 1,
      title: 'Jasmine teste new schedule - UPDATED',
      starttime: '16:30:00',
      stoptime: '17:30:00',
      stations: ['local'],
      enable: true
    };

    const mockResponse = { ...schedule };

    service.updateSchedule(1, schedule).subscribe(data => {
      expect(data).toBeDefined()
      expect(data).toEqual(mockResponse)
      done()
    });
    
    const req = httpMock.expectOne(`${GlobalConstants.apiURL}/caller/1`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockResponse);
  });

  it('should delete schedule id 1 and return it', (done: DoneFn) => {
    service.schedules = [
      { id: 1, title: 'Schedule to Delete', enable: true, starttime: '09:00', stoptime: '17:00', stations: [] },
      { id: 2, title: 'Remaining Schedule', enable: true, starttime: '10:00', stoptime: '18:00', stations: [] }
    ];
    
    service.deleteSchedule(1).subscribe(data => {
      expect(data).toBeDefined()
      done()
    });
    
    const req = httpMock.expectOne(`${GlobalConstants.apiURL}/caller/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush({ success: true });
  });
  //END SCHEDULES

  //MACHINE OPTIONS
  it('should restore machine default configurations', (done: DoneFn) => {
    const mockResponse = { success: true };
    
    service.sysRestore().subscribe(data => {
      expect(data).toBeDefined()
      expect(data).toEqual(mockResponse)
      done()
    });
    
    const req = httpMock.expectOne(`${GlobalConstants.apiURL}/sys/restore`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should shutdown machine', (done: DoneFn) => {
    const mockResponse = { success: true };
    
    service.sysShutdown().subscribe(data => {
      expect(data).toBeDefined()
      expect(data).toEqual(mockResponse)
      done()
    });
    
    const reqs = httpMock.match(`${GlobalConstants.apiURL}/sys/shutdown`);
    expect(reqs.length).toBe(2);
    reqs.forEach(req => {
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });
  });

  it('should restart machine', () => {
    service.sysReboot();
    
    const req = httpMock.expectOne(`${GlobalConstants.apiURL}/sys/reboot`);
    expect(req.request.method).toBe('GET');
    req.flush({});
  });

  //END MACHINE OPTIONS


  //MESSAGE CONFIG 
  it('should update message configuration allow hmp', (done: DoneFn) => {
    const allowHmp = "true"
    const mockResponse = { allowhmp: "true" };

    service.setMsgConfig(allowHmp).subscribe(data => {
      expect(data).toBeDefined()
      done()
    });
    
    const req = httpMock.expectOne(`${GlobalConstants.apiURL}/sys/config`);
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });

  it('should update message configuration allow file', (done: DoneFn) => {
    const allowFile = "true"
    const mockResponse = { allowfile: "true" };

    service.setFileConfig(allowFile).subscribe(data => {
      expect(data).toBeDefined()
      done()
    });
    
    const req = httpMock.expectOne(`${GlobalConstants.apiURL}/sys/config`);
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });
  //END MESSAGE CONFIG
});
