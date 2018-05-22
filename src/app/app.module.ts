import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PokemomServiceService } from './pokemom-service.service';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { patch } from 'webdriver-js-extender';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
     HttpModule,
      FormsModule,
      RouterModule.forRoot([
        { path: '', component: AppComponent },
        { path: 'pokemonList', component: PokemonListComponent },
        { path: 'search', component: SearchComponent },
     //   { path: '/', redirectTo: 'search', pathMatch: 'full' }

    ])
  ],
  providers: [PokemomServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
