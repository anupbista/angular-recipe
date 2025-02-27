import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs";

export class ShoppingListService {

  ingredientsChanges = new Subject<Ingredient[]>();
  StartedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Mangoes', 6)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanges.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanges.next(this.ingredients.slice());
  }

  getIngredient(index: number){
    return this.ingredients[index];
  }

  updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanges.next(this.ingredients.slice());
  }

  deleteIngredient(index: number){
    this.ingredients.splice(index, 1);
    this.ingredientsChanges.next(this.ingredients.slice());
  }
}
