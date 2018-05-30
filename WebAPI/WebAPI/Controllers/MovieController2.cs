using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http.Cors;
namespace WebAPI.Controllers
{
    [Route("api/v2/movies")]
    public class MovieController2 : Controller
    {
        private readonly LibraryContext context;
        public MovieController2(LibraryContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public List<Movie> getAllMovies()
        {
            List<Movie> list = new List<Movie>();
            list = context.movies.Include(d => d.director).ToList();
            return list;
        }
        [Route("i/{id}")]
        [HttpGet]
        public Movie getMovieID(int id)
        {
            var movie = context.movies
                .Include(d => d.director)
                .SingleOrDefault(d => d.ID == id);
            return movie;
        }
        [Route("t/{title}")]
        [HttpGet]
        public List<Movie> getMovieTitle(string title, string year)
        {
            IQueryable<Movie> query = context.movies;
            query = query.Where(d => d.Title == title);
            return query.ToList();

        }
        [Route("post")]
        [HttpPost]
        public IActionResult createMovie([FromBody] Movie newMovie)
        {
            context.movies.Add(newMovie);
            context.SaveChanges();
            return Created("", newMovie);
        }
        [Route("d/{id}")]
        [HttpDelete]
        public IActionResult deleteMovie(int id)
        {
            var movie = context.movies.Find(id);
            if (movie == null)
            {
                return NotFound();
            }
            context.movies.Remove(movie);
            context.SaveChanges();
            return NoContent();
        }
        [Route("put")]
        [HttpPut]
        public IActionResult UpdateMovie([FromBody] Movie updateMovie)
        {
            var orgMovie = context.movies.Find(updateMovie.ID);
            if (orgMovie == null)
                return NotFound();

            orgMovie.Title = updateMovie.Title;
            orgMovie.Year = updateMovie.Year;
            orgMovie.Type = updateMovie.Type;
      
            context.SaveChanges();
            return Ok(orgMovie);
        }
        [Route("dir/{directorsID}")]
        [HttpGet]
        public List<Movie> getMovieTitlesByDirectorID(int directorsID, int? page = 0, string sort = "year", int length = 2, string dir = "asc")
        {
            IQueryable<Movie> query = context.movies;
            var director = context.directors
                              .SingleOrDefault(d => d.ID == directorsID);
            query = query.Where(d => d.director == director);
            if (dir == "asc")
            {
                query = query.OrderBy(d => d.Year);
            }
            else if (dir == "desc")
            {
                query = query.OrderByDescending(d => d.Year);
            }
            if (page.HasValue)
            {
                query = query.Skip(page.Value * length);
            }
            query = query.Take(length);
            return query.ToList();

        }
    }
}
