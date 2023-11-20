import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyRoutingModule } from './body-routing.module';
import { ListComponent } from './components/list/list.component';
import { DialogPersonajeComponent } from './components/dialog-personaje/dialog-personaje.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ListComponent,
    DialogPersonajeComponent
  ],
  imports: [
    CommonModule,
    BodyRoutingModule,
    MaterialModule
  ]
})
export class BodyModule { }
