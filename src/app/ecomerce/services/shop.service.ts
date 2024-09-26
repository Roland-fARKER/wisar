import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Shop } from '../../models/Shop.model';
import { UserService1 } from '../../chats/services/user.service'; // Asegúrate de importar tu servicio de usuario
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  private shopsCollection = this.firestore.collection<Shop>('shops');
  constructor(
    private firestore: AngularFirestore,
    private userService: UserService1
  ) {}

  async createShop(shopData: Shop) {
    const shopRef = await this.firestore.collection('shops').add({
      ...shopData,
      active: true,
      verify: false,
    });

    const shopId = shopRef.id;

    // Actualizar el id de la tienda para el usuario
    await this.userService.updateUserShopId(shopData.ownerId, shopId);

    // Crear la lista de productos (product list) y obtener su id
    const productListRef = await this.firestore.collection('productLists').add({
      shopId: shopId,
      products: [],
    });

    const productListId = productListRef.id;

    // Actualizar la tienda (shop) con el id de la lista de productos (product list)
    await this.firestore.collection('shops').doc(shopId).update({
      productListId: productListId,
    });

    // Actualizar el rol del usuario a "Emprendedor"
    await this.firestore
      .collection('users')
      .doc(shopData.ownerId)
      .update({
        rol: {
          id: '2OvvBcVJCYXKtiyV4qtK',
          name: 'Emprendedor',
          state: true,
        },
      });
  }

  // Obtener todas las tiendas
  getShops(): Observable<Shop[]> {
    return this.shopsCollection.valueChanges();
  }

  // Obtener una tienda por ID
  getShopById(id: string): Observable<Shop | undefined> {
    return this.shopsCollection.doc<Shop>(id).valueChanges();
  }

  // Actualizar una tienda
  updateShop(id: string, shopData: Partial<Shop>): Promise<void> {
    return this.shopsCollection
      .doc<Shop>(id)
      .update(shopData)
      .then(() => {
        console.log('Tienda actualizada con éxito');
      });
  }

  // Eliminar una tienda
  deleteShop(id: string): Promise<void> {
    return this.shopsCollection
      .doc<Shop>(id)
      .delete()
      .then(() => {
        console.log('Tienda eliminada con éxito');
      });
  }
}
