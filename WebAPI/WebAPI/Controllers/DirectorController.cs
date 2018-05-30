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
    [Route("api/v2/directors")]

    public class DirectorController : Controller
    {
        private readonly LibraryContext context;
        public DirectorController(LibraryContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public List<Director> getAllDirectors()
        {
            List<Director> list = new List<Director>();
            list = context.directors.ToList();
            return list;
        }
        [Route("i/{id}")]
        [HttpGet]
        public Director getDirectorID(int id)
        {
            var director = context.directors
                .SingleOrDefault(d => d.ID == id);
            return director;
        }
        [Route("t/{lastName}")]
        [HttpGet]
        public List<Director> getDirectorByName(string lastName)
        {
            IQueryable<Director> query = context.directors;
            query = query.Where(d => d.lastName == lastName);
            return query.ToList();

        }
        [Route("post")]
        [HttpPost]
        public IActionResult createDirector([FromBody] Director director)
        {
            context.directors.Add(director);
            context.SaveChanges();
            return Created("", director);
        }
        [Route("d/{id}")]
        [HttpDelete]
        public IActionResult deleteDirector(int id)
        {
            var director = context.directors.Find(id);
            if (director == null)
            {
                return NotFound();
            }
            context.directors.Remove(director);
            context.SaveChanges();
            return NoContent();
        }
        [Route("put")]
        [HttpPut]
        public IActionResult UpdateDirector([FromBody] Director director)
        {
            var orgDirector = context.directors.Find(director.ID);
            if (orgDirector == null)
                return NotFound();

            orgDirector.firstName = director.firstName;
            orgDirector.lastName = director.lastName;
            orgDirector.birthYear = director.birthYear;

            context.SaveChanges();
            return Ok(orgDirector);
        }
    }
}
