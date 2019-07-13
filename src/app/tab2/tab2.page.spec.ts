import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoRecognize } from './tab2.page';
import { Camera } from '@ionic-native/camera/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PhotoRecognize', () => {
  let component: PhotoRecognize;
  let fixture: ComponentFixture<PhotoRecognize>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoRecognize],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [Camera],
      imports: [IonicStorageModule.forRoot(), HttpClientTestingModule]
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
