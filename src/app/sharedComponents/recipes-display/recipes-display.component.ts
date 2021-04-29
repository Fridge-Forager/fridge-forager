import { Component, OnInit } from '@angular/core';

export class RecipeCard {
  title!: string;
  url!: string;
  image!: string;
}

const RECIPECARDS: RecipeCard[] = [
  {
    title: "1. Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
    url: "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
    image: "https://spoonacular.com/recipeImages/716429-240x150.jpg"
  },
  {
    title: "2. Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
    url: "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
    image: "https://spoonacular.com/recipeImages/716424-240x150.jpg"
  },
  {
    title: "3. Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
    url: "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
    image: "https://spoonacular.com/recipeImages/716427-240x150.jpg"
  },
  {
    title: "4. Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
    url: "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
    image: "https://spoonacular.com/recipeImages/716426-240x150.jpg"
  },
  {
    title: "5. Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
    url: "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
    image: "https://spoonacular.com/recipeImages/716425-240x150.jpg"
  }
]

@Component({
  selector: 'app-recipes-display',
  templateUrl: './recipes-display.component.html',
  styleUrls: ['./recipes-display.component.scss']
})
export class RecipesDisplayComponent implements OnInit {
  recipes= RECIPECARDS;
  constructor() { }

  ngOnInit(): void {
  }

}
