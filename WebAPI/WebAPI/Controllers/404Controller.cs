using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Controllers
{
    public class _404Controller : Controller
    {
        [Route("404")]
        [HttpGet]
        public IActionResult return404()
        {
            return NotFound();
        }
    }
}
