import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { Angular4StartUpComponent } from './angular4-start-up/angular4-start-up.component';
import { AngularBootstrapComponent } from './angular-bootstrap/angular-bootstrap.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/Landing Page',
    pathMatch: 'full'
  },
  {
    path: 'Landing Page',
    component: LandingComponent
  },
  {
    path: 'Dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: CustomerDetailComponent
      },
      {
        path: 'Customer_Detail',
        component: CustomerDetailComponent
      },
      {
        path: 'Profile',
        component: ProfileComponent
      },
      {
        path: 'Angular4StartUp',
        component: Angular4StartUpComponent
      },
      {
        path: 'Bootstrap',
        component: AngularBootstrapComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }