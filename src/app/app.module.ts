import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { Angular4StartUpComponent } from './angular4-start-up/angular4-start-up.component';
import { AngularBootstrapComponent } from './angular-bootstrap/angular-bootstrap.component';

import { CustomerService } from './customer-detail/customer.service';
import { OrderbyPipe } from './orderby.pipe';
import { NewCustomerComponent } from './new-customer/new-customer.component';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PageNotFoundComponent,
    DashboardComponent,
    CustomerDetailComponent,
    ProfileComponent,
    Angular4StartUpComponent,
    AngularBootstrapComponent,
    OrderbyPipe,
    NewCustomerComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
    })
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);