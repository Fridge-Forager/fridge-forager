import { Ingredient } from './models/Ingredients';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.ingredients = []
    // this.form = new FormGroup({
    //   inputIngredient: new FormControl(this.inputIngredient, [
    //     Validators.required
    //   ])
    // })
  }

  ingredients!: Ingredient[];
  inputIngredient: string = '';
  addIngredientForm = new FormGroup({
    ingredintToAdd: new FormControl('', Validators.required)
  })

  addItem() {
    this.ingredients.push({
      content: this.inputIngredient
    })

    this.inputIngredient = '';
  }

  removeItem(id: number) {
    this.ingredients = this.ingredients.filter((val, i) => i !== id);
  }

  search() {
    console.log(this.ingredients);
  }

}
