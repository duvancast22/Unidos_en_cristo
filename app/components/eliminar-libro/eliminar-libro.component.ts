import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibroService } from '../../services/libro.service';

@Component({
  selector: 'app-eliminar-libro',
  templateUrl: './eliminar-libro.component.html'
})
export class EliminarLibroComponent {
  titulo: string = '';

  constructor(private route: ActivatedRoute, private libroService: LibroService) {
    this.titulo = this.route.snapshot.params['titulo'];
    this.eliminar();
  }

  eliminar() {
    this.libroService.eliminarLibro(this.titulo).subscribe(() => {
      alert('Libro eliminado con éxito.');
    });
  }
}
