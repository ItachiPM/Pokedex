import { Controller, Get, Param } from '@nestjs/common';
import { PokeApiService } from './poke-api.service';
import { ManyPokemons } from './dto/pokemon.entity';
import { Pokemon } from 'pokenode-ts';

@Controller('poke-api')
export class PokeApiController {
  constructor(private readonly pokeApiService: PokeApiService) {}
  @Get(`/pokemon-list`)
  async getPokemonList(): Promise<ManyPokemons> {
    return await this.pokeApiService.getListOfPokemon();
  }

  @Get(`/pokemon/:name`)
  async getPokemonByName(@Param() params: { name: string }): Promise<Pokemon> {
    return await this.pokeApiService.getPokemonByName(params.name);
  }
}
