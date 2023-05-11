import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/main/main.module').then((module) => module.MainModule)
  },
  {
    path: '**',
    redirectTo: '',
  },
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    initialNavigation: !isIframe ? 'enabledNonBlocking': 'disabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
