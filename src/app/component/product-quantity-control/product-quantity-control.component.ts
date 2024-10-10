import { Component, input } from '@angular/core';
import { CartItem, Product } from '../../product.model';

@Component({
  selector: 'app-product-quantity-control',
  standalone: true,
  imports: [],
  templateUrl: './product-quantity-control.component.html',
  styleUrl: './product-quantity-control.component.css'
})
export class ProductQuantityControlComponent {
  dessert = input<Product>();
  cart = input<CartItem[]>();

  isInCart(product: Product | undefined): CartItem | undefined {
    return this.cart()?.find(cartItem => cartItem.product.name === product?.name);
  }
}
