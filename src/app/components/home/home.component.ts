import { Component } from '@angular/core';
import { WhatsappButtonComponent } from "../whatsapp-button/whatsapp-button.component";
import { AreasComponent } from "../areas/areas.component";

@Component({
  selector: 'app-home',
  imports: [WhatsappButtonComponent, AreasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
