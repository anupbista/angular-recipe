import {Component, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';
import { Receipe } from '../receipe.modal';
import {ReceipeService} from "../receipe.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit, OnDestroy {

  receipes: Receipe[];
  subscription: Subscription

  constructor(private recipeService: ReceipeService, private router: Router, private  route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.recipeService.receipeChanged.subscribe(
      (receipes: Receipe[]) => {
        this.receipes = receipes;
      }
    );
    this.receipes = this.recipeService.getReceipes();
  }

  onNewReceipe(){
    console.log("GOne");
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
