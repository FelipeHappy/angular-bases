import { Component } from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan America'];
  heroeborra2: string = '';

  /* BORRAR SOLO EL ULTIMO HEROE*/
  BorrarHeroeConSplice(): void {
    console.log('Eliminando...');
    this.heroes.splice(4);
  }

   /* BORRAR SOLO EL ULTIMO HEROE*/
  BorrarHeroe() {
    this.heroeborra2 = this.heroes.shift() || '';

  }


}
