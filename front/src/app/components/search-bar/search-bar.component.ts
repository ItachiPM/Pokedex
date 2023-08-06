import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ManyPokemons} from "../interfaces/pokemon.interface";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  constructor(private readonly http: HttpClient) {
  }

  pokemon = new FormGroup({
    pokemonName: new FormControl<string | null>(null)
  })
  filterPokemon() {
    const {pokemonName} = this.pokemon.value
    if(!pokemonName || pokemonName === ``) {
      console.log(`wychodzę`)
      return;
    }
    this.http.get(`http://localhost:3000/poke-api/pokemon/${pokemonName}`).subscribe(
      (response) => {
        console.log(response)
      },
      () => {
        console.error(`can't load pokemon`)
      }
    )
  }

}
