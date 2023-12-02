using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace News2Project.Models
{
    [Table("News")]
    public class News
    {
        [Key]
        public string NewsPaperId { get; set; }

        public string NewsPaperName { get; set; }

        public string NewsPaperCountry { get; set; }

        public string NewsPaperLanguage { get; set; }

        public string NewsPaperUrl { get; set; }
    }
}
