import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';

import { RecipeCard } from './recipe-card';
import { RECIPECARDS } from './mock-recipes';
import { IngredientService } from 'src/app/ingredient.service';
import { Ingredient } from '../../coreComponents/sidebar/models/Ingredients';
import { Subscription } from 'rxjs';

@Injectable()

export class RecipeService {
  ingredients!: Ingredient[];
  subscription: Subscription;

  constructor(private ingredientData: IngredientService) { 
    // this.ingredients is connected to the ingredient Service
    this.subscription = this.ingredientData.currentIngredients.subscribe(ingredients => this.ingredients = ingredients);
  }
  getRecipes(): Promise<RecipeCard[]> {
    let ingredientNamesArray = this.ingredients.map(e => e.content);
    return Promise.resolve(RECIPECARDS);
  }
}