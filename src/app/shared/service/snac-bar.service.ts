import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnacBarService {

  constructor(private _snackBar: MatSnackBar) { }

  OnopenSnackBar(message: string) {
    this._snackBar.open(message, "close"),{
     duration:3000,
     horizontalPosition : 'left',
     verticalPosition : 'top',
    }
  }
}
