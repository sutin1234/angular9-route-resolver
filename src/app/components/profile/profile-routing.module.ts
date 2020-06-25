import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { HttpClientModule } from '@angular/common/http';
import { RouteResolverUser } from '../../resolvers/route-resolver-user.service';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    resolve: {
      profileData: RouteResolverUser
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
