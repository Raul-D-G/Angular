import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CompanieModule } from './companie/companie.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CompanieComponent } from './pages/companie/companie.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, CompanieComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    HttpClientModule,
    CompanieModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
