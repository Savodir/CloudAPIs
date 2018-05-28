using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI
{
    public class DBInitializer
    {
        public static void Initialize(LibraryContext context)
        {
            context.Database.EnsureCreated();
            if(!context.movies.Any())
            {
                //Create new movie
                var bk = new Movie()
                {
                    ID = 0,
                    Title = "Ster Wers",
                    Year = "2018",
                    Type = "Action",
          //          director = "Jason"
                };
                context.movies.Add(bk);
                context.SaveChanges();
            }
        }
    }
}
