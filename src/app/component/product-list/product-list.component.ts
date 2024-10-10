import { Component, input } from '@angular/core';
import { ProductQuantityControlComponent } from "../product-quantity-control/product-quantity-control.component";
import { CartItem, Product } from '../../product.model';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, ProductQuantityControlComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productList = input<Product[]>();
  cart = input<CartItem[]>();
}
