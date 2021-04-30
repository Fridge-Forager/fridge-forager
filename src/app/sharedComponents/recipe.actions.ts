import { Recipe } from './recipe.model';

export class ReloadRecipes {
  static readonly type = '[RECIPE] Add';
  constructor(public payload: Recipe) {} 
}