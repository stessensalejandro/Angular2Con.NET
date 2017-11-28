import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Movie } from '../models/movie';
import { MovieService} from '../services/movie.service';

@Component({
    selector: 'movies-list',
    templateUrl: 'movies-list.component.html'
})

@Injectable()
export class MoviesListComponent implements OnInit  {
    private movies: Movie[];
    private filter: string;

    constructor(private service: MovieService) {
    }

    ngOnInit() {
        this.loadMovies();
    }

    loadMovies() {
        this.service.getMovies(this.filter).subscribe(data => this.movies = data);
    }
}
