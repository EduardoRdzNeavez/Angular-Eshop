import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/rx';
import { PokemomServiceService } from './pokemom-service.service';
import { NgModel } from '@angular/forms';
import { map } from 'rxjs/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  pokeId: number;
  constructor() {
    const pokeid = 1;
  }

  public pokemon = { name: null, imagen: null };


  ngOnInit() {

  }
}

