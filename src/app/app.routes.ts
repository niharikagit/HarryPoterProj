import { Routes } from '@angular/router';
import { MovieListComponent } from './movie-listings/movie-list.component'
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path:'',component:MovieListComponent, pathMatch: "full"},
    {path:"movie-listings", component: MovieListComponent},
    {path:"movie-details/:id", component: MovieDetailsComponent},
    {path:"**", component: NotFoundComponent}
];
