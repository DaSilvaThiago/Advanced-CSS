import { Component } from '@angular/core';
import { Pokemon } from "src/modules/pokemon";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'startInAngular';
  message = "Hello World! this is my first project";
  pokemons: Pokemon[] = [
    new Pokemon(1, "Pikachu", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png", "is a thunder type animal"),
    new Pokemon(2, "Charmander", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png", "is a fire type animal"),
    new Pokemon(2, "Bulbasaur", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png", "is a nature type animal")
  ];
  selectedPokemon?: Pokemon;
  
  showDetails(pokemon: Pokemon){
    this.selectedPokemon = pokemon;
  }
  closeModal(){
    this.selectedPokemon = undefined;
  }
}
