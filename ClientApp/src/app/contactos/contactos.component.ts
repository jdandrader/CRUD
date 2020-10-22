import { Component, OnInit } from '@angular/core';
import { Contacto } from '../models/icontactos';
import { ContactosService } from '../services/contactos.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {
  listContactos: Contacto [];
  loading = false;

  constructor(private contactosService: ContactosService) { }

  ngOnInit(): void {
    this.loading = true;
    this.cargarContacto ();
  }


  cargarContacto(){
    this.contactosService.getListaContat().subscribe(data =>{
    this.loading = false;
    this.listContactos = data;
    console.log (data);
  }); };

  delete(Id_usuario:number){
    this.contactosService.deleteContacto(Id_usuario).subscribe(data =>{
      this.cargarContacto()
      this.loading = false;
    });
  }

}

