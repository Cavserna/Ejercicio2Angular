import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-dialog-personaje',
  templateUrl: './dialog-personaje.component.html',
  styleUrls: ['./dialog-personaje.component.scss']
})
export class DialogPersonajeComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any){}
}
