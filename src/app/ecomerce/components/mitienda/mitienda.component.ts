import { Component } from '@angular/core';
import { Shop } from '../../../models/Shop.model';
import { ShopService } from '../../services/shop.service';
import { AuthService } from '../../../auth/services/auth.service';
import { UserService1 } from '../../../chats/services/user.service';
import { User } from '../../../models/User.model';

@Component({
  selector: 'app-mitienda',
  templateUrl: './mitienda.component.html',
  styleUrl: './mitienda.component.css'
})
export class MitiendaComponent {
  shop: Shop | null = null;

  constructor(
    private shopService: ShopService,
    private userService: UserService1 // Servicio para obtener el usuario autenticado
  ) {}

  ngOnInit(): void {
    this.loadShop();
  }

  loadShop(): void {
    this.userService.getCurrentUser().subscribe((user: User | null) => {
      if (user) {
        const shopId = user.shopId; // Obtener el ID de la tienda asociada al usuario
  
        if (shopId) {
          // Llamar al servicio de tiendas para obtener la tienda del usuario
          this.shopService.getShopById(shopId).subscribe((shop: Shop | undefined) => {
            if (shop) {
              this.shop = shop;
            } else {
              console.error('No se encontró una tienda para este usuario.');
            }
          });
        } else {
          console.error('El usuario no tiene una tienda asociada.');
        }
      } else {
        console.error('No hay un usuario autenticado.');
      }
    });
  }
}
