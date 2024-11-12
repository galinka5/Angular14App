import { Component, OnInit } from '@angular/core';

export class DComponent {
  NeedLOT: number = 0;
  DosageRelativity: number = 0;
  DosageQS: any;
  Label: any;
  Dosage: any;
  DosageUnit: any;
  UnitList: { Key: any; Label: string }[] = [];
  LotNumbers:string[] = [];
}

@Component({
  selector: 'app-drug-execution-dialog',
  templateUrl: './drug-execution-dialog.component.html',
  styleUrls: ['./drug-execution-dialog.component.css'],
})
export class DrugExecutionDialogComponent implements OnInit {
  title = 'TITLE';

  loading: boolean = false;
  loaded = true;

  textExecDate = 'textExecDate';

  execDateAsLocalTime = 'execDateAsLocalTime';

  textSetToLastEndDate = 'textSetToLastEndDate';

  lastEndDateAsLocalTime = 'lastEndDateAsLocalTime';

  isInfusion: boolean = false;

  plannedDateAsLocalTime = 'plannedDateAsLocalTime';

  textPlannedDate = 'textPlannedDate';

  textWithARateOf = 'textWithARateOf';

  execParam1: any;
  execParam2: any;
  execParam3: any;
  execParam4: any;
  execParam5: any;
  execParam6: any;
  execParam7: any;

  textTotalDosage = 'textTotalDosage';

  mainCompKey: any;

  mainCompName = 'mainCompName';

  textMinutes = 'textMinutes';
  textHours = 'textHours';
  textDays = 'textDays';
  textWeeks = 'textWeeks';

  flowRateString = 'flowRateString';

  flowUnitList: { Key: any; Label: string }[] = [];

  noWeight = false;

  textComponents = 'textComponents';
  components: DComponent[] = [];

  componentsLinked = true;
  textUnLinkComponents = 'textUnLinkComponents';
  textLinkComponents = 'textLinkComponents';

  textLOTNumber= "textLOTNumber";

  needValidation:boolean = true;

  textCancel= "textCancel";
  textSave = "textSave";

  remark = "remark";
  textComment= "textComment";

  constructor() {}

  ngOnInit(): void {}

  setStartDate(event: any) {
    const lastEndDateAsLocalTime = event.target.value;
  }

  readablePlannedDate() {
    return 'readablePlannedDate';
  }

  setExecParam(n: number, event: any) {
    const value = event.target.value;
  }

  changeComponentLinked() {
    this.componentsLinked = !this.componentsLinked;
  }

  setCompDosage(component: any, event: any) {
    const value = event.target.value;
  }

  setCompDosageUnit(component: any, event: any) {
    const value = event.target.value;
  }

  setCompDosageRelativity(component: any, event: any) {
    const value = event.target.value;
  }

  setLotNumbers(component: any) {}

  setRemark(event:any){
    const value = event.target.value;
  };

  closeDialog(){}

  prescribeDrug(){}

  validToSave(){return true;}
}
