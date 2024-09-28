import { Component, Input } from '@angular/core';
import { Product } from '../../../models/Product.model';
@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.css'
})
export class ProductCartComponent {
  @Input() product!: Product;

  addToCart(product: any) {
    const cart = JSON.parse(localStorage.getItem('cart') ?? '[]');
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Emitir un evento global indicando que se ha agregado un nuevo producto al carrito
    const event = new CustomEvent('cart-updated', { detail: { product } });
    window.dispatchEvent(event);
  }
}
