import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {PokemonApiEntity} from "../interfaces/pokemon-api-entity.interface";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  constructor(private readonly http: HttpClient) {}

  pokemon = new FormGroup({
    pokemonName: new FormControl<string | null>(null)
  })
  filterPokemon() {
    const {pokemonName} = this.pokemon.value
    if(!pokemonName || pokemonName === ``) {
      return;
    }
    this.http.get<PokemonApiEntity>(`http://localhost:3000/poke-api/pokemon/${pokemonName}`).subscribe(
      (response) => {
        console.log(response)
        document.getElementById("pokemon-single-view")!.style.visibility = "visible";
      },
      () => {
        console.error(`can't load pokemon`)
      }
    )
  }

}
