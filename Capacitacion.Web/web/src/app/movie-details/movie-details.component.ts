import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
    selector: '[movie-details]',
    templateUrl: 'movie-details.component.html'
})

export class MovieDetailsComponent {
    @Input() movie: Movie;

    constructor(private _movieService: MovieService) { }

    deleteMovie(movie: Movie): void {
        this._movieService.deleteMovie(movie.id).subscribe();
    }

    editMovie(movie: Movie): void {
        this._movieService.editMovie(movie).subscribe();
    }
}
