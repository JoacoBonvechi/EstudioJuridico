import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { AreasPracticaComponent } from './components/areas-practica/areas-practica.component';

export const routes: Routes = [
{path: '', redirectTo: 'home', pathMatch:'full'},
{path: 'home', component: HomeComponent},
{path: 'quienes-somos', component: QuienesSomosComponent},
{path: 'areas-de-practica', component: AreasPracticaComponent},


{path: '**', redirectTo: 'home'}
];
