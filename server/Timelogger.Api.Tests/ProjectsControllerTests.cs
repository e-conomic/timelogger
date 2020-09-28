using Timelogger.Api.Controllers;
using NUnit.Framework;

namespace Timelogger.Api.Tests
{
    public class ProjectsControllerTests
    {

        [Test]
        public void HelloWorld_ShouldReply_HelloBack()
        {
            ProjectsController sut = new ProjectsController(null);

            string actual = sut.HelloWorld();

            Assert.AreEqual("Hello Back!", actual);
        }
    }
} 
