import { Component, input, output } from '@angular/core';
import { CartItem, Product } from '../../product.model';

@Component({
  selector: 'app-cart-modal',
  standalone: true,
  imports: [],
  templateUrl: './cart-modal.component.html',
  styleUrl: './cart-modal.component.css'
})
export class CartModalComponent {
  cart = input<CartItem[]>();
  orderTotal = input<number>(0);

  resetCart = output<any>();


  resetMyCart(){
    this.resetCart.emit(this.cart());
  }
}
