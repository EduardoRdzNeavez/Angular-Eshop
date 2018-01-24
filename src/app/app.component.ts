import { Component, OnInit } from '@angular/core';
import {Observable } from 'rxjs/rx';
import { PokemomServiceService } from './pokemom-service.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PokemomServiceService]
})
export class AppComponent implements OnInit {

  pokeId: number;
  constructor(private Pokemomservice: PokemomServiceService) {
    const _pokeid = this.pokeId;
  }

  public pokemon = { nombre: null, imagen: null };
  ngOnInit(): void {
    const pokemoncall = this.Pokemomservice.getPokemonInfo(this.pokeId);
  }
  firstPokemon() {
    const pokemoncall = this.Pokemomservice.getPokemon();
    Observable(pokemoncall)
    .subscribe(results => {}
  }
   buscar(_pokeid) {
     console.log(_pokeid);
    const pokemonInfo = this.Pokemomservice.getPokemonInfo(this.pokeId);
    const pokemonForm = this.Pokemomservice.getPokemonForm(this.pokeId);

     Observable.forkJoin([pokemonInfo, pokemonForm])
     .subscribe(results => {
       console.log(results[0]);
       console.log(results[1]);
       this.pokemon.nombre = results[0].name;
       this.pokemon.imagen = results[1].sprites.front_default;
     });

  }
}

