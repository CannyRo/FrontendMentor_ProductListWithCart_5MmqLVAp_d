import { Component } from '@angular/core';
import { ProductListComponent } from "../../component/product-list/product-list.component";
import { CartListComponent } from "../../component/cart-list/cart-list.component";
import { CartModalComponent } from "../../component/cart-modal/cart-modal.component";

@Component({
  selector: 'app-dessert',
  standalone: true,
  imports: [ProductListComponent, CartListComponent, CartModalComponent],
  templateUrl: './dessert.component.html',
  styleUrl: './dessert.component.css'
})
export class DessertComponent {
  categoryTitle = 'Desserts'
}
