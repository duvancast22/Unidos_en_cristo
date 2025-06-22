import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LibroService } from '../../services/libro.service';

@Component({
  selector: 'app-actualizar-libro',
  templateUrl: './actualizar-libro.component.html'
})
export class ActualizarLibroComponent implements OnInit {
  libroForm: FormGroup;
  isbn: string = '';

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private libroService: LibroService) {
    this.libroForm = this.fb.group({
      titulo: [''],
      autor: [''],
      categoria: ['']
    });
  }

  ngOnInit() {
    this.isbn = this.route.snapshot.params['isbn'];
    this.libroService.obtenerLibros().subscribe(libros => {
      const libro = libros.find(l => l.isbn === this.isbn);
      if (libro) {
        this.libroForm.patchValue(libro);
      }
    });
  }

  actualizarLibro() {
    this.libroService.actualizarLibro(this.isbn, this.libroForm.value).subscribe(() => {
      alert('Libro actualizado con éxito.');
    });
  }
}
