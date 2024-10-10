import { Component, inject } from '@angular/core';
import { ProductQuantityControlComponent } from "../product-quantity-control/product-quantity-control.component";
import { Product } from '../../product.model';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ProductService } from '../../service/product.service';
import { BorderProductCardDirective } from '../../service/border-product-card.directive';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, ProductQuantityControlComponent, BorderProductCardDirective],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  readonly productService = inject(ProductService);
  readonly productList = this.productService.productList;
  
  cart = this.productService.cart;
  
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
