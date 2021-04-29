import { Ingredient } from './models/Ingredients';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  ingredients!: Ingredient[];
  inputIngredient: string = '';

  addItem() {
    this.ingredients.push({
      content: this.inputIngredient
    })

    this.inputIngredient = '';
  }

  removeItem(id: number) {
    this.ingredients = this.ingredients.filter((val, i) => i !== id);
  }

  constructor() { }

  ngOnInit(): void {
    this.ingredients = []
  }

}
