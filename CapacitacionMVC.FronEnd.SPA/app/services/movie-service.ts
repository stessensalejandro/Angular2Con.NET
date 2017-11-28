import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Movie } from '../../app/models/movie';

@Injectable()
export class MovieService {
    private baseUrl: string = 'http://localhost:3276/api';
    private moviesList: Observable<Movie[]>;

    constructor(private http: Http) {
        this.moviesList = this.getMovies();
    }

    private getMovies() : Observable<Movie[]> {
        return this.http.get(this.baseUrl + '/movies')
            .map((res: Response) => <Movie[]>res.json());
    }

    public getmovies(filter: string): Observable<Movie[]> {
        if (!filter) {
            return this.moviesList;
        }

        return this.moviesList.map(movies => movies.filter(movie => movie.name.startsWith(filter.trim()) || movie.genre.startsWith(filter.trim())));
    }
}