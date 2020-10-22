import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../models/icontactos';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {
 myAppUrl = 'https://localhost:44390/';
 myAppiUrl = 'api/contactos/'

  httpOptions = {
    headers: new HttpHeaders ({
      'Contect-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) {
    console.log('Servicio Persona')

  }

  getListaContat(): Observable<Contacto[]> {
    return this.http.get<Contacto[]>(this.myAppUrl);
  }

  deleteContacto(Id_usuario:number): Observable<Contacto>{
    return this.http.delete<Contacto>(this.myAppUrl + this.myAppiUrl + Id_usuario);
  }
  guardarContcato(contacto: Contacto): Observable<Contacto> {
    return this.http.post<Contacto>(this.myAppUrl + this.myAppiUrl, contacto, this.httpOptions);
  }
  cargarContacto(Id_usuario:number): Observable<Contacto> {
    return this.http.get<Contacto>(this.myAppUrl + this.myAppiUrl + Id_usuario);
  }
  actualizarContacto(Id_usuario:number,contacto:Contacto): Observable <Contacto>{
    return this.http.put<Contacto>(this.myAppUrl + this.myAppiUrl, contacto, this.httpOptions);
  }
}
