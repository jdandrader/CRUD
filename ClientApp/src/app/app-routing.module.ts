import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContacNComponent } from './contactos/contac-n/contac-n.component';
import { ContactosComponent } from './contactos/contactos.component';

const routes: Routes = [
  { path:'AddCon', component: ContacNComponent },
  { path:'editar/:Id_usuario', component: ContacNComponent },
  { path:'', component: ContactosComponent, pathMatch: 'full' },
  { path:'**', redirectTo: '/' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
