import { NgModule } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { AppComponent } from '../app.component';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
  declarations:[
    ContadorComponent,

  ],
  exports:[
    ContadorComponent
  ],
  imports:[
     CommonModule
  ]
})

export class ContadorModule{}
