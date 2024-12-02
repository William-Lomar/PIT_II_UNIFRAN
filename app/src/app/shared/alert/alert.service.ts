import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from './alert.component';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(private dialog: MatDialog) { }

  alert(mensagem: string) {
    this.dialog.open(AlertComponent, {
      data: { mensagem },
    });
  }
}
