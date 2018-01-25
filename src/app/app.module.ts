import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PokemomServiceService } from './pokemom-service.service';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [PokemomServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
