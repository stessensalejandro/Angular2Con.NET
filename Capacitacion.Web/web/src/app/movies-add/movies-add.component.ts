import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Movie } from '../models/movie';
import { Genre } from '../models/genre';
import { MovieService } from '../services/movie.service';
import { GenreService } from '../services/genre.service';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { DatePipe } from '@angular/common';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'movies-add',
  templateUrl: 'movies-add.component.html',
  providers: [GenreService,DatePipe]
})
export class MoviesAddComponent implements OnInit {
  movieForm: FormGroup;
  successMessage: boolean;
  errorMessage: string = "";
  genres: Genre[];
    
  constructor(private _movieService: MovieService, private _genreService: GenreService, private fb: FormBuilder,
    private route: ActivatedRoute, public datePipe: DatePipe) {
      this._genreService.getGenres("").subscribe(data => this.genres = data);
  }
  
  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      if (params.id) {
        //Initialize form with movie
        console.log("Entra con parametro");
        this.route.paramMap.switchMap((params: ParamMap) =>
          this._movieService.getMovieById(params.get('id')))
          .subscribe(data => this.createForm(data[0].name, data[0].releaseDate, data[0].plot, data[0].coverLink, data[0].runtime, data[0].genreId));
      }
      else {

        console.log("Entra sin parametro");
        this.createEmptyForm();
      }
    });


    //this.createForm();
  }

  onSubmit({ value }: { value: Movie }) {
    this.route.params.subscribe((params: any) => {
      if (params.id) {
        //Edit
        value.id = params.id;
        this._movieService.editMovie(value)
          .subscribe(response => {
            this.successMessage = response.ok;
          },
          error => this.errorMessage = error);
      }
      else {
        //Add new
        this._genreService.addGenre(value)
          .subscribe(response => {
            this.successMessage = response.ok;
          },
          error => this.errorMessage = error);
      }
    }); 


    /*
    this._movieService.addMovie(value).subscribe(response => {
      this.successMessage = response.ok;
    });
    this.resetForm();*/
  }

  createForm(nameValue: string, releaseDateValue: Date, plotValue: string, cLinkValue: string, runtimeValue: number, genreIdValue: string) {
    this.movieForm = this.fb.group({
      name: [nameValue, Validators.required],
      releaseDate: '2010-05-16',
      plot: [plotValue, Validators.required],
      coverLink: [cLinkValue, Validators.required],
      runtime: [runtimeValue, Validators.required],
      genreId: ['', Validators.required]
    })
  }

  createEmptyForm() {

    this.movieForm = this.fb.group({
      name: ['', Validators.required],
      releaseDate: ['', Validators.required],
      plot: ['', Validators.required],
      coverLink: ['', Validators.required],
      runtime: ['', Validators.required],
      genreId: ['', Validators.required]
    })
  }

  resetForm() {
    this.movieForm.reset();
  }
}
