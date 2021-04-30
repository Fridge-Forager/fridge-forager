import { Ingredient } from './models/Ingredients';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
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


  addItem() {
    this.ingredients.push({
      content: this.addIngredient
    })

    this.addIngredient = '';
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

  constructor(private http: HttpClient) { } //<-- this seems to be necessary

  ngOnInit(): void {
    this.ingredients = []
  }


}
