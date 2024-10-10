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

  removeProduct = output<any>()
  resetCart = output<any>()

  removeThisProduct(product: Product){
    this.removeProduct.emit(product);
  }

  resetMyCart(){
    this.resetCart.emit(this.cart());
  }
}
