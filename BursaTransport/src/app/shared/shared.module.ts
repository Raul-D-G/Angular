import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-alerts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ButtonComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgProgressModule,
    BrowserModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),

    AlertModule.forRoot({ maxMessages: 5, timeout: 3000, positionX: 'right' }),
  ],
  exports: [HeaderComponent, FooterComponent, ButtonComponent],
})
export class SharedModule {}
