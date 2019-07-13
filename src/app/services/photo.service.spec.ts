import { TestBed } from '@angular/core/testing';

import { PhotoService } from './photo.service';
import { Camera } from '@ionic-native/camera/ngx';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { PhotoRecognize } from '../tab2/tab2.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PhotoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [Camera],
    imports: [ IonicStorageModule.forRoot(), HttpClientTestingModule ],
    declarations: [PhotoRecognize],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  }));

  it('should be created', () => {
    const service: PhotoService = TestBed.get(PhotoService);
    expect(service).toBeTruthy();
  });
});
