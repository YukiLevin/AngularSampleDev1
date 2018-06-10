import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { InsertComponent } from './insert/insert.component';

const myRoutes = [
    { path: 'insert', component: InsertComponent },
    { path: 'search', loadChildren: './search/search.module#SearchModule' },
    { path: '', component: MainComponent },
];

export const MY_ROUTES: ModuleWithProviders =
    RouterModule.forRoot(myRoutes);
