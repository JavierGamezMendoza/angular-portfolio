import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'] // Cambié 'styleUrl' a 'styleUrls'
})
export class FooterComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  successMessage: string = ''; // Nueva propiedad
  errorMessage: string = ''; // Nueva propiedad

  sendEmail(event: Event) {
    event.preventDefault();
    this.successMessage  = ''; // Nueva propiedad
    this.errorMessage = ''; // Nueva propiedad
  
    // Validar que los campos no estén vacíos
    if (!this.name || !this.email || !this.message) {
      this.errorMessage = 'Por favor, completa todos los campos.';
      return;
    }
  
    // Validar formato de correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.email)) {
      this.errorMessage = 'Por favor, introduce un correo electrónico válido.';
      return;
    }
  
    const templateParams = {
      name: this.name,
      email: this.email,
      message: this.message,
    };
  
    emailjs.send('angular_portfolio', 'portfolio_template', templateParams, 'R-NyBE8lMdDOko7X5')
      .then(() => {
        console.log('Mensaje enviado correctamente vía EmailJS');
        this.successMessage = '¡Mensaje enviado con éxito!'; // Mostrar mensaje de éxito
      }, (error) => {
        alert('Error: ' + JSON.stringify(error));
      });
  
    // Limpiar el formulario
    this.name = '';
    this.email = '';
    this.message = '';
  }
  
}
