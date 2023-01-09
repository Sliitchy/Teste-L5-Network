import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { ApiService } from './services/api.service';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    NavbarComponent,
    SearchComponent,
    SearchMovieComponent
  ],
  exports: [
    NavbarComponent,
    SearchComponent,
    SearchMovieComponent
  ],
  providers: [
    ApiService
  ]
})
export class SharedModule { }
