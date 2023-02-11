import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './pages/account/profile-page/profile-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SideNavPageComponent } from './pages/master/sidenav-frame/sidenav-frame.component';


const routes: Routes = [
  {
    path: '',
    component: SideNavPageComponent,
    children: [{
      path: '', component: HomePageComponent
    }]
    
  }, {
    path: 'profile',
    component: SideNavPageComponent,
    children: [{
      path: '', component: ProfilePageComponent
    }],  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
