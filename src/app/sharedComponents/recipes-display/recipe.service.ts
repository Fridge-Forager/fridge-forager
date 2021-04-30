import { Injectable } from '@angular/core';
// import { Store } from '@ngxs/store';

import { APIKEY } from './.APIKEY';
import { RECIPES } from './mock-recipes';
import { RecipeCard } from './recipe-card';
import { RECIPECARDS } from './mock-recipes';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { IngredientService } from 'src/app/ingredient.service';
import { Ingredient } from '../../coreComponents/sidebar/models/Ingredients';
import { Subscription } from 'rxjs';

@Injectable()

export class RecipeService {
  private _url: string = ' https://api.spoonacular.com/recipes/'
  // constructor(private http: HttpClient) {}
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