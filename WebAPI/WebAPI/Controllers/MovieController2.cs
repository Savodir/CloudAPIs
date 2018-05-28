using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http.Cors;
namespace WebAPI.Controllers
{
    [Route("api/v1/books")]
    public class MovieController2 : Controller
    {
        private readonly LibraryContext context;
        public MovieController2(LibraryContext context)
        {
            this.context = context;
        }
        [Route("test")]
        [HttpGet]
        public List<Movie> getAllMovies()
        {
            return context.movies.ToList();
        }
        [Route("test/{id}")]
        [HttpGet]
        public Movie getMovie(int id)
        {
            var movie = context.movies.Find(id);
            return movie;
        }
        [Route("post")]
        [HttpPost]
        public IActionResult createMovie([FromBody] Movie newMovie)
        {
            context.movies.Add(newMovie);
            context.SaveChanges();
            return Created("", newMovie);
        }
        [Route("{id}")]
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
    }
}
