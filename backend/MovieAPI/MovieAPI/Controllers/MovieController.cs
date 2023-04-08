using Microsoft.AspNetCore.Mvc;
using MovieAPI.Data;
using Microsoft.EntityFrameworkCore.Sqlite;
using System.Linq;

namespace MovieAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MovieDbContext context;

        public MovieController(MovieDbContext temp)
        {
            context = temp;
        }
        public IEnumerable<Movie> Get()
        {
            var x = context.Movies                
                .Where(m => (m.Edited == "Yes"))
                .OrderBy(m => m.Title)
                .ToArray();

            return x;
        }
    }
}
