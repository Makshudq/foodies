import { Component } from '@angular/core';
import { FoodserviceService } from '../foodservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  constructor(private foodserviceService: FoodserviceService) {}
  items: any;

  ngOnInit(): void {
    this.items = this.foodserviceService.cartarray;

    console.log(this.items);

    // this.activatedRoute.params.subscribe((params) => (this.urlparams = params));
    // this.foodPageData = this.foodserviceService
    //   .grtAll()
    //   .filter((food) => food.id == this.urlparams.id);
    // console.log(this.foodPageData);
    // console.log(this.urlparams);
  }
}
