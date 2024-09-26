import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Categories } from '../../models/Category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private collectionName = 'categories';

  constructor(private firestore: AngularFirestore) {}

  // Método para obtener todas las categorías
  getCategories(): Observable<Categories[]> {
    return this.firestore
      .collection<Categories>(this.collectionName)
      .valueChanges({ idField: 'id' });
  }

  // Método para obtener una categoría por ID
  getCategoryById(id: string): Observable<Categories | undefined> {
    return this.firestore
      .collection<Categories>(this.collectionName)
      .doc(id)
      .valueChanges();
  }

  // Método para agregar una nueva categoría
  addCategory(category: Categories): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore
      .collection<Categories>(this.collectionName)
      .doc(id)
      .set({ ...category, id });
  }

  // Método para actualizar una categoría
  updateCategory(category: Categories): Promise<void> {
    return this.firestore
      .collection<Categories>(this.collectionName)
      .doc(category.id)
      .update(category);
  }

  // Método para eliminar una categoría
  deleteCategory(id: string): Promise<void> {
    return this.firestore
      .collection<Categories>(this.collectionName)
      .doc(id)
      .delete();
  }
}
