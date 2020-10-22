using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
/*Esta Componente y la carpeta Models fueron creada para realizar la conexion de base de datos*/
namespace CRUD.Models
{
    public class Contacto
        /*Inicia proceso de creacion de campos de base de datos para el CRUD*/
    {
        [Key]
        public int    Id_usuario { get; set; }
        [Required]
        public string Nombres { get; set; }
        [Required]
        public string Apellidos { get; set; }
        [Required]
        public string Correo { get; set; }
        [Required]
        public string Telefono { get; set; }

    }

    /*Fin del proceso de creacion de campos de base de datos para el CRUD*/

}
