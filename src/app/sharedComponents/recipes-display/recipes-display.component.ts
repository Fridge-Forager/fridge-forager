import { Component, NgModule, OnInit } from '@angular/core';

import { RecipeService } from './recipe.service';
import { RecipeCard } from './recipe-card';
import { RECIPES } from './mock-recipes';
import { APIKEY } from './.APIKEY';
import { HttpClient } from '@angular/common/http';



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
  // constructor(private store: Store) {
  //   this.recipes$ = this.store.select(state => state.recipes.recipes)
  // }
  constructor(private http: HttpClient) {}

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

  ngOnInit(): void {
    this.getRecipes(5);
  }

  onRandomClick(): void {
    this.recipeIndex += 3;
  }
}
