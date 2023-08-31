import {PokemonApiEntity} from "../../components/interfaces/pokemon-api-entity.interface";
import {PokemonAction, PokemonActionType} from "./pokemon.action";
import {createReducer, on} from "@ngrx/store";

export const initialState: PokemonApiEntity = {
  base_experience: 0,
  height: 0,
  id: 0,
  is_default: false,
  location_area_encounters: "",
  name: "",
  order: 0,
  species: { name: ``, url: ``},
  sprites: {
    front_default: ``,
    front_shiny: ``,
    front_female: ``,
    front_shiny_female: ``,
    back_default: ``,
    back_shiny: ``,
    back_female: ``,
    back_shiny_female: ``,
  },
  types: [],
  weight: 0
}

export function pokemonReducer (
  state: PokemonApiEntity = initialState,
  action: PokemonAction
) {
  switch(action.type) {
    case PokemonActionType.FIND_POKEMON:
      return action.payload
    default:
      return state;
  }
}
