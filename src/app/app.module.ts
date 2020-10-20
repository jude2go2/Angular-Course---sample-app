import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { CliMoviesComponent } from './components/cli-movies/cli-movies.component';

@NgModule({
  declarations: [
    // for components
    AppComponent,
    MovieComponent,
    CliMoviesComponent,
  ],
  imports: [
    // for modules
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [], // for dependency injection
  bootstrap: [AppComponent], // startup
})
export class AppModule {}
