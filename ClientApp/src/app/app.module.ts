import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactosComponent } from './contactos/contactos.component';
import { HttpClientModule } from '@angular/common/http';
import { ContacNComponent } from './contactos/contac-n/contac-n.component';
import { ContactosService } from './services/contactos.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactosComponent,
    ContacNComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule  
  ],
  providers: [ContactosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
