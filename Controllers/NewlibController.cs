using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using News2Project.Models;

namespace News2Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewlibController : ControllerBase
    {
        static string str = "server=DESKTOP-KCBO3Q4\\SQLEXPRESS;database=NewsLibrary;integrated security=SSPI";
        private NewsContext db = new NewsContext(NewlibController.str);
        public IQueryable<News> get()
        {
            return db.newss;
        }
    }
}
