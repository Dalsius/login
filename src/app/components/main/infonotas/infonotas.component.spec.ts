import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfonotasComponent } from './infonotas.component';

describe('InfonotasComponent', () => {
  let component: InfonotasComponent;
  let fixture: ComponentFixture<InfonotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfonotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfonotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
