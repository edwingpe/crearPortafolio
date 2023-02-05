import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { httpInterceptorProviders } from './helpers/http.interceptor';

import { AppComponent } from './app.component';
import { IndexComponent } from './componentes/index/index.component';
import { ErrorComponent } from './componentes/error/error.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LoginModalComponent } from './modales/login-modal/login-modal.component';
import { AboutModalComponent } from './modales/about-modal/about-modal.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ContenidoComponent } from './componentes/contenido/contenido.component';

import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ProfileComponent } from './componentes/profile/profile.component';
import { BoardAdminComponent } from './componentes/board-admin/board-admin.component';
import { BoardUserComponent } from './componentes/board-user/board-user.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ErrorComponent,
    NavbarComponent,
    LoginModalComponent,
    AboutModalComponent,
    HeaderComponent,
    AcercaComponent,
    ExperienciaComponent,
    EducacionComponent,
    ProyectosComponent,
    HabilidadesComponent,
    LoginComponent,
    RegistroComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardUserComponent,
    ContenidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
