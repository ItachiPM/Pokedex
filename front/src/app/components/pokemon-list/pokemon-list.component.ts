import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ManyPokemons, Pokemon} from "../interfaces/pokemon.interface";
import {PokemonApiEntity} from "../interfaces/pokemon-api-entity.interface";



@Component({
  selector: `app-pokemon-list`,
  templateUrl: `./pokemon-list.component.html`,
  styleUrls: [`./pokemon-list.component.css`]
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[] = [];
  loading: boolean = false;
  totalPokemons: number = 0;
  filterValue: string = ``;

  constructor(private readonly http: HttpClient) {
  }

  ngOnInit() {
    this.getPokemonList()
  }

  filterPokemon() {
    if(!this.filterValue || this.filterValue === ``) {
      this.getPokemonList()
    }
    this.http.get<PokemonApiEntity>(`http://localhost:3000/poke-api/pokemon/${this.filterValue}`).subscribe(
      (response) => {
        if(response) {
          this.pokemons = [{
            name: response.name,
            url: `https://pokeapi.co/api/v2/pokemon/${response.id}/`
          }]
        }
      },
      () => {
        console.error(`can't load pokemon`)
      }
    )
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

