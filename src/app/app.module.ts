import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModuleNavigationComponent } from './module-navigation/module-navigation.component';
import { DrugExecutionDialog } from './dialogs/drugExecution-dialog/drugExecution-dialog.component';
import { ValidationBlock } from './dialogs/validation-block/validation-block.component';
import { MatDialogModule } from '@angular/material/dialog'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from '@angular/common';
import { PrescriptionDialog } from './dialogs/prescription-dialog/prescription-dialog.component';
import { InteractionCheckComponent } from './dialogs/interaction-check/interaction-check.component';
import { TimeSelectionDialog } from './dialogs/timeSelection-dialog/timeSelection-dialog.component';
import { DistributionChangeDialog } from './dialogs/distributionChange-dialog/distributionChange-dialog.component';
import { ValidationDoctorDialog } from './dialogs/validationDoctor-dialog/validationDoctor-dialog.component';
import { DrugSearchDialog } from './dialogs/drugSearch-dialog/drugSearch-dialog.component';


@NgModule({
  declarations: [
    AppComponent, ModuleNavigationComponent,
    PrescriptionDialog, InteractionCheckComponent, TimeSelectionDialog, DistributionChangeDialog,
    DrugExecutionDialog, ValidationDoctorDialog, ValidationBlock, DrugSearchDialog
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
