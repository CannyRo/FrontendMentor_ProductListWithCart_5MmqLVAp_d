import { Directive, effect, ElementRef, input } from '@angular/core';
import { CartItem, Product } from '../product.model';

@Directive({
  selector: '[appBorderProductCard]',
  standalone: true,
})
export class BorderProductCardDirective {
  product = input<Product>();
  cart = input<CartItem[]>();

  constructor(private el: ElementRef) {
    effect(() => {
      const currentProduct = this.product();
      const currentCart = this.cart();
      const isProductInCart = currentCart?.some(cartItem => cartItem.product.name === currentProduct?.name);
      if(isProductInCart){
        this.el.nativeElement.style.border = '2px solid var(--Red)';
      } else {
        this.el.nativeElement.style.border = 'none';
      }
    });
  }


}
