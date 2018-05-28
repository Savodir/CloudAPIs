using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Controllers
{
    [Route("api/v1/movies")]
    public class Movies : Controller
    {
        [Route("{id}")]
        [HttpGet]
        public Movie getMovie(int id)
        {
            return new Movie()
            {
                ID = id,
                Title = "Book id",
                Year = "1950",
                Type = "TV"
            };
        }
        [HttpGet]
        public List<Movie> getMovies()
        {
            var list = new List<Movie>();
            list.Add(new Movie()
            {
                Title = "xD",
                Year = "1952",
                Type = "Lele"
            });
            list.Add(new Movie()
            {
                Title = "xD2",
                Year = "1856",
                Type = "xdD"
            });
            return list;
        }

        [Route("movies")]
        [HttpDelete]
        public void deleteBook()
        {

        }
        
        [Route("movies")]
        [HttpPost]
        public void createBook()
        {

        }

        [Route("movies")]
        [HttpPut]
        public void updateBook()
        {

        }
    }
}
