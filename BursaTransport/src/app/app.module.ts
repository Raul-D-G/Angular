import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './pages/home/home.component';
import { CompanieModule } from './companie/companie.module';
import { CompanieComponent } from './pages/companie/companie.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    HttpClientModule,
    CompanieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
