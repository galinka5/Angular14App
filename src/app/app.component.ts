import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { ModuleNavigationComponent } from './module-navigation/module-navigation.component';
import { MatDialog } from '@angular/material/dialog';
import { PrescriptionDialog } from './dialogs/prescription-dialog/prescription-dialog.component';
import { DrugExecutionDialog } from './dialogs/drugExecution-dialog/drugExecution-dialog.component';
import { DrugSearchDialog } from './drugSearch-dialog/drugSearch-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mode: number = 0;

  readonly dialog = inject(MatDialog);

  @ViewChild(ModuleNavigationComponent) nav?: ModuleNavigationComponent;

  constructor(){}

  ngOnInit() {
    document.addEventListener('click', (event) => {
      if (this.nav) this.nav.expanded = false;
    })
  }

  setMode(index: number) {
    this.mode = index;
    if (this.nav) this.nav.menuMode = index;
  }

  openPrescriptionDialog(){
    const dialogRef = this.dialog.open(PrescriptionDialog, {width:'50%'});
    dialogRef.afterClosed().subscribe();
  }

  openDrugExecutionDialog(){
    const dialogRef = this.dialog.open(DrugExecutionDialog, {width:'50%'});
    dialogRef.afterClosed().subscribe();
  }

  openDrugSearchDialog(){
    const dialogRef = this.dialog.open(DrugSearchDialog, {    width: 'calc(100% - 30px)', height: 'calc(100% - 30px)', maxWidth:"100%", data:{
      componentSelection:true,
      returnKeys:true
    }});
    dialogRef.afterClosed().subscribe();
  }
}
