import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IItem } from '../../home.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-favorito',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: `./favorito.component.html`,
  styleUrl: './favorito.component.css',
})
export class FavoritoComponent {

  @Input() item?: IItem;
  @Output() onAdd = new EventEmitter();


}
