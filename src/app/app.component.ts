import { Component, OnInit } from '@angular/core';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'wisar';
  isDarkMode = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.darkMode$.subscribe((isDark) => {
      this.isDarkMode = isDark;
    });
  }
}
