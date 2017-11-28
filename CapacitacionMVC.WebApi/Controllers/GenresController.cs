using Capacitacion.Services;
using Capacitacion.WebApi.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace Capacitacion.WebApi.Controllers
{
    public class GenresController : ApiController
    {
        private readonly IGenresService _genresSvc;

        public GenresController(IGenresService genresSvc)
        {
            _genresSvc = genresSvc;
        }

        [HttpGet]
        public List<Genre> GetGenres()
        {
            var genres = _genresSvc.GetGenres().ToList();

            var result = genres.Select(p => new Genre
            {
                Name = p.Name,
                Id = p.Id.ToString()

            }).ToList();

            return result;
        }

        [HttpPost]
        public IHttpActionResult AddGenre(Entities.Genre g)
        {
            _genresSvc.AddGenre(g);

            return Ok();
        }

        [HttpDelete]
        public void DeleteGenre(System.Guid id)
        {
            _genresSvc.DeleteGenre(id);
        }

        [HttpPut]
        public IHttpActionResult EditGenre(Entities.Genre g)
        {
            _genresSvc.EditGenre(g);
            return Ok();
        }
    }
}

