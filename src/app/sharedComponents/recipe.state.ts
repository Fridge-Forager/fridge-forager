import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Recipe } from './recipe.model';
import { ReloadRecipes } from './recipe.actions';

import { RECIPECARDS } from './recipes-display/mock-recipes';
import { Injectable } from '@angular/core';

export class RecipeStateModel {
  recipes!: Recipe[]
}

@State<RecipeStateModel>({
  name: 'recipes',
  defaults: {
    recipes: RECIPECARDS
  }
})
@Injectable()

export class RecipeState {
  
  @Selector()
  static getTutorials(state: RecipeStateModel) {
    return state.recipes;
  }

  @Action(ReloadRecipes)
  reload({ getState, patchState }: StateContext<RecipeStateModel>, { payload }: ReloadRecipes){
    const state = getState();
    patchState({
      recipes: [...state.recipes, payload]
    })
  }
}