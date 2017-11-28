using Capacitacion.Data;
using Capacitacion.Entities;
using System;
using System.Collections.Generic;
using System.Linq;


namespace Capacitacion.Services
{
    public class MoviesService : IMoviesService
    {
        private readonly DomainContext _context;
       
        public MoviesService(DomainContext context)
        {
            this._context = context;
        }

        public IList<Movie> GetMovies()
        {
            return _context.Movies.ToList();
        }

        public Movie GetMovieById(Guid id)
        {
            return this._context.Movies.Find(id);
        }

        public void AddMovie(Movie movie)
        {
            movie.Id = Guid.NewGuid();
            this._context.Movies.Add(movie);
            this._context.SaveChanges();
        }

        public void EditMovie(Movie movie )
        {
            var m = this._context.Movies.Find(movie.Id);
            m.Name = movie.Name;
            m.ReleaseDate = movie.ReleaseDate;
            m.Plot = movie.Plot;
            m.Runtime = movie.Runtime;
            m.CoverLink = movie.CoverLink;
            m.GenreId = movie.GenreId;
            this._context.Entry(m).State = System.Data.Entity.EntityState.Modified;
            this._context.SaveChanges();
        }

        public void DeleteMovie(Guid movieId)
        {
            var movie = this._context.Movies.Find(movieId);
            if (movie != null)
            {
                this._context.Movies.Remove(movie);
                this._context.SaveChanges();
            }
        }

    }
}
