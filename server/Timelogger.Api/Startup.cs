using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Timelogger.Entities;

namespace Timelogger.Api
{
	public class Startup
	{
		private readonly IHostingEnvironment _environment;
		public IConfigurationRoot Configuration { get; }

		public Startup(IHostingEnvironment env)
		{
			_environment = env;

			var builder = new ConfigurationBuilder()
				.SetBasePath(env.ContentRootPath)
				.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
				.AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
				.AddEnvironmentVariables();
			Configuration = builder.Build();
		}

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			// Add framework services.
			services.AddDbContext<ApiContext>(opt => opt.UseInMemoryDatabase());

			if (_environment.IsDevelopment())
			{
				services.AddCors();
			}
			
			services.AddMvc();
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
		{
			loggerFactory.AddConsole(Configuration.GetSection("Logging"));
			loggerFactory.AddDebug();

			if (env.IsDevelopment())
			{
				app.UseCors(builder => builder
					.AllowAnyOrigin()
					.AllowAnyMethod()
					.AllowAnyHeader()
					.AllowCredentials());
			}

			app.UseMvc();

			// Seed "database" with example data
			var context = app.ApplicationServices.GetService<ApiContext>();
			AddExampleData(context);
		}

		private static void AddExampleData(ApiContext context)
		{
			var testProject1 = new Project
			{
				Id = 1,
				Name = "e-conomic Interview"
			};

			context.Projects.Add(testProject1);

			context.SaveChanges();
		}
	}
}
