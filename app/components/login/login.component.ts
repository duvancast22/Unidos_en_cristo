import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginForm: FormGroup;
  error: string = '';

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      nombre: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ingresar() {
    const { nombre, password } = this.loginForm.value;
    if (this.auth.login(nombre, password)) {
      this.router.navigate(['/']);
    } else {
      this.error = 'Credenciales incorrectas.';
    }
  }
}
