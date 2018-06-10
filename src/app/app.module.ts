import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MY_ROUTES } from './app.routing';
import { SearchRoutingModule } from './search/search-routing.module';

import { AppComponent } from './app.component';
import { InsertComponent } from './insert/insert.component';
// import { SearchComponent } from './search/search.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertComponent,
    //  SearchComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    MY_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
