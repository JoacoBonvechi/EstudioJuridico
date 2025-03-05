import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from './components/home/home.component';
import { AreasComponent } from "./components/areas/areas.component";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'EstudioJuridico';
  private routerSubscription: Subscription;

  constructor(private router: Router) {
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (typeof window !== 'undefined') {  // 👈 Evita el error en SSR
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe(); // Evita problemas de memoria
  }
}



