import { Injectable } from '@nestjs/common';
import { Pokemon, PokemonClient } from 'pokenode-ts';
import { ManyPokemons } from './dto/pokemon.entity';

@Injectable()
export class PokeApiService {
  pokemonClient = new PokemonClient();
  async getListOfPokemon(): Promise<ManyPokemons> {
    const pokemons = await this.pokemonClient.listPokemons(0, 100);
    return {
      count: pokemons.count,
      items: pokemons.results,
    };
  }

  async getPokemonByName(name: string): Promise<Pokemon | null> {
    try {
      const pokemon = await this.pokemonClient.getPokemonByName(
        name.toLowerCase(),
      );
      return pokemon;
    } catch {
      return null;
    }
  }
}
