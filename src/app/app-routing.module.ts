import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component'
import { DetailsComponent } from './details/details.component';
import { FavoritesComponent } from './favorites/favorites.component';
const routes: Routes = [
  {
    path: '',
    component: MoviesComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
