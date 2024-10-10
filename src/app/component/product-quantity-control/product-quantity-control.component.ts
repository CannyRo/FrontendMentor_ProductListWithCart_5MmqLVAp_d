import { Component, input, output } from '@angular/core';
import { CartItem, Product } from '../../product.model';

@Component({
  selector: 'app-product-quantity-control',
  standalone: true,
  imports: [],
  templateUrl: './product-quantity-control.component.html',
  styleUrl: './product-quantity-control.component.css'
})
export class ProductQuantityControlComponent {
  product = input<Product>();
  cart = input<CartItem[]>();

  isInCart(product: Product | undefined): CartItem | undefined {
    return this.cart()?.find(cartItem => cartItem.product.name === product?.name);
  }

  addNewProduct = output<any>({
    alias: 'addNewProduct'
  })
  increaseThisProduct = output<any>({
    alias: 'increaseThisProduct'
  })
  decreaseThisProduct = output<any>({
    alias: 'decreaseThisProduct'
  })

  addProduct(product: Product | undefined): void{
    this.addNewProduct.emit(product);
  }
  increaseProduct(product: Product | undefined): void{
    this.increaseThisProduct.emit(product);
  }
  decreaseProduct(product: Product | undefined): void{
    this.decreaseThisProduct.emit(product);
  }
}
