import { Injectable } from '@angular/core';
// import { Store } from '@ngxs/store';

import { APIKEY } from './.APIKEY';
import { RECIPES } from './mock-recipes';
import { RecipeCard } from './recipe-card';
import { RECIPECARDS } from './mock-recipes';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable()

export class RecipeService {
  private _url: string = ' https://api.spoonacular.com/recipes/'
  // constructor(private http: HttpClient) {}
  constructor() {}
  getRecipes(): Promise<RecipeCard[]> {
    // const cards: RecipeCard[] = {};

    // for (let recipeId of RECIPES) {
    //   let url = this._url + 
    //     recipeId + 
    //     '/information?apiKey=' +
    //     APIKEY + 
    //     '&includeNutrition=false';
    //   this.http.get(url).toPromise()
    // }
    return Promise.resolve(RECIPECARDS);
  }
}