"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var MovieService = (function () {
    function MovieService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3276/api';
        this.moviesList = this.getMovies();
    }
    MovieService.prototype.getMovies = function () {
        return this.http.get(this.baseUrl + '/movies')
            .map(function (res) { return res.json(); });
    };
    MovieService.prototype.getmovies = function (filter) {
        if (!filter) {
            return this.moviesList;
        }
        return this.moviesList.map(function (movies) { return movies.filter(function (movie) { return movie.name.startsWith(filter.trim()) || movie.genre.startsWith(filter.trim()); }); });
    };
    MovieService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], MovieService);
    return MovieService;
}());
exports.MovieService = MovieService;
//# sourceMappingURL=movie-service.js.map