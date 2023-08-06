import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../interfaces/pokemon.interface";
import {HttpClient} from "@angular/common/http";
import {PokemonApiEntity, PokemonType} from "../interfaces/pokemon-api-entity.interface";

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})
export class PokemonItemComponent implements OnInit{
  @Input() pokemon!: Pokemon;

  imageUrl: string = ``
  types: PokemonType[] = []
  constructor(private readonly http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<PokemonApiEntity>(this.pokemon.url).subscribe(
      (response) => {
        this.imageUrl = response?.sprites?.front_default
        this.types = response?.types
      },
      () => {
        console.error(`can't load pokemon list`)
      },
      () => {
      }
    )
  }
}
