import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArlingtonComponent } from './arlington.component';

describe('ArlingtonComponent', () => {
  let component: ArlingtonComponent;
  let fixture: ComponentFixture<ArlingtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArlingtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArlingtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
