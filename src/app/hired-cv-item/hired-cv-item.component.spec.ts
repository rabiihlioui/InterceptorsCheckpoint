import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiredCvItemComponent } from './hired-cv-item.component';

describe('HiredCvItemComponent', () => {
  let component: HiredCvItemComponent;
  let fixture: ComponentFixture<HiredCvItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiredCvItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiredCvItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
