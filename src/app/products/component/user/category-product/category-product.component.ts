import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/models/product';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.scss'],
})
export class CategoryProductComponent implements OnInit {
  constructor(private CommonService: CommonService) {}
  categoriesData: [] = [];
  loading: boolean = false;

  productsData: Product[] = [];
  /**
   * The ngOnInit() function is a lifecycle hook that is called after Angular has initialized all
   * data-bound properties of a directive
   */
  ngOnInit(): void {
    this.getAllCategories();
  }
  /**
   * It makes a GET request to the server to get all the categories
   */
  getAllCategories() {
    this.loading = true;
    this.CommonService.get('products/categories', {}).subscribe({
      next: (result: []) => {
        this.categoriesData = result;
        this.loading = false;
      },
      error: (err: Error) => {
        this.loading = false;
      },
    });
  }
/**
 * It gets the products by category name
 * @param {string} categoryName - The name of the category you want to get the products from.
 */
  getProductsByCateg(categoryName: string) {
    this.loading = true;
    this.CommonService.get('products/category/' + categoryName, {}).subscribe({
      next: (result: Product[]) => {
        this.productsData = result;
        this.loading = false;
      },
      error: (err: Error) => {
        this.loading = false;
      },
    });
  }
}
