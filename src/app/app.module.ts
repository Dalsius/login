import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/main/header/header.component';
import { FooterComponent } from './components/main/footer/footer.component';
import { LoginComponent } from './components/main/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './mocks/in-memory-data-service';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { TablaComponent } from './components/main/tabla/tabla.component';
import { HomeComponent } from './components/main/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './components/main/register/register.component';
import {MatSelectModule} from '@angular/material/select';
import { OnlyCharDirective } from './directives/only-char.directive';
import { AlumnoComponent } from './components/main/alumno/alumno.component';
import { CalificacionComponent } from './components/main/calificacion/calificacion.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    TablaComponent,
    HomeComponent,
    RegisterComponent,
    OnlyCharDirective,
    AlumnoComponent,
    CalificacionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
