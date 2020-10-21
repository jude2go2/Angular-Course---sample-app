import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { CliMoviesComponent } from './components/cli-movies/cli-movies.component';
import { TemplateSyntaxComponent } from './components/template-syntax/template-syntax.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    // for components
    AppComponent,
    MovieComponent,
    CliMoviesComponent,
    TemplateSyntaxComponent,
  ],
  imports: [
    // for modules
    BrowserModule,
    AppRoutingModule,
    //import the forms module
    FormsModule,
  ],
  providers: [], // for dependency injection
  bootstrap: [AppComponent], // startup
})
export class AppModule {}
