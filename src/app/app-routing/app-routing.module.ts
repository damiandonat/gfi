import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from 'src/app/modules/films/list/films.component';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { DetailsComponent } from 'src/app/modules/films/details/details.component';
import { FavoritesComponent } from 'src/app/modules/films/favorites/favorites.component';
import { AuthService as AuthGuard } from 'src/app/services/auth/auth.service';

const routes: Routes = [
  {
    path: '',
    component: FilmsComponent,
    canActivate: [AuthGuard]
  },
  {
      path: 'films',
      component: FilmsComponent,
      canActivate: [AuthGuard]
  },
  {
    path: 'films/detail',
    component: DetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'films/favorites',
    component: FavoritesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
