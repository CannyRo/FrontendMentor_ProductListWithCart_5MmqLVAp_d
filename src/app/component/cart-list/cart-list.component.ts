import { Component, inject, input } from '@angular/core';
import { CartItem, Product } from '../../product.model';
import { CartModalComponent } from "../cart-modal/cart-modal.component";
import { ProductService } from '../../service/product.service';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [CartModalComponent, CurrencyPipe],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.css'
})
export class CartListComponent {
  readonly productService = inject(ProductService);
  cart = this.productService.cart;
  sumOfProduct = this.productService.sumOfProduct;
  orderTotal = this.productService.orderTotal;

  removeProduct(product: Product){
    this.productService.removeProduct(product);
  }
  resetCart(cart: CartItem[]){
    this.productService.resetCart(cart);
  }
}
