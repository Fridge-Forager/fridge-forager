import { Ingredient } from './models/Ingredients';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IngredientService } from 'src/app/ingredient.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
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

  constructor(private http: HttpClient, private ingredientService: IngredientService) { } //<-- this seems to be necessary

  addItem() {
    this.ingredients.push({
      content: this.addIngredient
    })

    this.addIngredient = '';
    console.log('sidebar.component.ts -- this.subscription:', this.subscription);
  }

  removeItem(id: number) {
    this.ingredients = this.ingredients.filter((val, i) => i !== id);
  }

  // search(ingredients: string): Observable<Ingredient> {
  //   return this.http.get<Ingredient>(`<STUFF GOES HERE INCLUDING ${ingredients}>`);
  // }
  search() {
    console.log('placeholder');
  }


  ngOnInit(): void {
    this.ingredients = []
    this.subscription = this.ingredientService.currentIngredients.subscribe(ingredients => this.ingredients = ingredients)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
