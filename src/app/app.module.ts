import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModuleNavigationComponent } from './module-navigation/module-navigation.component';
import { DrugExecutionDialogComponent } from './dialogs/drug-execution-dialog/drug-execution-dialog.component';
import { ValidationBlockComponent } from './dialogs/validation-block/validation-block.component';
import { MatDialogModule } from '@angular/material/dialog'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent, ModuleNavigationComponent, DrugExecutionDialogComponent, ValidationBlockComponent
  ],
  imports: [
    BrowserModule, MatDialogModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
