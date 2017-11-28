import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { MovieService } from './services/movie.service'
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesFilterPipe } from './shared/movies-filter.pipe';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule],
    declarations: [MoviesListComponent, MoviesFilterPipe, MovieComponent],
    providers: [MovieService],
    bootstrap: [MoviesListComponent]
})
export class AppModule { }
