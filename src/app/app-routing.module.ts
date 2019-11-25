import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/main/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/main/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './components/main/register/register.component';
import { TablaComponent } from './components/main/tabla/tabla.component';
import { AlumnoComponent } from './components/main/alumno/alumno.component';

const routes: Routes =
[
  {
  path: '',
  component: LoginComponent
  },
  {
  path: 'home',
  canActivate: [AuthGuard],
  component: HomeComponent
  },
  {
  path: 'register',
  component: RegisterComponent
  },
  {
  path: 'login',
  component: LoginComponent
  },
  {
  path: 'alumno',
  component: AlumnoComponent
  },
  {
  path: 'tabla',
  component: TablaComponent
 // redirectTo: '',
 // pathMatch: 'full'
  },

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
