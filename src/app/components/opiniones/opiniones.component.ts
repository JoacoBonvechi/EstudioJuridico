import { Component, ElementRef, ViewChild, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-opiniones',
  templateUrl: './opiniones.component.html',
  styleUrls: ['./opiniones.component.css']
})
export class OpinionesComponent implements AfterViewInit {
  @ViewChild('testimonialCarousel') testimonialCarousel!: ElementRef;
  scrollPosition = 0;
  cardWidth: number = 0;

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object // Inyectar PLATFORM_ID
  ) {}

  ngAfterViewInit() {
    // Verificar si el código se está ejecutando en el navegador
    if (isPlatformBrowser(this.platformId)) {
      const carousel = this.testimonialCarousel.nativeElement;
      const carouselInner = carousel.querySelector('.carousel-inner');
      this.cardWidth = carouselInner.querySelector('.carousel-item').clientWidth;

      if (window.matchMedia("(min-width:576px)").matches) {
        // Configurar el evento para el botón "Siguiente"
        this.renderer.listen(carousel.querySelector('.carousel-control-next'), 'click', () => {
          const carouselWidth = carouselInner.scrollWidth;
          if (this.scrollPosition < carouselWidth - this.cardWidth * 3) {
            this.scrollPosition += this.cardWidth;
            carouselInner.scrollTo({ left: this.scrollPosition, behavior: 'smooth' });
          }
        });

        // Configurar el evento para el botón "Anterior"
        this.renderer.listen(carousel.querySelector('.carousel-control-prev'), 'click', () => {
          if (this.scrollPosition > 0) {
            this.scrollPosition -= this.cardWidth;
            carouselInner.scrollTo({ left: this.scrollPosition, behavior: 'smooth' });
          }
        });
      } else {
        // Agregar la clase 'slide' para pantallas pequeñas
        this.renderer.addClass(carousel, 'slide');
      }
    }
  }
}