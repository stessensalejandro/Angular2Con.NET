using Capacitacion.Data;
using Capacitacion.Entities;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Capacitacion.Services
{
    public class GenresService : IGenresService
    {
        private readonly DomainContext _context;

        public GenresService(DomainContext context)
        {
            this._context = context;
        }

        public IList<Entities.Genre> GetGenres()
        {
            return this._context.Genres.ToList();
        }

        public IList<Entities.Genre> SearchGenres(string searchValue)
        {
            if (string.IsNullOrWhiteSpace(searchValue))
            {
                return this._context.Genres.ToList();
            }

            return this._context.Genres.Where(p =>
                p.Name.ToLower().StartsWith(searchValue.ToLower().Trim()))
                .ToList();
        }

        public Entities.Genre GetGenreById(Guid genreId)
        {

            return this._context.Genres.Find(genreId);
        }

        public void AddGenre(Genre g)
        {
            g.Id = Guid.NewGuid();
            this._context.Genres.Add(g);
            this._context.SaveChanges();
        }

        public void DeleteGenre(Guid genreId)
        {
            var genre = this._context.Genres.Find(genreId);
            if (genre != null)
            {
                this._context.Genres.Remove(genre);
                this._context.SaveChanges();
            }
        }

        public void EditGenre(Genre genre)
        {
            var g = this._context.Genres.Find(genre.Id);
            g.Name = genre.Name;
            this._context.Entry(g).State = System.Data.Entity.EntityState.Modified;
            this._context.SaveChanges();
        }
    }
}
