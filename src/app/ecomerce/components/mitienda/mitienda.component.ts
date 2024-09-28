import { Component } from '@angular/core';
import { Shop } from '../../../models/Shop.model';
import { ShopService } from '../../services/shop.service';
import { AuthService } from '../../../auth/services/auth.service';
import { UserService1 } from '../../../chats/services/user.service';
import { User } from '../../../models/User.model';
import { Product } from '../../../models/Product.model';

@Component({
  selector: 'app-mitienda',
  templateUrl: './mitienda.component.html',
  styleUrl: './mitienda.component.css',
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
          this.shopService
            .getShopById(shopId)
            .subscribe((shop: Shop | undefined) => {
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

  productsWinter: Product[] = [
    {
      id: '10',
      name: 'Chaqueta Aislante',
      description:
        'Chaqueta térmica con aislamiento para temperaturas bajo cero.',
      price: 350.0,
      stock: 12,
      shopId: 'shop010',
      categoryId: 'cat010',
      imageUrl:
        'https://underarmourcl.vtexassets.com/arquivos/ids/789800/1380868-001_N11_1.jpg?v=638588437007800000',
      state: true,
      discount: 15,
      discountPrice: 297.5,
      discountDesc: 15,
      nombreTienda: 'WinterFit',
    },
    {
      id: '11',
      name: 'Botas Impermeables',
      description:
        'Botas resistentes al agua con forro de lana para mayor calidez.',
      price: 180.0,
      stock: 20,
      shopId: 'shop011',
      categoryId: 'cat011',
      imageUrl:
        'https://www.michy.cl/cdn/shop/files/la-michy-tienda-chile-botas-impermeables-ab-42616536367351.webp?v=1715278981&width=2048',
      state: true,
      discount: 10,
      discountPrice: 162.0,
      discountDesc: 10,
      nombreTienda: 'IceTrek',
    },
    {
      id: '12',
      name: 'Gorro de Lana',
      description: 'Gorro de lana suave y cálido, ideal para el invierno.',
      price: 25.0,
      stock: 50,
      shopId: 'shop012',
      categoryId: 'cat012',
      imageUrl:
        'https://treck.vtexassets.com/arquivos/ids/168695/06-02-046-F1-1300.jpg?v=638412813107130000',
      state: true,
      nombreTienda: 'WarmThreads',
    },
    {
      id: '13',
      name: 'Bufanda de Cachemira',
      description:
        'Bufanda ligera de cachemira para protección contra el frío.',
      price: 80.0,
      stock: 30,
      shopId: 'shop013',
      categoryId: 'cat013',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTzltZU3vVUCrQJiMITCMCSMV1fi4fjRSPVg&s',
      state: true,
      discount: 5,
      discountPrice: 76.0,
      discountDesc: 5,
      nombreTienda: 'LuxuryWinter',
    },
    {
      id: '14',
      name: 'Abrigo de Invierno',
      description:
        'Abrigo largo y acolchado para máxima protección contra el frío.',
      price: 400.0,
      stock: 8,
      shopId: 'shop014',
      categoryId: 'cat014',
      imageUrl:
        'https://s.libertaddigital.com/2022/01/22/abrigo-de-invierno-para-mujer-yxp-militar.jpg',
      state: true,
      discount: 20,
      discountPrice: 320.0,
      discountDesc: 20,
      nombreTienda: 'SnowPeak',
    },
    {
      id: '15',
      name: 'Mallas Térmicas',
      description:
        'Mallas térmicas para mantenerte caliente en temperaturas frías.',
      price: 60.0,
      stock: 40,
      shopId: 'shop015',
      categoryId: 'cat015',
      imageUrl:
        'https://down-mx.img.susercontent.com/file/ccbcf163bb33d368117aaca05ea01a88_tn.webp',
      state: true,
      nombreTienda: 'ArcticWear',
    },
    {
      id: '16',
      name: 'Calcetines de Lana',
      description:
        'Calcetines gruesos de lana merino para un aislamiento superior.',
      price: 15.0,
      stock: 60,
      shopId: 'shop016',
      categoryId: 'cat016',
      imageUrl:
        'https://supercalcetines.com/sites/default/files/imagecache/Blog_principal/LANA.jpg',
      state: true,
      nombreTienda: 'WinterBasics',
    },

    {
      id: '18',
      name: 'Chaleco Acolchado',
      description:
        'Chaleco con relleno de plumas, ideal para climas fríos y ventosos.',
      price: 100.0,
      stock: 18,
      shopId: 'shop018',
      categoryId: 'cat018',
      imageUrl:
        'https://hips.hearstapps.com/hmg-prod/images/marc-forne-wears-black-sunglasses-silver-earrings-a-beige-news-photo-1634283486.jpg?crop=0.669xw:1.00xh;0.176xw,0&resize=640:*',
      state: true,
      nombreTienda: 'FrostGuard',
    },
  ];
}
