using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI
{
    public class Director
    {
        public int ID { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public ICollection<Movie> movies { get; set; }
    }
}
