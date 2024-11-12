import { Component, OnInit, ViewChild } from '@angular/core';
import { ModuleNavigationComponent } from './module-navigation/module-navigation.component';
import { DrugExecutionDialogComponent } from './dialogs/drug-execution-dialog/drug-execution-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular14App';

  mode: number = 0;

  @ViewChild(ModuleNavigationComponent) nav?: ModuleNavigationComponent;

  constructor(public dialog: MatDialog){}

  ngOnInit() {
    document.addEventListener('click', (event) => {
      if (this.nav) this.nav.expanded = false;
    })
  }

  setMode(index: number) {
    this.mode = index;
    if (this.nav) this.nav.menuMode = index;
  }

  test(){
    const dialogRef = this.dialog.open(DrugExecutionDialogComponent, {});
    dialogRef.afterClosed().subscribe();
  }
}
