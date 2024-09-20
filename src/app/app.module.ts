import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModuleNavigationComponent } from './module-navigation/module-navigation.component';

@NgModule({
  declarations: [
    AppComponent, ModuleNavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
