import { NotFoundComponent } from './not-found/not-found.component';
import { ShowAllComponent } from './show/show-all/show-all.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundGuard } from './not-found.guard';

const routes: Routes = [
  {
    path:'search/:name/:type',
    component: ShowAllComponent,
    canActivate: [NotFoundGuard]
  }, 
  {
    path:':type/:id',
    loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
