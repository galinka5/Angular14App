import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { ModuleNavigationComponent } from './module-navigation/module-navigation.component';
import { DrugExecutionDialogComponent } from './dialogs/drug-execution-dialog/drug-execution-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { PrescriptionDialogComponent } from './dialogs/prescription-dialog/prescription-dialog.component';
import { TimeSelectionDialog } from './dialogs/timeSelection-dialog/timeSelection-dialog.component';

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
    const dialogRef = this.dialog.open(PrescriptionDialogComponent, {width:'50%'});
    //const dialogRef = this.dialog.open(TimeSelectionDialog, {width:'50%', data:{onlyDaily:false}});
    dialogRef.afterClosed().subscribe();
  }
}
