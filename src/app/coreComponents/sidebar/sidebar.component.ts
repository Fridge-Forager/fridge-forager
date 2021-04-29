import { Ingredient } from './models/Ingredients';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.ingredients = [],
    this.form = this.formBuilder.group({
      addIngredient: [null, Validators.required]
    })
  }

}
