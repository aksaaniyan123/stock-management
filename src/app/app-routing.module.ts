import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';
import { ViewitemsComponent } from './viewitems/viewitems.component';

const routes: Routes = [
  {
    path:'home' , component:HomeComponent
  },
  {
    path:'login' , component:LoginComponent
  },
  {
  path:'items' , component: ItemsComponent
},
{
  path:'view/:id' , component: ViewitemsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
