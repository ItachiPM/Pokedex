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
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    TopBarComponent,
    PokemonItemComponent,
    PokemonTypeComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
