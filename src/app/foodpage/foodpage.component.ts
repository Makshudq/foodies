import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodserviceService } from '../foodservice.service';
import { Food } from '../home/shared/food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrl: './foodpage.component.scss',
})
export class FoodpageComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private foodserviceService: FoodserviceService
  ) {}
  foodPageData: any;
  fd: any;

  cartboj: any;

  urlparams: any;

  cartitem: any;
  newcartitem: any;

  addingtocart(cartitemid: any) {
    this.cartitem = this.foodserviceService
      .grtAll()
      .filter((food) => food.id == cartitemid);
    [this.newcartitem] = this.cartitem;

    this.foodserviceService.cartarray.push(this.newcartitem);
    console.log(this.foodserviceService.cartarray.length);
    alert('item added to cart');
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => (this.urlparams = params));
    this.foodPageData = this.foodserviceService
      .grtAll()
      .filter((food) => food.id == this.urlparams.id);

    // console.log(this.foodPageData);
    // console.log(this.urlparams);

    [this.fd] = this.foodPageData;
    // console.log(this.fd);
  }
}
