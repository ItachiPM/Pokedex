import { Controller, Get } from '@nestjs/common';
import { PokeApiService } from './poke-api.service';
import { ManyPokemons } from './dto/pokemon.entity';

@Controller('poke-api')
export class PokeApiController {
  constructor(private readonly pokeApiService: PokeApiService) {}
  @Get(`/pokemon-list`)
  async getPokemonList(): Promise<ManyPokemons> {
    return await this.pokeApiService.getListOfPokemon();
  }
}
