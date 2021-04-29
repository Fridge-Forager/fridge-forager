import { Ingredient } from './models/Ingredients';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  ingredients!: Ingredient[];
  inputIngredient: string = '';
  form!: FormGroup;

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

  constructor() { }

  ngOnInit(): void {
    this.ingredients = [],
    this.form = new FormGroup({
      inputIngredient: new FormControl(this.inputIngredient, [
        Validators.required
      ])
    })
  }

}
