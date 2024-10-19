import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pasarela',
  templateUrl: './pasarela.component.html',
  styleUrl: './pasarela.component.css',
})
export class PasarelaComponent {
  cart: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cart = JSON.parse(localStorage.getItem('cart') ?? '[]');
  }

  get groupedCart() {
    const grouped = new Map<string, { item: any; quantity: number }>();

    this.cart.forEach((item) => {
      if (grouped.has(item.id)) {
        // Si el producto ya está en el mapa, incrementa su cantidad
        grouped.get(item.id)!.quantity++;
      } else {
        // Si no, agrega el producto al mapa con cantidad 1
        grouped.set(item.id, { item, quantity: 1 });
      }
    });

    return Array.from(grouped.values());
  }

  removeItem(itemId: string) {
    console.log('Eliminando producto con ID:', itemId); // Para depuración
    this.cart = this.cart.filter((item) => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  get total() {
    return this.groupedCart.reduce((sum, groupedItem) => {
      return sum + groupedItem.item.price * groupedItem.quantity;
    }, 0);
  }
}
