import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoRecPage } from './photo-rec.page';

describe('PhotoRecPage', () => {
  let component: PhotoRecPage;
  let fixture: ComponentFixture<PhotoRecPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoRecPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoRecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
