import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoRecognize } from './tab2.page';

describe('Tab2Page', () => {
  let component: PhotoRecognize;
  let fixture: ComponentFixture<PhotoRecognize>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoRecognize],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoRecognize);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
