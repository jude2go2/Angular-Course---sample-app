import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // for components
    AppComponent,
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
