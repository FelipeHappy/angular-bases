import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DBZService } from '../services/dbz.service';






@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'

})

export class MainPageComponent  {

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 4000
  }

  // get personajes(): Personaje[] {
  //   return this.dbzService.personajes;

  // }


  // cambiarNombre(event: any){
  //   console.log(event);
  // }

  // agregarNuevoPersonaje(argperso: Personaje){
  //   console.log(argperso)
  //   this.personajes.push(argperso);
  // }


  constructor(  ){

  }







}


