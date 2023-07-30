import { Controller, Get } from '@nestjs/common';
import { PokeApiService } from './poke-api.service';

@Controller('poke-api')
export class PokeApiController {
  constructor(private readonly pokeApiService: PokeApiService) {}
  @Get(`/pokemon-list`)
  async getPokemonList() {
    return await this.pokeApiService.getListOfPokemon();
  }
}
