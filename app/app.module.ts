import { NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {RouterModule } from '@angular/router';

import { AppComponent }   from './app.component';
import { HomeComponent }   from './home.component';
import { routing }   from './app.routes';

@NgModule({
    imports: [BrowserModule, RouterModule, routing],
    exports: [],
    declarations: [AppComponent, HomeComponent],
    bootstrap: [AppComponent],
    providers: [],
})
export class AppModule { }
