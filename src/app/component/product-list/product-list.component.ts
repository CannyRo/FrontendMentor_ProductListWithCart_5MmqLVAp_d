import { Component, inject, input, output } from '@angular/core';
import { ProductQuantityControlComponent } from "../product-quantity-control/product-quantity-control.component";
import { CartItem, Product } from '../../product.model';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, ProductQuantityControlComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  readonly productService = inject(ProductService);
  readonly productList = this.productService.productList;
  // productList = input<Product[]>();
  // cart = input<CartItem[]>();
  cart = this.productService.cart;

  constructor(){
    console.log('CART : ', this.cart());
  }
  // addProduct = output<any>({
  //   alias: 'addProduct'
  // })
  // increaseProduct = output<any>({
  //   alias: 'addProduct'
  // })
  // decreaseProduct = output<any>({
  //   alias: 'addProduct'
  // })

  // addNewProduct(product: Product): void{
  //   this.addProduct.emit(product);
  // }
  // increaseThisProduct(product: Product): void{
  //   this.increaseProduct.emit(product);
  // }
  // decreaseThisProduct(product: Product): void{
  //   this.decreaseProduct.emit(product);
  // }
  addProduct(product: Product){
    this.productService.addProduct(product);
  }
  increaseProduct(product: Product){
    this.productService.increaseProduct(product);
  }
  decreaseProduct(product: Product){
    this.productService.decreaseProduct(product);
  }
}
