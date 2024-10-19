import { Component } from '@angular/core';
import { CategoryService } from '../../services/Categories.service';
import { Categories } from '../../../models/Category.model';

@Component({
  selector: 'app-lts-prod',
  templateUrl: './lts-prod.component.html',
  styleUrl: './lts-prod.component.css'
})
export class LtsProdComponent {
  categories: Categories[] = [];
  imageUrl?: string;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
      console.log(this.categories);
    });
  }
  
}
