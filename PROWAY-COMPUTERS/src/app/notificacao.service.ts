import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(public snackBar: MatSnackBar) { }

  notificar(message: string, ){
    this.snackBar.open(message,"Ok",{duration: 2000,verticalPosition:"top",
    horizontalPosition:"center"});

  }
}
