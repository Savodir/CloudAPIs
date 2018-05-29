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
                var list = new List<Movie>();
                list.Add(new Movie()
                {
                    Title = "Shawshank Redemption",
                    Year = "1994",
                    Type = "Crime, Drama"
                });
                list.Add(new Movie()
                {
                    Title = "The Godfather",
                    Year = "1972",
                    Type = "Crime, Drama"
                });
                list.Add(new Movie()
                {
                    Title = "The Dark Knight",
                    Year = "2008",
                    Type = "Action, Crime"
                });
                list.Add(new Movie()
                {
                    Title = "The Godfather: Part II",
                    Year = "1974",
                    Type = "Crime, Drama"
                }); list.Add(new Movie()
                {
                    Title = "Pulp Fiction",
                    Year = "1994",
                    Type = "Crime, Drama"
                }); list.Add(new Movie()
                {
                    Title = "The Lord of the Rings: The Return of the King",
                    Year = "2003",
                    Type = "Adventure, Fantasy"
                });
                list.Add(new Movie()
                {
                    Title = "Schindler's List",
                    Year = "1993",
                    Type = "Biography, Drama"
                });
                list.Add(new Movie()
                {
                    Title = "The Good, the Bad and the Ugly",
                    Year = "1966",
                    Type = "Western"
                }); list.Add(new Movie()
                {
                    Title = "12 Angry Men",
                    Year = "1957",
                    Type = "Crime, Drama"
                });
                list.Add(new Movie()
                {
                    Title = "The Lord of the Rings: The Fellowship of the Ring",
                    Year = "2001",
                    Type = "Adventure, Fantasy"
                });
                for (int i = 0; i < list.Count; i++)
                {
                    context.movies.Add(list.ElementAt(i));

                }
                context.SaveChanges();
            }
        }
    }
}
