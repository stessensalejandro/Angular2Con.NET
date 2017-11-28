using CapacitacionMVC.FronEnd.SPA.Models;
using CapacitacionMVC.Services;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web.Http;

namespace CapacitacionMVC.FronEnd.SPA.Controllers
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
                Name = p.Name,
                ReleaseDate = p.ReleaseDate.ToShortDateString(),
                Plot = p.Plot,
                Runtime = p.Runtime,
                CoverLink = p.CoverLink,
                Genre = p.Genre.Name
            }).ToList();

            return result;
        }
    }
}
