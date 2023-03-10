import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HeaderComponent } from ".//components/header/header.component";
import { RecipesComponent } from ".//components/recipes/recipes.component";
import { RecipeStartComponent } from ".//components/recipes/recipe-start/recipe-start.component";
import { RecipeEditComponent } from ".//components/recipes/recipe-edit/recipe-edit.component";
import { RecipeListComponent } from ".//components/recipes/recipe-list/recipe-list.component";
import { RecipeDetailComponent } from ".//components/recipes/recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from ".//components/recipes/recipe-list/recipe-item/recipe-item.component";
import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";
import { ShoppingEditComponent } from ".//components/shopping-list/shopping-edit/shopping-edit.component";
import { DropdownDirective } from ".//shared/dropdown.directive";
import { ShoppingListService } from "./services/shopping-list.service";
import { RecipeService } from "./services/recipe.service";
import { AppRoutingModule } from ".//app-routing.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthComponent } from "./Authentication/auth.component";
import { LoadingSpinnerComponent } from "./shared/loading-spinner/loading-spinner.component";
import { AuthIntService } from "./Authentication/auth-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    ShoppingListComponent,
    AuthComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthIntService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
