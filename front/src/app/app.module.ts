import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import {HttpClientModule} from "@angular/common/http";
import {NgOptimizedImage} from "@angular/common";
import {TopBarComponent} from "./components/top-bar/top-bar.component";
import { PokemonItemComponent } from './components/pokemon-item/pokemon-item.component';
import { PokemonTypeComponent } from './components/pokemon-type/pokemon-type.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ActionReducerMap, StoreModule} from "@ngrx/store";
import {pokemonReducer} from "./store/pokemon/pokemon.reducer";
import {State} from "./store/state.model";

const reducers: ActionReducerMap<State, any> = {
  pokemon: pokemonReducer
}

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    TopBarComponent,
    PokemonItemComponent,
    PokemonTypeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
