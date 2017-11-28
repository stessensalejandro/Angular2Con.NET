import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


import { MovieService} from './services/movie.service';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesAddComponent } from './movies-add/movies-add.component';

import { GenreService } from './services/genre.service';
import { GenresListComponent } from './genres-list/genres-list.component';
import { GenresAddComponent } from './genres-add/genres-add.component';

import { AppComponent } from './app.component';
import { MoviesSearchComponent } from './movie-search/movie-search.component';

import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
      MoviesListComponent,
      MovieDetailsComponent,
      MoviesAddComponent,
    GenresListComponent,
    GenresAddComponent,
    AppComponent,
    MoviesSearchComponent

  ],
  imports: [
      BrowserModule,
      HttpModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutingModule
  ],
  providers: [MovieService, GenreService, DatePipe],
 // bootstrap: [MoviesListComponent, MoviesAddComponent]
 bootstrap: [AppComponent, MoviesListComponent, MovieDetailsComponent]
})
export class AppModule { }
