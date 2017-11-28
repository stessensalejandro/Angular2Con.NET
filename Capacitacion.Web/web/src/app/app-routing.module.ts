import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieService} from './services/movie.service';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';


import { MoviesAddComponent } from './movies-add/movies-add.component';



import { GenresListComponent } from './genres-list/genres-list.component';
import { GenresAddComponent } from './genres-add/genres-add.component';

const appRoutes: Routes = [
  { path: 'add-genre/:id', component: GenresAddComponent },
  { path: 'add-movie/:id', component: MoviesAddComponent },

  { path: 'add-movie', component: MoviesAddComponent },
  {
    path: 'movies-list',
    component: MoviesListComponent,
    data: { title: 'Movie List' }
  },
  { path: 'genres-list', component: GenresListComponent},
  //{ path: 'add-genre', component: GenresAddComponent },
  { path: '', redirectTo: '/movies-list', pathMatch: 'full' }
  
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
