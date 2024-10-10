import { Component, ElementRef, input, output, signal, viewChild } from '@angular/core';
import { CartItem, Product } from '../../product.model';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-modal',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, ReactiveFormsModule, FormsModule],
  templateUrl: './cart-modal.component.html',
  styleUrl: './cart-modal.component.css'
})
export class CartModalComponent {
  cart = input<CartItem[]>();
  orderTotal = input<number>(0);
  resetCart = output<any>();

  constructor(){
    
  }

  myButton = viewChild<ElementRef>('showModal');
  myModal = viewChild<ElementRef>('myModal');

  toggleModal() {
    console.log('Show modal!!!');
    this.myModal()?.nativeElement.classList.toggle('show');
  }



  resetMyCart(){
    this.resetCart.emit(this.cart());
    this.toggleModal();
  }
}
