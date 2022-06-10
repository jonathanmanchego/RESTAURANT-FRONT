import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  toogleDrawer(drawer: MatDrawer): void {
    drawer.toggle();
  }
}
