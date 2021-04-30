import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private ingredientSource = new BehaviorSubject([]);
  currentIngredients = this.ingredientSource.asObservable();

  constructor() { }

  updateIngredients(data:any) {
    this.ingredientSource.next(data);
  }

  getIngredients(){
    return this.ingredientSource.getValue();
  }

}
