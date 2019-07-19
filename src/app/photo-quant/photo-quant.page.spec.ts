import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoQuantify } from './photo-quant.page';
import { RouterTestingModule } from '@angular/router/testing';

describe('PhotoQuantify', () => {
  let component: PhotoQuantify;
  let fixture: ComponentFixture<PhotoQuantify>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoQuantify],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoQuantify);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
