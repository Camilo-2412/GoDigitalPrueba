import { MovieDetailsComponent } from './home/movie-details/movie-details.component';
import { MoviesComponent } from './home/movies/movies.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MoviesComponent, pathMatch: 'full' },
  {path: 'movies/:type', component: MoviesComponent},
  {path: 'movieDetails/:id' , component: MovieDetailsComponent},
  {path: 'movies/search/:name' , component: MoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
