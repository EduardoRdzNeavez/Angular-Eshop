import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http/src/static_response';
import { ResponseType } from '@angular/http/src/enums';

@Injectable()
export class PokemomServiceService {

  constructor( private _http: Http) { }

  private _pokeApi = 'http://pokeapi.salestock.net/api/v2/pokemon/';

  getPokemon() {
    return this._http.get(this._pokeApi).map(res => res.json());
  }

getPokemonInfo(pokemonId) {
  return this._http.get(this._pokeApi + 'pokemon/' + pokemonId)
    .map(res => res.json());
}

getPokemonForm(pokemonId) {
  return this._http.get(this._pokeApi + 'pokemon-form/' + pokemonId)
    .map(res => res.json());
}

}
