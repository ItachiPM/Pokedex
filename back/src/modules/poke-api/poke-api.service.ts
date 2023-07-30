import { Injectable } from '@nestjs/common';
import { PokemonClient } from 'pokenode-ts';

@Injectable()
export class PokeApiService {
  pokemonClient = new PokemonClient();
  async getListOfPokemon() {
    return await this.pokemonClient.listPokemons(0, 100);
  }
}
