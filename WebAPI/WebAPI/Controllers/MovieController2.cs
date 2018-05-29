using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
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
            return context.movies.ToList();
        }
        [Route("i/{id}")]
        [HttpGet]
        public Movie getMovieID(int id)
        {
            var movie = context.movies.Find(id);
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
        public IActionResult deleteBook(int id)
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
    }
}
