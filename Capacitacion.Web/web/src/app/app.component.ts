import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Bootcamp Hexacta</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="/movies-list">Movies<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/genres-list">Genres</a>
      </li>

    </ul>
    
  </div>
</nav>





    <router-outlet></router-outlet>
    <router-outlet name="popup"></router-outlet>
  `
})
export class AppComponent {
}
