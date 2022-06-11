import { Injectable } from '@angular/core';

export interface NavItem {
  name: string;
  path: string;
  icon: string;
}

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  routes: NavItem[] = [
    {
      name: 'Dashboard',
      path: '/',
      icon: 'home',
    },
    {
      name: 'Configuracion',
      path: '/configuraciones',
      icon: 'settings',
    },
  ];
  constructor() {}
}
