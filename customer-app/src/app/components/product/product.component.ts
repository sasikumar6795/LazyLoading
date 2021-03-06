import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productId ='';
  constructor(
    private router : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.productId=this.router.snapshot.params.id;
  }

}
