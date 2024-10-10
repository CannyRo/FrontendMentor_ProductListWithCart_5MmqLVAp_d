import { Component, input } from '@angular/core';
import { CartItem } from '../../product.model';

@Component({
  selector: 'app-cart-modal',
  standalone: true,
  imports: [],
  templateUrl: './cart-modal.component.html',
  styleUrl: './cart-modal.component.css'
})
export class CartModalComponent {
  cart = input<CartItem[]>();
}
