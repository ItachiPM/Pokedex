import {Action} from "@ngrx/store"
import {PokemonApiEntity} from "../../components/interfaces/pokemon-api-entity.interface";
export enum PokemonActionType {
  FIND_POKEMON = '[POKEMON] Find POKEMON'
}

export class FindPokemonAction implements Action {
  readonly type = PokemonActionType.FIND_POKEMON
  constructor(public payload: PokemonApiEntity) {
  }
}

export type PokemonAction = FindPokemonAction
