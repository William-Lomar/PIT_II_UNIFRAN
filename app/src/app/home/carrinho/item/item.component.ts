import { Component, Input } from '@angular/core';
import { IItem } from '../../home.model';
import { MatButtonModule } from '@angular/material/button';
import { FormatMoneyPipe } from '../../../shared/formatMoney.pipe';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [MatButtonModule, FormatMoneyPipe],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  @Input() item?: IItem;
}
