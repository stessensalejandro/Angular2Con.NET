import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from "rxjs/Observable";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import 'rxjs/add/operator/switchMap';

import { GenreService } from '../services/genre.service';
import { Genre } from '../models/genre';

@Component({
  selector: 'genres-add',
  templateUrl: 'genres-add.component.html',
  providers: [GenreService]
})

export class GenresAddComponent implements OnInit {
  genreForm: FormGroup;
  errorMessage: string = "";
  successMessage: boolean;

  constructor(private fb: FormBuilder,
    private _genreService: GenreService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      if (params.id) {
        //Initialize form with genre
        this.route.paramMap.switchMap((params: ParamMap) =>
          this._genreService.getGenres(params.get('id')))
          .subscribe(data => this.createForm(data[0].name));
      }
      else {
        this.createForm('');
      }
    });
  }

  onSubmit({ value }: { value: Genre }) {
    this.resetForm();


    this.route.params.subscribe((params: any) => {
      if (params.id) {
        //Edit
        value.id = params.id;
        this._genreService.editGenre(value)
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
  }

  createForm(nameValue: string) {
    this.genreForm = this.fb.group({
      name: [nameValue, Validators.required]
    });
  }

  resetForm() {
    this.errorMessage = "";
    this.successMessage = false;
    this.genreForm.reset();
  }

}
