import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { IndexComponent } from './componentes/index/index.component';
import { ProfileComponent } from './componentes/profile/profile.component';
import { BoardAdminComponent } from './componentes/board-admin/board-admin.component';
import { BoardUserComponent } from './componentes/board-user/board-user.component';
import { ContenidoComponent } from './componentes/contenido/contenido.component';

import { ErrorComponent } from './componentes/error/error.component';


const routes: Routes = [
  { path: 'index',component: IndexComponent},
  { path: 'login', component: LoginComponent},
  { path: 'contenido', component: ContenidoComponent},
  { path: 'registro', component: RegistroComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
