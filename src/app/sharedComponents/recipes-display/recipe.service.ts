import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';

import { RecipeCard } from './recipe-card';
import { RECIPECARDS } from './mock-recipes';

@Injectable()

export class RecipeService {
  getRecipes(): Promise<RecipeCard[]> {
    return Promise.resolve(RECIPECARDS);
  }
}