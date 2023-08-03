import {PokemonListComponent} from "./components/pokemon-list/pokemon-list.component";
import {Route} from "@angular/router";

export const routes: Route[] = [
  {
    path: `pokemon-list`,
    component: PokemonListComponent
  },
  {
    path: `my-pokemon`,
    component: PokemonListComponent
  },
  {
    path: ``,
    redirectTo: `/pokemon-list`,
    pathMatch: `full`,
  }
];
