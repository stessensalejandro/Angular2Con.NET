using Capacitacion.Services;
using Capacitacion.WebApi.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System;

namespace Capacitacion.WebApi.Controllers
{
    public class MoviesController : ApiController
    {
        private readonly IMoviesService _moviesSvc;

        public MoviesController(IMoviesService moviesSvc)
        {
            _moviesSvc = moviesSvc;
        }

        [HttpGet]
        public List<Movie> GetMovies()
        {
            var movies = _moviesSvc.GetMovies().ToList();

            var result = movies.Select(p => new Movie
            {
                Id =Convert.ToString(p.Id),
                Name = p.Name,
                ReleaseDate = p.ReleaseDate.ToShortDateString(),
                Plot = p.Plot,
                Runtime = p.Runtime,
                CoverLink = p.CoverLink,
                Genre = p.Genre.Name
            }).ToList();

            return result;
        }

        [HttpPost]
        //IHttpActionResult googlear
        public IHttpActionResult AddMovie(Entities.Movie m)
        {
            _moviesSvc.AddMovie(m);

            return Ok();
        }

        [HttpDelete]
        public void DeleteMovie(System.Guid id)
        {
            _moviesSvc.DeleteMovie(id);
        }

        [HttpPut]
        public void EditMovie(Entities.Movie m)
        {
            _moviesSvc.EditMovie(m);
        }

    }
}
