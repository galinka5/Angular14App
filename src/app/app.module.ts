import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModuleNavigationComponent } from './module-navigation/module-navigation.component';
import { DrugExecutionDialogComponent } from './dialogs/drug-execution-dialog/drug-execution-dialog.component';
import { ValidationBlockComponent } from './dialogs/validation-block/validation-block.component';
import { MatDialogModule } from '@angular/material/dialog'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from '@angular/common';
import { PrescriptionDialogComponent } from './dialogs/prescription-dialog/prescription-dialog.component';
import { InteractionCheckComponent } from './dialogs/interaction-check/interaction-check.component';
import { TimeSelectionDialog } from './dialogs/timeSelection-dialog/timeSelection-dialog.component';


@NgModule({
  declarations: [
    AppComponent, ModuleNavigationComponent, DrugExecutionDialogComponent, ValidationBlockComponent, PrescriptionDialogComponent, InteractionCheckComponent, TimeSelectionDialog
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
