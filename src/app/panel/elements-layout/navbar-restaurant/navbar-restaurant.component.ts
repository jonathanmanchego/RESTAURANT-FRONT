import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar-restaurant',
  templateUrl: './navbar-restaurant.component.html',
  styleUrls: ['./navbar-restaurant.component.scss'],
})
export class NavbarRestaurantComponent implements OnInit {
  @Output() buttonDrawer = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}
  toggleDrawer(): void {
    this.buttonDrawer.emit(true);
  }
}
