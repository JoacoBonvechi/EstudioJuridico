import { Component } from '@angular/core';
import { WhatsappButtonComponent } from "../whatsapp-button/whatsapp-button.component";
import { AreasComponent } from "../areas/areas.component";
import { OpinionesComponent } from "../opiniones/opiniones.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [WhatsappButtonComponent, AreasComponent, OpinionesComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
