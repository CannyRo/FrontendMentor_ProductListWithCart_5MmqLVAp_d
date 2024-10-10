import { Component, input } from '@angular/core';
import { CartItem } from '../../product.model';


@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.css'
})
export class CartListComponent {
  cart = input<CartItem[]>();
}
