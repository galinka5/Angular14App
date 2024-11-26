import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateText } from '../../QCare/Helper';


@Component({
  selector: 'lotSelection-dialog',
  templateUrl: './lotSelection-dialog.component.html',
  styleUrls: ['./lotSelection-dialog.component.css']
})
export class LOTSelctionDialog implements OnInit {

  //TO ADD LOT NUMBER

  public title: string = TranslateText('Lotnumbers') + ' ' + TranslateText('of the');
  public loading: boolean = false;
  public loaded: boolean = true;
  public error: string = '';  // Add error handling

  public LOTNumbers: string[] = [];
  public newLot: string = '';
  public textSave: string = TranslateText('Sauvegarder');
  public textCancel: string = TranslateText('Annuler');

  constructor(
    public dialogRef: MatDialogRef<LOTSelctionDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { LOTNumbers: string[] },
  ) {}

  ngOnInit(): void {

    this.LOTNumbers = this.data.LOTNumbers ?? [];

    if (this.LOTNumbers.length == 0) {
      this.LOTNumbers.push("");
    }

    this.loading = false;
    this.loaded = true;
  }

  addNewLotSlot() {
    this.LOTNumbers.push("");
  }

  changeLOT(index:number,newValue:string) {
    this.LOTNumbers[index] = newValue;
  }

  removeLOT(index: number) {
    this.LOTNumbers.splice(index, 1);
  }

  trackByFn(index: number, item: string) {
    return index; // Or, if items are objects, return item.id or another unique identifier
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  saveLOTNumbers(): void {
    this.dialogRef.close({
      LOTNumbers: this.LOTNumbers.filter(x => x != "")
    });

  }

}
