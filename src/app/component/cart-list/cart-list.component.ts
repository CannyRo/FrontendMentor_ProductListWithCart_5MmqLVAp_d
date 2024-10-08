import { Component } from '@angular/core';
import { ProductQuantityControlComponent } from "../product-quantity-control/product-quantity-control.component";

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [ProductQuantityControlComponent],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.css'
})
export class CartListComponent {

}
