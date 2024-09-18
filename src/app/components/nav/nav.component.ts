import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {

  activeSection: string = '';

  constructor() { }

  ngOnInit(): void {
    this.updateActiveSection();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.updateActiveSection();
  }

  public updateActiveSection(): void {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + window.innerHeight / 2; // Obtener la posición central de la ventana

    console.log(sections);
    console.log(scrollPosition);


    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top + scrollPosition - window.innerHeight / 2; // Posición superior ajustada
      const sectionHeight = section.clientHeight;

      console.log("Top: ", sectionTop, "Height", sectionHeight);

      // Verificar si la posición de desplazamiento está dentro de la sección
      if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
        this.activeSection = section.id;
      }
    });
  }
}
