import { computed, inject, Injectable, signal } from '@angular/core';
import { DataService } from './data.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CartItem, Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly dataService = inject(DataService);
  readonly productList = toSignal(this.dataService.getData(), {
    initialValue: [],
  }) 

  cart = signal<CartItem[]>([]);
  sumOfProduct = computed(()=> {
    return this.cart().reduce((total, cartItem) => total + cartItem.quantity, 0);
  })

  constructor() {}

  addProduct(product: Product) {
    console.log('Add product : ', product);
    this.cart.update( cart => [...cart, {product: product, quantity:1}]);
  }

  incraseProduct(product: Product) {
    console.log('Increase product : ', product);
    this.cart.update( cart => 
      cart.map( cartItem => cartItem.product.name === product.name ?
        { product: product, quantity: cartItem.quantity + 1 } : cartItem ));
  }

  decreaseProduct(product: Product) {
    console.log('Decrease product : ', product);
    this.cart.update( cart => 
      cart.map( cartItem => 
        cartItem.product.name === product.name && cartItem.quantity > 1 
        ? { product: product, quantity: cartItem.quantity - 1 }
        : cartItem.product.name === product.name && cartItem.quantity === 1 
        ? null 
        : cartItem 
      ).filter(cartItem => cartItem !== null));
  }

  removeProduct(product: Product) {
    console.log('Remove product : ', product);
    this.cart.update( cart => cart.filter( cartItem =>
      cartItem.product.name !== product.name));
  }

  resetCart() {
    console.log('Reset cart');
    this.cart.set([]);
  }

}
