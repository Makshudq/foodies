import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FoodserviceService } from '../foodservice.service';
import { AuthService } from '../home/shared/auth.service';

@Component({
  selector: 'app-header',
  // templateUrl: './header.component.html',
  template: `<h1>Hello</h1>`,
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(
    private foodserviceService: FoodserviceService,
    private router: Router,
    private authService: AuthService
  ) {}
  searchinput: any;
  qty: any = this.foodserviceService.cartarray.length;

  @Output() searchinputdata = new EventEmitter<string>();

  searchheader() {
    this.searchinputdata.emit(this.searchinput);
    console.log(this.searchinput);
    // this.router.navigateByUrl('/search/' + this.searchinput);
    // console.log(this.searchinput);
  }

  logout() {
    this.authService.logout();
  }
}
