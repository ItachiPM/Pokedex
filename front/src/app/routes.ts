import {PokemonListComponent} from "./components/pokemon-list/pokemon-list.component";
import {Route} from "@angular/router";

export const routes: Route[] = [
  {
    path: ``,
    component: PokemonListComponent
  }
];
