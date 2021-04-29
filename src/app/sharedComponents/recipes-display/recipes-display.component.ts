import { Component, OnInit } from '@angular/core';

export class RecipeCard {
  title!: string;
  url!: string;
  image!: string;
}

@Component({
  selector: 'app-recipes-display',
  templateUrl: './recipes-display.component.html',
  styleUrls: ['./recipes-display.component.scss']
})
export class RecipesDisplayComponent implements OnInit {
  recipe: RecipeCard = {
    title: "1. Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
    url: "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
    image: "https://spoonacular.com/recipeImages/716429-556x370.jpg"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
