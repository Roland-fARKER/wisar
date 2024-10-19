import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from '../../../shared/services/theme.service';

@Component({
  selector: 'app-carrusel-info',
  templateUrl: './carrusel-info.component.html',
  styleUrl: './carrusel-info.component.css',
})
export class CarruselInfoComponent implements OnInit, OnDestroy {
  images: string[] = [
    'assets/car-1.png',
    'assets/car-2.png',
    'assets/car-3.png',
    'assets/car-4.png',
    'assets/car-5.png',
    'assets/car-6.png',
    'assets/car-7.png',
  ];
  isDarkMode = false;
  currentIndex: number = 0;
  intervalId: any;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.startCarousel();
    this.themeService.darkMode$.subscribe((isDark) => {
      this.isDarkMode = isDark;
    });
  }

  startCarousel(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
