import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products =[
    {id:1,name:'laptop'},
    {id:2,name:'Desktop'},
    {id:3,name:'tablet'},
    {id:4,name:'Smartphone'},
  ];
  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  public gotToProduct(url,id)
  {
    this.router.navigate([url,id]);  
  }
}
