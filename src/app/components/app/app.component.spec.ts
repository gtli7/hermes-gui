import { } from "jasmine"
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { Idle } from '@ng-idle/core';
import { Component } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  template: ''
})
class MockLanguagesComponent { }

@Component({
  template: ''
})
class MockHomeComponent { }

describe('AppComponent', () => {

  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [
        AppComponent,
        MockLanguagesComponent,
        MockHomeComponent
    ],
    schemas: [NO_ERRORS_SCHEMA],
    imports: [RouterTestingModule.withRoutes([
            { path: 'languages', component: MockLanguagesComponent },
            { path: 'home', component: MockHomeComponent }
        ])],
    providers: [
        { provide: Idle, useValue: {
                watch: () => { },
                stop: () => { },
                setIdle: () => { },
                setTimeout: () => { },
                setInterrupts: () => { },
                onIdleEnd: { subscribe: () => ({ unsubscribe: () => { } }) },
                onTimeout: { subscribe: () => ({ unsubscribe: () => { } }) },
                onIdleStart: { subscribe: () => ({ unsubscribe: () => { } }) },
                onTimeoutWarning: { subscribe: () => ({ unsubscribe: () => { } }) }
            } },
        provideHttpClient(withInterceptorsFromDi())
    ]
}).compileComponents();


    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges()
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'hermes'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('hermes.radio');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    // expect(compiled.querySelector('.content span').textContent).toContain('hermes app is running!');
  });

  // it('should create the WS', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it('check system', () => {
  //   expect(app.getSystemStatus()).toBeTrue();
  // });
  
});
