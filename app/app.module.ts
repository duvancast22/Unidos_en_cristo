import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Componentes
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CrearLibroComponent } from './components/crear-libro/crear-libro.component';
import { ActualizarLibroComponent } from './components/actualizar-libro/actualizar-libro.component';
import { ObtenerLibroComponent } from './components/obtener-libro/obtener-libro.component';
import { EliminarLibroComponent } from './components/eliminar-libro/eliminar-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CrearLibroComponent,
    ActualizarLibroComponent,
    ObtenerLibroComponent,
    EliminarLibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
