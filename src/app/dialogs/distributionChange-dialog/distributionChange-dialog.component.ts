import { Component, Inject, OnInit,} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { transformDefinedTimesToDict, transformDictToDefinedTimes, TranslateText } from '../../QCare/Helper';


@Component({
  selector: 'distributionChange-dialog',
  templateUrl: './distributionChange-dialog.component.html',
  styleUrls: ['./distributionChange-dialog.component.css']
})
export class DistributionChangeDialog implements OnInit {

  public title: string = '';
  public loading: boolean = true;
  public loaded: boolean = false;
  public error: string = '';  // Add error handling

  public selectedDistributionType: number = 0;
  public selectedIntermittendType: number | null= null;

  public isDrug: boolean = false;
  public hasMl: boolean = false;

  public textSingleDose: string = TranslateText('dose unique');
  public textXPer24H: string = TranslateText('X fois par 24 heures');
  public textWithIntervalsOf: string = TranslateText('À intervalles de');
  public textPredefined: string = TranslateText('Predefined');
  public textToBeDefined: string = TranslateText('Define');
  public textQuodSatis: string = TranslateText('Quod satis distribution');
  public textFlexibleDose: string = TranslateText('Flexible Dosage');
  public textInAPeriodOf: string = TranslateText('Sur une periode de');
  public textWithARateOf: string = TranslateText('Avec un débit de');
  public textAtTime: string = TranslateText('Discrète');
  public textInfusion: string = TranslateText('Continuous drip');
  public textPerfusion: string = TranslateText('Continuous pump');
  public textShortTimeInfusion: string = TranslateText('Intermittent perfusion');
  public textDistribution: string = TranslateText('Distribution');
  public textSave: string = TranslateText('Save');
  public textCancel: string = TranslateText('Annuler');
  constructor(
    public dialogRef: MatDialogRef<DistributionChangeDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { isDrug: boolean, hasMl: boolean, distributionType: number, intermittendType:number },
  ) { }



  ngOnInit(): void {

    this.selectedDistributionType = this.data.distributionType;
    this.selectedIntermittendType = this.data.intermittendType;
    this.isDrug = this.data.isDrug;
    this.hasMl = this.data.hasMl;

  }

  setDistribution(newType: number) {
    this.selectedDistributionType = newType;
    this.selectedIntermittendType = null;
    if (newType < 300) {
      this.save();
    }
  }

  setSubType(newSubType: number) {
    this.selectedIntermittendType = newSubType;
    this.save();
  }

  private save(): void {

    this.dialogRef.close({
      distributionType: this.selectedDistributionType,
      intermittendType: this.selectedIntermittendType
    });

  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
