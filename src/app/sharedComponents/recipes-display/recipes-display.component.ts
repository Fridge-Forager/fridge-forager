import { Component, NgModule, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';

import { RecipeService } from './recipe.service';
import { RecipeCard } from './recipe-card';
import { Observable } from 'rxjs';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipes-display',
  templateUrl: './recipes-display.component.html',
  styleUrls: ['./recipes-display.component.scss'],
  providers: [RecipeService]
})

export class RecipesDisplayComponent implements OnInit {
  recipes!: RecipeCard[];
  recipeIndex = 0;
  
  constructor(private recipeService: RecipeService) { }
  // constructor(private store: Store) {
  //   this.recipes$ = this.store.select(state => state.recipes.recipes)
  // }

  getRecipes(index: number): void {
    this.recipeService.getRecipes()
      .then(recipes => this.recipes = recipes.slice(index, 3))
  }

  ngOnInit(): void {
    this.getRecipes(this.recipeIndex)
  }

  onRandomClick(): void {
    this.recipeIndex += 3;

  }
}
