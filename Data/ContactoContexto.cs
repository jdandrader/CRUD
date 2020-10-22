using CRUD.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
/*Esta Componente y la carpeta Data fueron creada para realizar la conexion de base de datos*/

namespace CRUD.Data
{
    /*En esta parte erda la clase DbContext de EntityFrameworkCore al refactorizarolo*/

    public class ContactoContexto : DbContext
    {
        public ContactoContexto ()
        {

        }

        /*Inicia proceso de metodo de coneccion*/
        public ContactoContexto(DbContextOptions<ContactoContexto> options):base(options)
        {
        }


        //crear nuestro dbset

        public DbSet<Contacto> ContactoItems { get; set; }
    }
}
