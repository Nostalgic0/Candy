import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private dialogRef : MatDialog) { }

  openDialog(){
    this.dialogRef.open(PopupComponent);
  }

  ngOnInit(): void {
  }

}
