import { Http, Response } from "@angular/http";
import {Injectable} from "@angular/core";
import {ReceipeService} from "../receipes/receipe.service";
import {Receipe} from "../receipes/receipe.modal";
import { map } from "rxjs/operators";

@Injectable()
export class DataStorageService{
  constructor(private http: Http, private receipeService: ReceipeService){}

  storeReceipe(){
    return this.http.put('https://receipe-book-3ae58.firebaseio.com/receipes.json', this.receipeService.getReceipes());
  }
  getReceipes(){
    this.http.get('https://receipe-book-3ae58.firebaseio.com/receipes.json')
      .pipe(map(
        (response: Response) => {
          const receipes: Receipe[] = response.json();
          for (let receipe of receipes){
            if (receipe['ingredients']){
              receipe['ingredients'] = [];
            }
          }
          return receipes;
        }
      )).subscribe(
      (receieps: Receipe[]) => {
          this.receipeService.setReceipes(receieps);
      }
    );
  }
}
