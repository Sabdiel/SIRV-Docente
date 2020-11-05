import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch: 'full',
  },
  { 
    path: 'home', 
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
  }, 
  { path: 'login', 
  loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule)
  },
  { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule)
 },
  { path: 'primera', loadChildren: () => import('./interfases/primera/primera.module').then(m => m.PrimeraModule) },
  { path: 'login2', loadChildren: () => import('./auth/login2/login2.module').then(m => m.Login2Module) },
  { path: 'segundo', loadChildren: () => import('./interfases/segundo/segundo.module').then(m => m.SegundoModule) },
  { path: 'grupo', loadChildren: () => import('./interfases/grupo/grupo.module').then(m => m.GrupoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
