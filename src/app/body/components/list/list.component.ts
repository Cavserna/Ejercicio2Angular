import { Component, OnInit } from '@angular/core';
import { RickApiService } from '../../services/rick-api.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogPersonajeComponent } from '../dialog-personaje/dialog-personaje.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  personajes: any;

  constructor(private rickService: RickApiService,
    public dialog: MatDialog){}

  ngOnInit(): void {
    this.rickService.getCharacters().subscribe(res =>{
      console.log(res)
      this.personajes = res;
    })
  }
  openDialog(character:any) {
    this.dialog.open(DialogPersonajeComponent,{data:{character}})

  }

}
