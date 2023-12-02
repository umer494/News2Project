using System.Data.Entity;

namespace News2Project.Models
{
    public class NewsContext :DbContext
    {
        public NewsContext(string str) : base(str) { }
        public DbSet<News> newss { get; set; }
    }
}
