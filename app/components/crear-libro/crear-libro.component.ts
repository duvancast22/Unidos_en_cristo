import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LibroService } from '../../services/libro.service';

@Component({
  selector: 'app-crear-libro',
  templateUrl: './crear-libro.component.html'
})
export class CrearLibroComponent {
  libroForm: FormGroup;

  constructor(private fb: FormBuilder, private libroService: LibroService) {
    this.libroForm = this.fb.group({
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      isbn: ['', Validators.required],
      categoria: ['']
    });
  }

  guardarLibro() {
    if (this.libroForm.valid) {
      this.libroService.crearLibro(this.libroForm.value).subscribe(() => {
        alert('Libro creado correctamente');
        this.libroForm.reset();
      });
    }
  }
}
