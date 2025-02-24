import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { AreasPracticaComponent } from './components/areas-practica/areas-practica.component';
import { DefensasPenalesComponent } from './components/defensas-penales/defensas-penales.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { ContactoComponent } from './components/contacto/contacto.component';

export const routes: Routes = [
{path: '', redirectTo: 'home', pathMatch:'full'},
{path: 'home', component: HomeComponent},
{path: 'quienes-somos', component: QuienesSomosComponent},
{path: 'areas-de-practica', component: AreasPracticaComponent},
{path: 'defensas-penales', component: DefensasPenalesComponent},
{path: 'ubicacion', component: UbicacionComponent},
{path: 'contacto', component: ContactoComponent},


{path: '**', redirectTo: 'home'}
];
