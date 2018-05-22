import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import {PokemomServiceService } from '../pokemom-service.service';
import { from } from 'rxjs/observable/from';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  constructor( private httpmodule: HttpModule ) { }

  ngOnInit() {
  }

}
