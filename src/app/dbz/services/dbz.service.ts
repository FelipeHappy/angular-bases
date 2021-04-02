import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()

export class DBZService{

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 10000
     },
     {
       nombre: 'Vegeta',
       poder: 9500
     }

  ];

get personajes(): Personaje[] {
  return [...this._personajes];
}

  constructor()
  {
    console.log('Servicio Inicializado');
  }

  agregarPersonaje( addpersonaje: Personaje){

    this._personajes.push(addpersonaje);

  }


}
