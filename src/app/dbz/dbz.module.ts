/*Primero importaciones de angular*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/*Segundo importaciones de terceros*/
import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarPersonajeComponent } from './agregar-personaje/agregar-personaje.component';
import { DBZService } from './services/dbz.service';

/*Tercero importaciones propias*/



@NgModule({
  declarations: [MainPageComponent, PersonajesComponent, AgregarPersonajeComponent],
  exports: [MainPageComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    DBZService

  ]
})
export class DbzModule { }
