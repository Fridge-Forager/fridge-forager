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
  constructor(private recipeService: RecipeService) { }

  getRecipes(): void {
    this.recipeService.getRecipes()
      .then(recipes => this.recipes = recipes)
  }
  ngOnInit(): void {
    this.getRecipes();
  }

}
