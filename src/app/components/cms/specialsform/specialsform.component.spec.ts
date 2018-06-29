import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialsformComponent } from './specialsform.component';

describe('SpecialsformComponent', () => {
  let component: SpecialsformComponent;
  let fixture: ComponentFixture<SpecialsformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialsformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
