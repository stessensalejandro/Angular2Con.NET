import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieService} from '../services/movie.service'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
    selector: 'movies-list',
    templateUrl: 'movies-list.component.html',
    moduleId: module.id
})

export class MoviesListComponent implements OnInit  {
    private movies: Movie[];
    private filter: string;

    constructor(private service: MovieService) {
    }

    ngOnInit() {
        this.loadMovies();
    }

    loadMovies() {
        this.service.getmovies(this.filter).subscribe(data => this.movies = data);
    }

    func() {
        alert("called");
    }

}