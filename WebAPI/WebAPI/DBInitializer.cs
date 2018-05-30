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
                var listDirectors = new List<Director>();
                listDirectors.Add(new Director() {
                    firstName = "Frank",
                    lastName = "Darabont",
                    birthYear = "1959"
                });
                listDirectors.Add(new Director() {
                    firstName = "Francis Ford",
                    lastName = "Coppola",
                    birthYear = "1939"
                });
                listDirectors.Add(new Director() {
                    firstName = "Christopher",
                    lastName = "Nolan",
                    birthYear = "1970"
                });
                listDirectors.Add(new Director()
                {
                    firstName = "Quentin",
                    lastName = "Tarantino",
                    birthYear = "1963"
                });
                listDirectors.Add(new Director()
                {
                    firstName = "Peter",
                    lastName = "Jackson",
                    birthYear = "1961"
                });
                listDirectors.Add(new Director()
                {
                    firstName = "Steven",
                    lastName = "Spielberg",
                    birthYear = "1946"
                });
                listDirectors.Add(new Director() {
                    firstName = "Sergio",
                    lastName = "Leone"
                });
                listDirectors.Add(new Director() {
                    firstName = "Sidney",
                    lastName = "Lumet",
                    birthYear = "1924"
                });
                for (int i = 0; i < listDirectors.Count; i++)
                {
                    context.directors.Add(listDirectors.ElementAt(i));
                }
                context.SaveChanges();
                //Create Movie List if empty
                var listMovies = new List<Movie>();
                listMovies.Add(new Movie()
                {
                    Title = "Shawshank Redemption",
                    Year = "1994",
                    Type = "Crime, Drama",
                    director = listDirectors.ElementAt(0)
                });
                listMovies.Add(new Movie()
                {
                    Title = "The Godfather",
                    Year = "1972",
                    Type = "Crime, Drama",
                    director = listDirectors.ElementAt(1)
                });
                listMovies.Add(new Movie()
                {
                    Title = "The Dark Knight",
                    Year = "2008",
                    Type = "Action, Crime",
                    director = listDirectors.ElementAt(2)
                });
                listMovies.Add(new Movie()
                {
                    Title = "The Godfather: Part II",
                    Year = "1974",
                    Type = "Crime, Drama",
                    director = listDirectors.ElementAt(1)
                });
                listMovies.Add(new Movie()
                {
                    Title = "Pulp Fiction",
                    Year = "1994",
                    Type = "Crime, Drama",
                    director = listDirectors.ElementAt(3)
                });
                listMovies.Add(new Movie()
                {
                    Title = "The Lord of the Rings: The Return of the King",
                    Year = "2003",
                    Type = "Adventure, Fantasy",
                    director = listDirectors.ElementAt(4)
                });
                listMovies.Add(new Movie()
                {
                    Title = "Schindler's List",
                    Year = "1993",
                    Type = "Biography, Drama",
                    director = listDirectors.ElementAt(5)
                });
                listMovies.Add(new Movie()
                {
                    Title = "The Good, the Bad and the Ugly",
                    Year = "1966",
                    Type = "Western",
                    director = listDirectors.ElementAt(6)
                }); listMovies.Add(new Movie()
                {
                    Title = "12 Angry Men",
                    Year = "1957",
                    Type = "Crime, Drama",
                    director = listDirectors.ElementAt(7)
                });
                listMovies.Add(new Movie()
                {
                    Title = "The Lord of the Rings: The Fellowship of the Ring",
                    Year = "2001",
                    Type = "Adventure, Fantasy",
                   director = listDirectors.ElementAt(4)
                });
                listMovies.Add(new Movie()
                {
                    Title = "My Best Friend's Birthday",
                    Year = "1987",
                    Type = "Comedy",
                    director = listDirectors.ElementAt(3)
                });
                listMovies.Add(new Movie()
                {
                    Title = "Reservoir Dogs",
                    Year = "1992",
                    Type = "Crime, Drama",
                    director = listDirectors.ElementAt(3)
                });
                listMovies.Add(new Movie()
                {
                    Title = "ER",
                    Year = "1995",
                    Type = "Romance",
                    director = listDirectors.ElementAt(3)
                });
                listMovies.Add(new Movie()
                {
                    Title = "Jackie Brown",
                    Year = "1997",
                    Type = "Crime, Drama",

                    director = listDirectors.ElementAt(3)
                }); listMovies.Add(new Movie()
                {
                    Title = "Four Rooms",
                    Year = "1995",
                    Type = "Comedy",
                    director = listDirectors.ElementAt(3)
                }); listMovies.Add(new Movie()
                {
                    Title = "Kill Bill: Vol 1",
                    Year = "2003",
                    Type = "Action, Crime",
                    director = listDirectors.ElementAt(3)
                });
                listMovies.Add(new Movie()
                {
                    Title = "Kill Bill: Vol 2",
                    Year = "2004",
                    Type = "Action, Crime",
                    director = listDirectors.ElementAt(3)
                });
                listMovies.Add(new Movie()
                {
                    Title = "Jimmy Kimmel Live!",
                    Year = "2004",
                    Type = "Comedy",
                    director = listDirectors.ElementAt(3)
                });
                listMovies.Add(new Movie()
                {
                    Title = "Sin City",
                    Year = "2005",
                    Type = "Crime, Thriller",
                    director = listDirectors.ElementAt(3)
                });
                listMovies.Add(new Movie()
                {
                    Title = "Grave Danger: Part 2",
                    Year = "2005",
                    Type = "Crime, Drama",
                    director = listDirectors.ElementAt(3)
                });
                listMovies.Add(new Movie()
                {
                    Title = "Grave Danger: Part 1",
                    Year = "2005",
                    Type = "Crime, Drama",
                    director = listDirectors.ElementAt(3)
                });
                listMovies.Add(new Movie()
                {
                    Title = "Grindhouse",
                    Year = "2007",
                    Type = "Action, Horror",
                    director = listDirectors.ElementAt(3)
                });
                listMovies.Add(new Movie()
                {
                    Title = "Death Proof",
                    Year = "2007",
                    Type = "Action, Horror",
                    director = listDirectors.ElementAt(3)
                });
                listMovies.Add(new Movie()
                {
                    Title = "Inglorious Bastards",
                    Year = "2009",
                    Type = "History, Action",
                    director = listDirectors.ElementAt(3)
                });
                listMovies.Add(new Movie()
                {
                    Title = "Kill Boll: The Whole Bloody Affair",
                    Year = "2011",
                    Type = "Action, Crime",
                    director = listDirectors.ElementAt(3)
                });
                listMovies.Add(new Movie()
                {
                    Title = "Django Unchained",
                    Year = "2012",
                    Type = "Drama, Western",
                    director = listDirectors.ElementAt(3)
                });
                listMovies.Add(new Movie()
                {
                    Title = "The Hateful Eight",
                    Year = "2015",
                    Type = "Crime, Drama",
                    director = listDirectors.ElementAt(3)
                });
                listMovies.Add(new Movie()
                {
                    Title = "Once Upon a Time in Hollywood",
                    Year = "2019",
                    Type = "Crime, Drama",
                    director = listDirectors.ElementAt(3)
                });
                listMovies.Add(new Movie()
                {
                    Title = "Untitled Star Trek Project",
                    Year = "2022",
                    Type = "Action, Adventure, Sci-Fi",
                    director = listDirectors.ElementAt(3)
                });
                for (int i = 0; i < listMovies.Count; i++)
                {
                    context.movies.Add(listMovies.ElementAt(i));

                }
                context.SaveChanges();
            }
        }
    }
}
