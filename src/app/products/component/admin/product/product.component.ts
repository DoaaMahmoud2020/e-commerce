import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CommonService } from '../../../../shared/services/common.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/products/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, AfterViewInit {
  constructor(private common: CommonService) {}
  loading:boolean=false;
  displayedColumns: string[] = [
    'id',
    'title',
    'price',
    // 'description',
    'category',
    // 'image'
  ];

  productData: Product[] = [];
  pageSizes = [5, 10, 20];
  dataSource!: MatTableDataSource<Product>;
  dataSourceWithPageSize!: MatTableDataSource<Product>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('paginatorPageSize') paginatorPageSize!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSourceWithPageSize.paginator = this.paginatorPageSize;
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.loading=true;
    this.common.get('products', {}).subscribe(
      (result: any) => {
        this.productData = result;
        this.settingForMatTable();
        this.loading=false;
      },
      (error) => {
        
      }
    );
  }
  settingForMatTable() {
    this.dataSource = new MatTableDataSource(this.productData);
    this.dataSourceWithPageSize = new MatTableDataSource(this.productData);
    this.dataSource.paginator = this.paginator;
    this.dataSourceWithPageSize.paginator = this.paginatorPageSize;
  }
}
