import { Ingredient } from './models/Ingredients';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  ingredients!: Ingredient[];
  addIngredient: string = '';
  ingredientForm = new FormGroup({
    Name: new FormControl('')
  });


  addItem() {
    this.ingredients.push({
      content: this.addIngredient
    })

    this.addIngredient = '';
  }

  removeItem(id: number) {
    this.ingredients = this.ingredients.filter((val, i) => i !== id);
  }

  search() {
    console.log(this.ingredients);
  }

  constructor() { }

  ngOnInit(): void {
    this.ingredients = []
  }


}
