import { Component } from '@angular/core';
import { CategoryService } from '../../../ecomerce/services/Categories.service';
import { Categories } from '../../../models/Category.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  categories: Categories[] = [];

  constructor(
    private categoryService: CategoryService,
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
      console.log(this.categories);
    });
  }
}
