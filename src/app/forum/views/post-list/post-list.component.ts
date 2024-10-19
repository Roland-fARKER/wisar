import { Component } from '@angular/core';
import { CategoryService } from '../../../ecomerce/services/Categories.service';
import { Categories } from '../../../models/Category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  categories: Categories[] = [];

  constructor(
    private categoryService: CategoryService,
    private _router: Router,
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
      console.log(this.categories);
    });
  }

  createPost(){
    this._router.navigate(['/forum/post/create'])
  }
}
