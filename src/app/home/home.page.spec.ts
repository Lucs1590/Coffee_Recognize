import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Home } from './home.page';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicStorageModule } from '@ionic/storage';

describe('HomeComponent', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Home],
      imports: [
        RouterTestingModule,
        IonicStorageModule.forRoot(),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [SocialSharing, File, Storage]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Testing Defined Values', () => {

    it('img_url should be equal in front', () => {
      const img = 'https://raw.githubusercontent.com/Lucs1590/Coffee_Recognize/master/src/assets/imagens/leaf-recognition-share.jpg';
      expect(img).toEqual(component.img_url);
    });

    it('download_url should be equal in front', () => {
      const url = 'http://bit.ly/Coffee-Recognize';
      expect(url).toEqual(component.download_url);
    });

    it('text_share should be equal in front', () => {
      const text = 'I found a very cool app and I remembered you. Access the link and have a look.';
      expect(text).toEqual(component.text_share);
    });

  });

});
