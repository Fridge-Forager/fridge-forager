import { Component, OnInit } from '@angular/core';

import { RecipeService } from './recipe.service';
import { RecipeCard } from './recipe-card';

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

  getRecipes(index: number): void {
    this.recipeService.getRecipes()
      .then(recipes => this.recipes = recipes.slice(index, 3))
  }
  ngOnInit(): void {
    console.log(this.recipeIndex)
    this.getRecipes(this.recipeIndex)
  }

  onRandomClick(): void {
    this.recipeIndex += 3;
    console.log(this.recipeIndex)
  }
}
