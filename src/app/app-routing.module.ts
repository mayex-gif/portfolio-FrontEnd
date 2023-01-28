import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { NewSkillComponent } from './components/hard-and-soft-skills/new-skill.component';
import { EditSkillComponent } from './components/hard-and-soft-skills/edit-skill.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto.component';
import { EditPerfilComponent } from './components/foto-perfil/edit-perfil.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nueva-experiencia', component: NewExperienciaComponent },
  { path: 'edit-experiencia/:id', component: EditExperienciaComponent },
  { path: 'nueva-educacion', component: NewEducacionComponent },
  { path: 'edit-educacion/:id', component: EditEducacionComponent },
  { path: 'nueva-skill', component: NewSkillComponent },
  { path: 'edit-skill/:id', component: EditSkillComponent },
  { path: 'edit-proyecto/:id', component: EditProyectoComponent },
  { path: 'nuevo-proyecto', component: NewProyectoComponent },
  { path: 'edit-perfil/:id', component: EditPerfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
