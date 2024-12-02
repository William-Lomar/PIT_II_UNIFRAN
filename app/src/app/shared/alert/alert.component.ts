import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogContent } from '@angular/material/dialog';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [MatDialogContent],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css',
})
export class AlertComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { mensagem: string }) { }
}
