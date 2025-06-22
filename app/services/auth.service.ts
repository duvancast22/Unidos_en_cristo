import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private usuario = { nombre: 'admin', password: 'cristo123' };

  login(nombre: string, password: string): boolean {
    if (nombre === this.usuario.nombre && password === this.usuario.password) {
      localStorage.setItem('usuario', nombre);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('usuario');
  }

  estaAutenticado(): boolean {
    return !!localStorage.getItem('usuario');
  }
}
