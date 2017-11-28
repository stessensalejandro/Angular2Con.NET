import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Genre } from '../../app/models/genre';

@Injectable()
export class GenreService {
  private baseUrl: string = 'http://localhost:49715/api';
  private genresList: Observable<Genre[]>;

  constructor(private http: Http) {
    this.genresList = this.getAllGenres();
  }

  private getAllGenres(): Observable<Genre[]> {
    return this.http.get(this.baseUrl + '/genres')
      .map((res: Response) => <Genre[]>res.json());
  }

  public getGenres(filter: string): Observable<Genre[]> {
    if (!filter)
      return this.getAllGenres();
    else
      return this.genresList.map(genres => genres.filter(genre => genre.id.startsWith(filter.trim())));

  }

  public getGenreById(id: string) {
    return this.http.get(this.baseUrl + '/genres/' + id)
      .map((res: Response) => <Genre>res.json());
    //return this.genresList.map(genres => genres.filter(genre => genre.id.startsWith(id.trim())));
  }

  public addGenre(g: Genre): Observable<Response> {
    return this.http.post(this.baseUrl + '/genres', g)
      .map((res: Response) => { return res });
  }

  public editGenre(g: Genre): Observable<Response> {
    return this.http.put(this.baseUrl + '/genres/' + g.id, g)
      .map((res: Response) => { return res });
  }

  public deleteGenre(id: string): Observable<Response> {
    return this.http.delete(this.baseUrl + '/genres/' + id, id).map((res: Response) => { return res });

  }

}

