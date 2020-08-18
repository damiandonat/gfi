import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from 'src/app/app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/**
 * Modules
 */
import { FilmsComponent } from 'src/app/modules/films/list/films.component';
import { LoginComponent } from './modules/login/login.component';
import { DetailsComponent } from './modules/films/details/details.component';
import { FavoritesComponent } from './modules/films/favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    LoginComponent,
    DetailsComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
