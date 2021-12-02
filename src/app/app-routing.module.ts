import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServererrorComponent } from './core/servererror/servererror.component';
import { PeopleComponent } from './people/people.component';

const routes: Routes = [
  { path: '', redirectTo: '/people', pathMatch: 'full' },
  {path: 'server-error', component: ServererrorComponent},
  {path: 'people', component: PeopleComponent},
  {path: '**', redirectTo: '/people', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
