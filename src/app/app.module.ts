import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppareilService } from './services/appareil.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AppareilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
