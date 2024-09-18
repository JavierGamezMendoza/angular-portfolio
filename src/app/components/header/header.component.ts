import { Component, HostListener, AfterViewInit, ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private renderer: Renderer2){}

  downloadCV() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/files/JavierGamezMendoza_CV_Censored.pdf');
    link.setAttribute('download', `JavierGámezCV.pdf`);
    link.click();
    link.remove();
 }
}
