import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/models/product';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.scss'],
})
export class CategoryProductComponent implements OnInit {
  constructor(private common: CommonService) {}
  categoriesData: [] = [];
  loading:boolean=false;

  productsData: Product[] = [];
  ngOnInit(): void {
    this.getAllCategories();
  }
  getAllCategories() {
    this.loading=true;
    this.common.get('products/categories', {}).subscribe((result: any) => {
      this.categoriesData = result;
      this.loading=false;
    });
  }
  getProductsByCateg(categoryName:string) {
    this.loading=true;
    this.common
      .get('products/category/' + categoryName, {})
      .subscribe((result: any) => {
        this.productsData = result;
        this.loading=false;
      });
  }
}
