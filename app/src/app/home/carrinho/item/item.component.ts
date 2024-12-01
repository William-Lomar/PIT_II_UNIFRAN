import { Component, Input } from '@angular/core';

export interface IItem {
  nome: string,
  valor: string,
  quantidade: number,
  imgUrl: string
}

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  @Input() item?: IItem;
}
