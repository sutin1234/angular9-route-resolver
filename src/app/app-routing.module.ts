import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: 'homepage', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'profile', loadChildren: () => import('./components/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'settings', loadChildren: () => import('./components/settings/settings.module').then(m => m.SettingsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true}) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
