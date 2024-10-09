import { Component } from '@angular/core';
import { ProductQuantityControlComponent } from "../product-quantity-control/product-quantity-control.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductQuantityControlComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

}
