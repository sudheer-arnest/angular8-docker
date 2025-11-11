import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:'todo',loadChildren:()=>import('./todo/todo.module').then(m=>m.TodoModule),canActivate:[AuthGuardService]},
  {path:'posts',loadChildren:()=>import('./posts/posts.module').then(m=>m.PostsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
