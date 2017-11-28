import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Movie } from '../../app/models/movie';

@Injectable()
export class MovieService {
  private baseUrl = 'http://localhost:49715/api';
  private moviesList: Observable<Movie[]>;

  constructor(private http: Http) {
    this.moviesList = this.getAllMovies();
  }

  private getAllMovies(): Observable<Movie[]> {
    return this.http.get(this.baseUrl + '/movies')
      .map((res: Response) => <Movie[]>res.json());
  }

  public getMovies(filter: string): Observable<Movie[]> {
    if (!filter) {
      return this.moviesList;
    }
    // tslint:disable-next-line:max-line-length
    return this.moviesList.map(movies => movies.filter(movie => movie.name.startsWith(filter.trim()) || movie.genre.startsWith(filter.trim())));
  }

  public getMovieById(id: string): Observable<Movie[]> {
    return this.moviesList.map(movies => movies.filter(movie => movie.id.startsWith(id.trim())));
  }

  public addMovie(m: Movie): Observable<Response> {
    return this.http.post(this.baseUrl + '/movies', m)
      .map((res: Response) => { return res });
  }


  public deleteMovie(id: string): Observable<Response> {
    return this.http.delete(this.baseUrl + '/movies/' + id, id).map((res: Response) => { return res });

  }
  public editMovie(m: Movie): Observable<Response> {
    return this.http.put(this.baseUrl + '/movies/' + m.id, m).map((res: Response) => { return res });

  }

}
