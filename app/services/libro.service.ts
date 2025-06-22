import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LibroService {
  private apiUrl = 'http://localhost:3000/libros';

  constructor(private http: HttpClient) {}

  obtenerLibros(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  crearLibro(libro: any): Observable<any> {
    return this.http.post(this.apiUrl, libro);
  }

  actualizarLibro(isbn: string, libro: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${isbn}`, libro);
  }

  eliminarLibro(titulo: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${titulo}`);
  }

  obtenerPorTitulo(titulo: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?titulo=${titulo}`);
  }
}
