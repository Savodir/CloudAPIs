using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Controllers
{
    public class SayHiController : Controller
    {
        [Route("hi")]
        [HttpGet]
        public IActionResult Hello() {
            var result = Content("Hello world");
            result.StatusCode = 200;
            return result;
        }
    }
}
