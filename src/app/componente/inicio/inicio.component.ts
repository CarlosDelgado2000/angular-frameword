import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  inicioForm: FormGroup;
  formSubmitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.inicioForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    this.formSubmitted = true;

    if (this.inicioForm.valid) {
      console.log('Formulario válido. Redirigiendo...');
      this.router.navigate(['/horario-gestion']); 
    }
  }

  onOlvideContrasena() {
    // Lógica para el enlace "Olvidé mi contraseña"
    this.router.navigate(['/recuperar']); 
  }
}
