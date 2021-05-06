import { RECIPES } from './mock-recipes';
import { APIKEY } from './.APIKEY';
import { HttpClient } from '@angular/common/http';

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
  recipes?: RecipeCard[] = [];
  recipeIndex = 0;
  items: any = [];
  private _url: string = ' https://api.spoonacular.com/recipes/'
  // constructor(private recipeService: RecipeService) { }

  subscription!: Subscription;
  ingredients!: Ingredient[];
  
  constructor(private recipeService: RecipeService, private ingredientData: IngredientService, private http: HttpClient) { }
  // constructor(private store: Store) {
  //   this.recipes$ = this.store.select(state => state.recipes.recipes)
  // }
  // constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.subscription = this.ingredientData.currentIngredients.subscribe(ingredients => this.ingredients = ingredients)
    this.getRecipes(this.recipeIndex)
  }

  getRecipes(index: number): void {
    // this.recipeService.getRecipes()
    //   .then(recipes => this.recipes = recipes.slice(index, 3))
    let items:any = [];
    for (let recipeId of RECIPES) {
      let url = this._url + 
        recipeId + 
        '/information?apiKey=' +
        APIKEY + 
        '&includeNutrition=false';
      
      this.http.get(url).toPromise()
        .then(data => {
          this.items.push(data);
        })
    }

    console.log(this.items)
    
  }

  onRandomClick(): void {
    this.recipeIndex += 3;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
