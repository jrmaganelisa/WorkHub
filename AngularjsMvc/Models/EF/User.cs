using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AngularjsMvc.Models.EF
{
    public class User
    {
        //[Key]
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [MaxLength(32)]
        public string Surname { get; set; }

        public string Firstname { get; set; }

        public string IdentityType { get; set; }

        [StringLength(50, MinimumLength = 13)]
        public string IdentityNumber { get; set; }

        [StringLength(50)]
        public string DateOfBirth { get; set; }
    }
}