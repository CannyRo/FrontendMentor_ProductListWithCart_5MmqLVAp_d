import { Component, inject } from '@angular/core';
import { ProductListComponent } from "../../component/product-list/product-list.component";
import { CartListComponent } from "../../component/cart-list/cart-list.component";
import { CartModalComponent } from "../../component/cart-modal/cart-modal.component";
import { ProductService } from '../../service/product.service';
import { Product } from '../../product.model';

@Component({
  selector: 'app-dessert',
  standalone: true,
  imports: [ProductListComponent, CartListComponent, CartModalComponent],
  templateUrl: './dessert.component.html',
  styleUrl: './dessert.component.css'
})
export class DessertComponent {
  readonly productService = inject(ProductService);
  readonly productList = this.productService.productList;
  readonly categoryTitle = 'Desserts';

  cart = this.productService.cart;
  sumOfProduct = this.productService.sumOfProduct;

  addProduct(product: Product){
    this.productService.addProduct(product);
  }
  increaseProduct(product: Product){
    this.productService.increaseProduct(product);
  }
  decreaseProduct(product: Product){
    this.productService.decreaseProduct(product);
  }
  removeProduct(product: Product){
    this.productService.removeProduct(product);
  }
  resetCart(){
    this.productService.resetCart();
  }
}
