import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/models/product';
import { CommonService } from 'src/app/shared/services/common.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss'],
})
export class ViewProductComponent implements OnInit {
  productData!: Product;
  productId: string;
  loading: boolean = false;

  constructor(
    private common: CommonService,
    private activatedRoute: ActivatedRoute
  ) {
   /* Subscribing to the `paramMap` observable, which is an observable of the parameters of the route. */
    this.activatedRoute.paramMap.subscribe((param) => {
      //To get productId
      this.productId = param.get('id');
      if (this.productId != null) {
        this.getProductDetails();
      }
    });
  }

  ngOnInit(): void {}

/**
 * It makes a GET request to the `products/:id` endpoint, and assigns the result to the `productData`
 * variable
 */
  getProductDetails() {
    this.loading = true;
    this.common.get('products/' + this.productId, {}).subscribe({
      next: (result: any) => {
        this.productData = result;
        this.loading = false;
      },
      error: (err: any) => {
        this.loading = false;
      },
    });
  }
}
