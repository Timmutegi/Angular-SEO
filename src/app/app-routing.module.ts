import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogpostsComponent } from './components/blogposts/blogposts.component';
import { BlogpostdetailsComponent } from './components/blogpostdetails/blogpostdetails.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'articles', component: BlogpostsComponent },
  { path: 'articles/:title', component: BlogpostdetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
