import {  Component, OnInit } from '@angular/core';
import {  FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from 'src/app/models/icontactos';
import { ContactosService } from 'src/app/services/contactos.service';


@Component({
  selector: 'app-contac-n',
  templateUrl: './contac-n.component.html',
  styleUrls: ['./contac-n.component.css']
})
export class ContacNComponent implements OnInit {

  ContacN: FormGroup ;
  idContac = 0;
  accion= 'Agreagar';
  loading = false;
  contacto : Contacto;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, 
              private contactosService: ContactosService, private router: Router) {
    this.ContacN = this.fb.group({
      Nombres:['', Validators.required],
      Apellidos: ['', Validators.required],
      Correo: ['', Validators.required],
      Telefono: ['', Validators.required],
    });
    if(+this.route.snapshot.paramMap.get('Id_usuario') > 0){
     this.idContac = +this.route.snapshot.paramMap.get('Id_usuario')
    }

  }

  ngOnInit(): void {
    this.esEditar();
  }
  guardarContacto(){
    if(this.accion ==='Agreagar'){
      const contactosG: Contacto = {
        Nombres: this.ContacN.get('Nombres').value,
        Apellidos: this.ContacN.get('Apellidos').value,
        Correo: this.ContacN.get('Correo').value,
        Telefono: this.ContacN.get('Telefono').value,
      };
      this.contactosService.guardarContcato(contactosG).subscribe(data =>{        
        this.router.navigate(['/']);
      });
      console.log(this.ContacN)
    }
    else {
      const contactosG: Contacto = {
        Id_usuario: this.contacto.Id_usuario,
        Nombres: this.ContacN.get('Nombres').value,
        Apellidos: this.ContacN.get('Apellidos').value,
        Correo: this.ContacN.get('Correo').value,
        Telefono: this.ContacN.get('Telefono').value
      };
      this.contactosService.actualizarContacto(this.idContac,contactosG).subscribe (data => {
        this.router.navigate(['/']);
      })
    }
  }
  esEditar(){
    if (this.idContac > 0) {
      this.accion = 'Editar';
      this.contactosService.cargarContacto(this.idContac).subscribe(data =>{
        this.contacto = data;
        this.ContacN.patchValue({
          Id_usuario: data.Id_usuario,
          Nombres: data.Nombres,
          Apellidos: data.Apellidos,
          Correo: data.Correo,
          Telefono: data.Telefono,         
        });
      });
    }
  }

}
