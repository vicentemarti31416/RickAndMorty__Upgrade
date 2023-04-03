import { GalleryComponent } from './components/gallery/gallery.component';
import { DetailsComponent } from './components/details/details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: 'gallery', component: GalleryComponent },
  { path: 'details/:message', component: DetailsComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
