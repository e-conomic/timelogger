using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace Timelogger.Api.Controllers
{
    [Route("api/[controller]")]
    public class ProjectsController : Controller
	{
		private readonly ApiContext _context;

		public ProjectsController(ApiContext context)
		{
			_context = context;
		}

		[HttpGet]
		[Route("hello-world")]
		public string Index()
		{
			return "Hello Back!";
		}

		// GET api/projects
		[HttpGet]
		public IActionResult Get()
		{
			return Ok(_context.Projects);
        }

		// GET api/projects/5
		[HttpGet("{id}")]
        public IActionResult Get(int id)
        {
			var project = _context.Projects.FirstOrDefault(p => p.Id == id);

			if (project == null)
			{
				return NotFound();
			}

			return Ok(project);
        }
    }
}
