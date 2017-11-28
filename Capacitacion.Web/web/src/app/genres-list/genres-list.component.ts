import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Genre } from '../models/genre';
import { GenreService } from '../services/genre.service';

@Component({
    selector: 'genres-list',
    templateUrl: 'genres-list.component.html',
    providers: [GenreService]
    
})
export class GenresListComponent implements OnInit  {
    private genres: Genre[];
    private filter: string;

    constructor(private _genreService: GenreService) {
    }

    ngOnInit() {
        this.loadGenres();
    }

    ngOnChanges() {
        this.loadGenres();
    }

    loadGenres() {
        this._genreService.getGenres("").subscribe(data => this.genres = data); // me suscribe y te devuelve en data la llamada del servicio (la respuesta)
    }

    deleteGenre(genre: Genre): void {
        this._genreService.deleteGenre(genre.id).subscribe();
    }
}
