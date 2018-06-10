import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule
  ],
  declarations: [ SearchComponent ]
})
export class SearchModule {}
