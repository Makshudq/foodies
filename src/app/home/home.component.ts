import { Component } from '@angular/core';
import { FoodserviceService } from '../foodservice.service';
import { Food } from './shared/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(
    private foodserviceService: FoodserviceService,
    private route: ActivatedRoute
  ) {}

  myProperty: any;
  foodDetails: Food[] = [];

  // childdata(searchinputchild: string) {
  //   this.foodDetails = this.foodserviceService
  //     .grtAll()
  //     .filter((food) =>
  //       food.name.toLowerCase().includes(searchinputchild.toLowerCase())
  //     );
  // }

  tabselect(event: any) {
    this.foodDetails = this.foodserviceService.grtAll();
    this.foodDetails = this.foodserviceService
      .grtAll()
      .filter((food) => food.tag?.includes(event));
    if (event == 'all') this.foodDetails = this.foodserviceService.grtAll();
  }

  ngOnInit(): void {
    this.foodDetails = this.foodserviceService.grtAll();
    // this.childdata();
    // this.foodDetails = this.foodserviceService.grtAll();
    // this.route.params.subscribe((params) => {
    //   if (params['searchterm'])
    //     this.foodDetails = this.foodserviceService
    //       .grtAll()
    //       .filter((food) =>
    //         food.name.toLowerCase().includes(params['searchterm'].toLowerCase())
    //       );
    //   else this.foodDetails = this.foodserviceService.grtAll();
    // });
  }

  // ...........................................................

  search() {
    if (this.myProperty)
      this.foodDetails = this.foodserviceService
        .grtAll()
        .filter((food) =>
          food.name.toLowerCase().includes(this.myProperty.toLowerCase())
        );

    this.myProperty = '';
  }
}
