import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  registroForm: FormGroup;
  formSubmitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    // Inicializa el formulario de registro con campos validadores
    this.registroForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      pais: ['Seleccione', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)]],
      confirmarPassword: ['', [Validators.required]], 
    }, { validators: this.matchPassword });
  }

  onSubmit() {
    this.formSubmitted = true;

    if (this.registroForm.valid) {
      this.router.navigate(['/inicio']);
    }
  }

  private matchPassword(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmarPassword = group.get('confirmarPassword')?.value;

    return password === confirmarPassword ? null : { 'passwordMismatch': true };
  }
}
