import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    MatDividerModule
  ],
  exports: [
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    MatDividerModule
  ]
})
export class MaterialModule { }
