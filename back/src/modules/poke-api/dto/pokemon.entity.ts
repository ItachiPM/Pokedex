export interface PokemonEntity {
  name: string;
  url: string;
}

export interface ManyPokemons {
  count: number;
  items: PokemonEntity[];
}
