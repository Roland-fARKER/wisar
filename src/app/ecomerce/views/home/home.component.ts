import { Component, Renderer2 } from '@angular/core';
import { Categories } from '../../../models/Category.model';
import { CategoryService } from '../../services/Categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  categories: Categories[] = [];
  imageUrl?: string;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
      console.log(this.categories);
    });

    this.setImageBasedOnScreenSize();
    window.addEventListener('resize', () => this.setImageBasedOnScreenSize());
  }

  setImageBasedOnScreenSize(): void {
    if (window.innerWidth >= 768) {
      this.imageUrl = 'assets/banDesk.png';
    } else {
      this.imageUrl = 'assets/ban2.2.png';
    }
  }
}
