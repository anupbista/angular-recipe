import {Receipe} from "./receipe.modal";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable()
export class ReceipeService{
  receipeChanged = new Subject<Receipe[]>();

  private receipes: Receipe[] = [
    new Receipe('Test',
      'Test Description',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
      [ new Ingredient('Meat', 2), new Ingredient('French Fries',8)]),
    new Receipe('Test 2',
      'Test Description 2',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
      [ new Ingredient('Meat', 2), new Ingredient('Buns',8)]),
  ];

  constructor(private slService: ShoppingListService){}

  getReceipes(){
    return this.receipes.slice();
  }

  getReceipe(index: number){
    return this.receipes[index];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]){
  this.slService.addIngredients(ingredients);
  }

  addReceipe(receipe: Receipe){
    this.receipes.push(receipe);
    this.receipeChanged.next(this.receipes.slice());
  }

  updateReceipe(index: number, newReceipe: Receipe){
    this.receipes[index] = newReceipe;
    this.receipeChanged.next(this.receipes.slice());
  }

  deleteReceie(index: number){
    this.receipes.splice(index, 1);
    this.receipeChanged.next(this.receipes.slice());
  }

  setReceipes(receipes: Receipe[]){
    this.receipes = receipes;
    this.receipeChanged.next(this.receipes.slice());
  }

}
