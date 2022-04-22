import { Component, OnInit } from '@angular/core';
import { ProductsService } from '.././products.service'
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productData: any = [];
  constructor(private product: ProductsService) { }

  ngOnInit(): void {
    this.product.getAllProduct().subscribe((allData) => {
      console.log(allData);
      this.productData = allData;
    });
  }
  deleteProduct(id:any){
    // console.log(id);
    // this.product.deletedata(id).subscribe((res)=>{
    //   // console.log(res);
    //   this.ngOnInit();
      var result = confirm(' Do you really want to delete?');
    if (result) {
      //Logic to delete the item
      this.product
        .deletedata(id)
        .subscribe((result) => {
          this.ngOnInit();
        });
    } else {
      alert('Delete Operation Canceled !!!');
    }
    }
  }


