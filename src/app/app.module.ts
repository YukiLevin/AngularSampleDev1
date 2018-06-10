import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MY_ROUTES } from './app.routing';
import { SearchRoutingModule } from './search/search-routing.module';

import { AppComponent } from './app.component';
import { InsertComponent } from './insert/insert.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    BrowserModule,
    MY_ROUTES,
    HttpModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    InsertComponent,
    MainComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
