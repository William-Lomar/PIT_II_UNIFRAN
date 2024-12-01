import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface IItem {
  id: number,
  nome: string,
  imgUrl: string
}

@Component({
  selector: 'app-favorito',
  standalone: true,
  imports: [],
  templateUrl: `./favorito.component.html`,
  styleUrl: './favorito.component.css',
})
export class FavoritoComponent {

  @Input() item?: IItem;
  @Output() onAdd = new EventEmitter();


}
