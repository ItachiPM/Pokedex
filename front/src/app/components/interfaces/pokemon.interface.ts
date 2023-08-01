export interface Pokemon {
  name: string;
  url: string;
}

export interface ManyPokemons {
  count: number;
  items: Pokemon[]
}
