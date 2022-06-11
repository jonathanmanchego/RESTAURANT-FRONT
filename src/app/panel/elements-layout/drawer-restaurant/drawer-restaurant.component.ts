import {
  NavigationService,
  NavItem,
} from './../../services/navigation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawer-restaurant',
  templateUrl: './drawer-restaurant.component.html',
  styleUrls: ['./drawer-restaurant.component.scss'],
})
export class DrawerRestaurantComponent implements OnInit {
  routes: NavItem[] = [];
  constructor(private readonly navigationService: NavigationService) {}

  ngOnInit(): void {
    this.routes = this.navigationService.routes.map((item) => ({
      ...item,
      path: `/panel${item.path}`,
    }));
  }
}
