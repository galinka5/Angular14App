import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModuleNavigationComponent } from './module-navigation/module-navigation.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { ProtocolsComponent } from './protocols/protocols.component';

@NgModule({
  declarations: [
    AppComponent, ModuleNavigationComponent, ProtocolsComponent,
  ],
  imports: [
    BrowserModule, MatTreeModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
