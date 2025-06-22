import { Component } from '@angular/core';
import { LibroService } from '../../services/libro.service';

@Component({
  selector: 'app-obtener-libro',
  templateUrl: './obtener-libro.component.html'
})
export class ObtenerLibroComponent {
  titulo = '';
  resultados: any[] = [];

  constructor(private libroService: LibroService) {}

  buscarLibro() {
    this.libroService.obtenerPorTitulo(this.titulo).subscribe(data => {
      this.resultados = data;
    });
  }
}
