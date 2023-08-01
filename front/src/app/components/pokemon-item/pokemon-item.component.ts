import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../interfaces/pokemon.interface";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})
export class PokemonItemComponent implements OnInit{
  @Input() pokemon!: Pokemon;

  imageUrl: string = ``
  type: string = ``
  constructor(private readonly http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<{sprites: {front_default: string}}>(this.pokemon.url).subscribe(
      (response) => {
        this.imageUrl = response?.sprites?.front_default
      },
      () => {
        console.error(`can't load pokemon list`)
      },
      () => {
      }
    )
  }
}
