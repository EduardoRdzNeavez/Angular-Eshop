import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import {PokemomServiceService } from '../pokemom-service.service';
import { from } from 'rxjs/observable/from';
import { Observable } from 'rxjs/Observable';
import { Pokemonint } from '../pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  providers: [PokemomServiceService]
})
export class PokemonListComponent implements OnInit {

  allpokemon: any;

  constructor( private httpmodule: HttpModule,
               private Pokemomservice: PokemomServiceService ) {}

  ngOnInit() {
    this.Pokemomservice.getPokemon()
    .subscribe(
      (data: Pokemonint[]) => this.allpokemon = data,
      (err: any) => console.log(err),
      () => console.log('y solo me tarde 3 dias', this.allpokemon),
    );
  }

}
