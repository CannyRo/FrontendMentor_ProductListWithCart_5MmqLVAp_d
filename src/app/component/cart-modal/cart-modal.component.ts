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
  body = viewChild<ElementRef>('body');

  lastScrollPosition = 0;



  openModal() {
    console.log('Open and show modal!!!');
    this.lastScrollPosition = window.scrollY;
    this.body()?.nativeElement.addClass('modal-open');
    this.myModal()?.nativeElement.classList.toggle('show');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  closeModal(){
    console.log('Close and hide modal!!!');
    this.body()?.nativeElement.removeClass('modal-open');
    this.myModal()?.nativeElement.classList.toggle('show');
    window.scrollTo({ top: this.lastScrollPosition, behavior: 'smooth' });
  }



  resetMyCart(){
    this.resetCart.emit(this.cart());
    this.body()?.nativeElement.removeClass('modal-open');
    this.myModal()?.nativeElement.classList.toggle('show');
  }
}
