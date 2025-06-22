import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CrearLibroComponent } from './components/crear-libro/crear-libro.component';
import { ActualizarLibroComponent } from './components/actualizar-libro/actualizar-libro.component';
import { ObtenerLibroComponent } from './components/obtener-libro/obtener-libro.component';
import { EliminarLibroComponent } from './components/eliminar-libro/eliminar-libro.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'crear-libro', component: CrearLibroComponent, canActivate: [AuthGuard] },
  { path: 'actualizar-libro/:isbn', component: ActualizarLibroComponent, canActivate: [AuthGuard] },
  { path: 'obtener-libro', component: ObtenerLibroComponent },
  { path: 'eliminar-libro/:titulo', component: EliminarLibroComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
