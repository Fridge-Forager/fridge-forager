import { Ingredient } from './models/Ingredients';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IngredientService } from 'src/app/ingredient.service';
import { Subscription } from 'rxjs';
import { APIKEY } from '../../sharedComponents/recipes-display/.APIKEY';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  ingredients!: Ingredient[];

  addIngredient: string = '';
  ingredientForm = new FormGroup({
    Name: new FormControl('')
  });

  // options: {
  //   headers?: HttpHeaders | {[header: string]: string | string[]},
  //   observe?: 'body' | 'events' | 'response',
  //   params?: HttpParams | {[param: string]: string | string[]},
  //   reportProgress?: boolean,
  //   responseType?: 'arraybuffer' | 'blob' | 'json' | 'text',
  //   withCredentials?: boolean
  // }

  // $http(
  //   method: 'GET',
  //   url: '/ingredients' + $.param({id: ids})
  // )
  ROOT_URL = 'https://api.spoonacular.com/recipes/findByIngredients';
  recipes!: Observable<any>;

  constructor(private http: HttpClient, private ingredientData: IngredientService) { } //<-- this seems to be necessary

  ngOnInit(): void {
    this.ingredients = []
    this.subscription = this.ingredientData.currentIngredients.subscribe(ingredients => this.ingredients = ingredients)
  }

  addItem() {
    this.ingredients = [...this.ingredients, { content: this.addIngredient }];

    this.addIngredient = '';
    this.ingredientData.updateIngredients(this.ingredients);
  }

  removeItem(id: number) {
    this.ingredients = this.ingredients.filter((val, i) => i !== id);
    this.ingredientData.updateIngredients(this.ingredients);
  }

  // search(ingredients: string): Observable<Ingredient> {
  //   return this.http.get<Ingredient>(`<STUFF GOES HERE INCLUDING ${ingredients}>`);
  // }
  search() {
    // console.log(this.ingredients);
    let strOfIngredients = ''

    for (let i = 0; i < this.ingredients.length; i++) {
      if (i === this.ingredients.length - 1) {
        strOfIngredients += this.ingredients[i].content;
      } else {
        strOfIngredients += this.ingredients[i].content + ', ';
      }
    }

    console.log('strOfIngredients: ', strOfIngredients);


    let params = new HttpParams().set('ingredients', `${strOfIngredients}`);
    let headers = new HttpHeaders().set('apiKey', `${APIKEY}`);

    this.recipes = this.http.get(this.ROOT_URL, { params /*, headers*/ });

    // .map(recipe => recipe.content)
  }




  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
