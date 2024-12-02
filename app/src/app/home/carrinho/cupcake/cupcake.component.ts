import { Component, Input } from '@angular/core';
import { ICupcake } from '../../home.model';
import { MatButtonModule } from '@angular/material/button';
import { FormatMoneyPipe } from '../../../shared/formatMoney.pipe';

@Component({
  selector: 'app-cupcake',
  standalone: true,
  imports: [MatButtonModule, FormatMoneyPipe],
  templateUrl: './cupcake.component.html',
  styleUrl: './cupcake.component.scss',
})
export class CupcakeComponent {
  @Input() cupcake?: ICupcake;
}
