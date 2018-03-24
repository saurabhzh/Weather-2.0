import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachMapComponent } from './serach-map.component';

describe('SerachMapComponent', () => {
  let component: SerachMapComponent;
  let fixture: ComponentFixture<SerachMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerachMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerachMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
