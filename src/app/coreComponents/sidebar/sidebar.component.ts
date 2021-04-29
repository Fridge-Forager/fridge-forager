import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  // template: `<div>Hi</div>`,
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  ingredient: string;
  ingredients = [];

  onClick() {
    this.ingredients.push({name: this.ingredient});
    this.ingredient = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
