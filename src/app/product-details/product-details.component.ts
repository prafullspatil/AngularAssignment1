import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{

  constructor(private product: ProductsService,private router:ActivatedRoute) { }
  displayProductData: any = [];
  ngOnInit(): void {
    console.log(this.router.snapshot.params['id']);
    this.product.getProductById(this.router.snapshot.params['id']).subscribe((res)=>{
      console.log(res);
      this.displayProductData = res;
    })
   
  }

  
  
  

}
