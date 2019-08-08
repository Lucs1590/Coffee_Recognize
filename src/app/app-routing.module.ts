import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'photo-quant', loadChildren: './photo-quant/photo-quant.module#PhotoQuantifyModule' },
  { path: 'preview', loadChildren: './preview/preview.module#PreviewPageModule' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
