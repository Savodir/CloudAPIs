using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


    namespace WebAPI
    {
        public class LibraryContext : DbContext
        {
            public LibraryContext(DbContextOptions<LibraryContext> options) : base(options)
            {
            }
            public DbSet<Movie> movies { get; set; }
            public DbSet<Director> directors { get; set; }
        }
    }

