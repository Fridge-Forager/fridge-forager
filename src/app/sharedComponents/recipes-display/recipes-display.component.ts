import { Component, NgModule, OnInit, OnDestroy } from '@angular/core';
import { Store, Select } from '@ngxs/store';

import { RecipeService } from './recipe.service';
import { RecipeCard } from './recipe-card';
import { Observable, Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { IngredientService } from 'src/app/ingredient.service';
import { Ingredient } from '../../coreComponents/sidebar/models/Ingredients';


@Component({
  selector: 'app-recipes-display',
  templateUrl: './recipes-display.component.html',
  styleUrls: ['./recipes-display.component.scss'],
  providers: [RecipeService]
})

export class RecipesDisplayComponent implements OnInit {
  recipes!: RecipeCard[];
  recipeIndex = 0;
  subscription!: Subscription;
  ingredients!: Ingredient[];
  
  constructor(private recipeService: RecipeService, private ingredientData: IngredientService) { }
  // constructor(private store: Store) {
  //   this.recipes$ = this.store.select(state => state.recipes.recipes)
  // }

  ngOnInit(): void {
    this.subscription = this.ingredientData.currentIngredients.subscribe(ingredients => this.ingredients = ingredients)
    this.getRecipes(this.recipeIndex)
  }

  getRecipes(index: number): void {
    this.recipeService.getRecipes()
      .then(recipes => this.recipes = recipes.slice(index, 3))
  }

  onRandomClick(): void {
    this.recipeIndex += 3;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
