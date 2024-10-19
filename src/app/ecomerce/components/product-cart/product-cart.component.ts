import { Component, Input } from '@angular/core';
import { Product } from '../../../models/Product.model';
import { ThemeService } from '../../../shared/services/theme.service';
@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.css'
})
export class ProductCartComponent {
  @Input() product!: Product;
  isDarkMode = false;

  constructor(
    private themeService: ThemeService
  ){}

  ngOnInit(): void {
    this.themeService.darkMode$.subscribe((isDark) => {
      this.isDarkMode = isDark;
    });
  }

  addToCart(product: any) {
    const cart = JSON.parse(localStorage.getItem('cart') ?? '[]');
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Emitir un evento global indicando que se ha agregado un nuevo producto al carrito
    const event = new CustomEvent('cart-updated', { detail: { product } });
    window.dispatchEvent(event);
  }
}
