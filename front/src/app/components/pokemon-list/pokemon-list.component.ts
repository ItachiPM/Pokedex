import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ManyPokemons, Pokemon} from "../interfaces/pokemon.interface";



@Component({
  selector: `app-pokemon-list`,
  templateUrl: `./pokemon-list.component.html`,
  styleUrls: [`./pokemon-list.component.css`]
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[] = [];
  loading: boolean = false;
  totalPokemons: number = 0;

  constructor(private readonly http: HttpClient) {
  }

  async ngOnInit() {
    await this.getPokemonList()
  }

  getPokemonList() {
    this.loading = true
    this.http.get<ManyPokemons>(`http://localhost:3000/poke-api/pokemon-list`).subscribe(
      (response) => {
        this.pokemons = response.items;
        this.totalPokemons = response.count
      },
      () => {
          console.error(`can't load pokemon list`)
      },
      () => {
        this.loading = false;
      }
    )
  }

}

