import { Injectable } from '@angular/core';
import { Food } from './home/shared/food';

@Injectable({
  providedIn: 'root',
})
export class FoodserviceService {
  constructor() {}

  grtAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Pizza Pepparoni',
        price: 10,
        cooktime: '10-20',
        favorite: false,
        origin: ['Italy'],
        starts: 2,
        imgUrl: 'food1.jpg',
        tag: ['fastfood', 'pizza', 'lunch'],
      },
      {
        id: 2,
        name: 'Meat Ball',
        price: 10,
        cooktime: '05-20',
        favorite: false,
        origin: ['Italy'],
        starts: 3,
        imgUrl: 'food2.jpg',
        tag: ['fastfood', 'lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 10,
        cooktime: '15-20',
        favorite: true,
        origin: ['Germany', 'US'],
        starts: 4.5,
        imgUrl: 'food3.jpg',
        tag: ['fastfood', 'lunch'],
      },
      {
        id: 4,
        name: 'Fried Patato',
        price: 10,
        cooktime: '05-10',
        favorite: true,
        origin: ['Belgium', 'France'],
        starts: 4.5,
        imgUrl: 'food4.jpg',
        tag: ['fry'],
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 11,
        cooktime: '40-50',
        favorite: false,
        origin: ['India', 'Asia'],
        starts: 3,
        imgUrl: 'food5.jpg',
        tag: ['slow Food', 'Soup'],
      },
      {
        id: 6,
        name: 'Vagetable Pizza',
        price: 8,
        cooktime: '10-50',
        favorite: false,
        origin: ['Italy'],
        starts: 4,
        imgUrl: 'food6.jpg',
        tag: ['pizza', 'lunch'],
      },
      // 'food1.jpg',
      // 'food2.jpg',
      // 'food3.jpg',
      // 'food4.jpg',
      // 'food5.jpg',
      // 'food6.jpg',
    ];
  }

  fromservicefun(data: any) {
    console.log(data);
  }

  cartarray: Food[] = [];
}
