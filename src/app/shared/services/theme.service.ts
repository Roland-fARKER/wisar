import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // El tema inicial es claro (false)
  private darkModeSubject = new BehaviorSubject<boolean>(false);

  // Observable para suscribirse a los cambios de tema
  darkMode$ = this.darkModeSubject.asObservable();

  // Método para alternar entre claro y oscuro
  toggleTheme() {
    this.darkModeSubject.next(!this.darkModeSubject.value);
  }

  // Método para obtener el estado actual (claro u oscuro)
  isDarkMode(): boolean {
    return this.darkModeSubject.value;
  }
}