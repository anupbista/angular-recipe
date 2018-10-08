import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ReceipesComponent} from './receipes/receipes.component';
import {ReceipeListComponent} from './receipes/receipe-list/receipe-list.component';
import {ReceipeDetailComponent} from './receipes/receipe-detail/receipe-detail.component';
import {ReceipeItemComponent} from './receipes/receipe-list/receipe-item/receipe-item.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ShoppingEditComponent} from './shopping-list/shopping-edit/shopping-edit.component';
import {DropdownDirective} from './shared/dropdown.directive';
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import {AppRoutingModule} from "./app-routing.module";
import {ReceipesStartComponent} from './receipes/receipes-start/receipes-start.component';
import {ReceipeEditComponent} from './receipes/receipe-edit/receipe-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ReceipeService} from "./receipes/receipe.service";
import {HttpModule} from "@angular/http";
import {DataStorageService} from "./shared/data-storage.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceipesComponent,
    ReceipeListComponent,
    ReceipeDetailComponent,
    ReceipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    ReceipesStartComponent,
    ReceipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ShoppingListService, ReceipeService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
