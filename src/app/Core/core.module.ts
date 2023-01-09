import { NgModule } from '@angular/core';
import { SharedModule } from '../Shared/shared.module';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeMovieComponent } from './components/home-movie/home-movie.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    HomeComponent,
    HomeMovieComponent,
    AboutComponent,
    NotFoundComponent,
  ]
})
export class CoreModule { }
