import { Component } from '@angular/core';

@Component({
  selector :'app-contador',
  template : `

  <h1>{{titulo}}</h1>
  <h3>la base es de: <strong> {{base}}</strong></h3>
  <button (click)="ACUMULAR(base)"> {{base}} </button>
  <span>  {{numero}} </span>
  <button (click)="ACUMULAR(-base)"> -{{base}} </button>

    `
})

export class ContadorComponent{
  titulo: string = 'Contador App';
  numero: number = 10;
  base: number = 5;

  ACUMULAR(valor: number){
    this.numero += valor;
  }

}
