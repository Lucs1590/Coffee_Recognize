import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PhotoRecPage } from './photo-rec.page';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';

const routes: Routes = [
  {
    path: '',
    component: PhotoRecPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [CameraPreview],
  declarations: [PhotoRecPage]
})
export class PhotoRecPageModule { }
