import { Component } from '@angular/core';

export class Prescription {
  FromDateAsLocalTime: any = '2024-11-19T12:00:00.00Z';
  TillDateAsLocalTime: any;
  TillEndOfAdmission: any;
  DistributionType: any;
  DistributionAsText: any;
  DistributionNumericParameter1: number = 1;
  DistributionStringParameter1 :any;
  DistributionNumericParameter2: number = 1;
  DistributionStringParameter2 :any;
  NumericParameter3: number = 1;
  NumericParameter4: number = 1;
  DistributionNumericParameter5: number = 1;
  DistributionNumericParameter6: number = 1;
  DistributionNumericParameter7: number = 1;
  DistributionNumericParameter8: number = 1;
  DistributionNumericParameter9:number = 1;
  DistributionNumericParameter10 :number = 1;

  Components: { Drug: number; Label: string, DosageType:any, UnitList:any,Dosage:any,DosageUnit:any, DosageRelativity:any, DosageQS:any }[] = [];
  FlexDosages: any;

  FlowRateString :any;
  AdministrationWay:any;

  IntermittentSubType = 401; //402 403

  AllowedAdministrationWays:any;

  DefinedTimes:any;

}



@Component({
  selector: 'prescription-dialog',
  templateUrl: './prescription-dialog.component.html',
  styleUrl: './prescription-dialog.component.css',
})
export class PrescriptionDialogComponent {
  loading = false;
  loaded = true;
  hasInterAction = true;
  allowFlowRange = true;
  needValidation = true;

  prescMode = 1;
  componentsLinked:boolean = true;

  allowedAdministrationWaysLength = 1;
  allAdministrationWays:any;
  prescKey :any;


  title = 'title';
  textInterAction = 'textInterAction';
  textStartDate = 'textStartDate';
  textEndDate = 'textEndDate';
  textOr = 'textOr';

  endTimeNumberValue = 0;

  endTimeUnit = 1;

  textMinutes = 'textMinutes';
  textHours = 'textHours';
  textDays = 'textDays';
  textWeeks = 'textWeeks';

  textTillEndOfAdmission = 'textTillEndOfAdmission';
  textDistribution = 'textDistribution';
  textDuring = 'textDuring';

  textWithARateOf = 'textWithARateOf';

  mainCompUnitList = [];

  textTotalDosage = 'textTotalDosage';

  noWeight: boolean = true;

  textInAPeriodOf = 'textInAPeriodOf';
  textSingleDose = "textSingleDose";
  textTimesPer24H = "textTimesPer24H";
  textEvery = "textEvery";
  textPredefined = "textPredefined";
  textToBeDefined = "textToBeDefined";
  textFlexibleDosage = "textFlexibleDosage";
  textQuodSatis = "textQuodSatis";
  textComponents = "textComponents";

  textUnLinkComponents = "textUnLinkComponents";
  textLinkComponents = "textLinkComponents";
  textQSDosage = "textQSDosage";

  remark = "remark";
  textComment = "textComment";



  presc!: Prescription;

  distributionTimes = {1:'hour', 2:'minut'}

  constructor() {
this.presc = {
  FromDateAsLocalTime: '2024-11-19T12:00:00.00Z',
  TillDateAsLocalTime: '2024-12-19T16:00:00.00Z',
  TillEndOfAdmission:0,
  DistributionType:1,
  DistributionAsText: 'asdasd',
  DistributionNumericParameter1: 1,
  DistributionStringParameter1 :1,
  DistributionNumericParameter2: 1,
  DistributionStringParameter2 :1,
  NumericParameter3:1,
  NumericParameter4: 1,
  DistributionNumericParameter5:1,
  DistributionNumericParameter6: 1,
  DistributionNumericParameter7: 1,
  DistributionNumericParameter8: 1,
  DistributionNumericParameter9:1,
  DistributionNumericParameter10 :1,

  Components: [],
  FlexDosages: 1,

  FlowRateString :1,
  AdministrationWay:1,

  IntermittentSubType : 401,//402 403

  AllowedAdministrationWays:1,

  DefinedTimes:1,

}

  }

  saveStartTime(event: any) {
    const value = event.target.value;
  }

  setEndTimeValue(event: any) {
    const value = event.target.value;
  }

  setEndTimeUnit(event: any) {
    const value = event.target.value;
  }

  saveEndTime(event: any) {
    const value = event.target.value;
  }

  setEndOfAdmission() {}

  openDistributionChange() {}

  setNumericParameter(num: number, event: any) {
    const value = event.target.value;
  }

  setStringParameter(num: number, text: string) {
    //const value = event.target.options[event.target.selectedIndex].text;
  }

  getUnitValue(val: any) {
    return 0;
  }

  editSelectedTimes(){}

  getDistributionTimes(event:any){return ""}

  setFlexDosage(time:any, component:any, event:any){}

  translateSelectedTimes(param:any){}

  changeComponentLinked(){}

  changeDosageType(component:any){}

  setCompDosageUnit(component: any, event: any) {
    const value = event.target.value;
  }

  setCompDosage(component: any, event: any) {
    const value = event.target.value;
  }

  setCompDosageRelativity(component: any, event: any) {
    const value = event.target.value;
  }

  setCompQSDosage(component: any, event: any) {
    const value = event.target.value;
  }

  setAdministrationWay( event: any) {
    const value = event.target.options[event.target.selectedIndex].text;
  }

  removeComp(component:any){}

  setRemark($event:any){}

  error = "error";
  textAddComponent = "textAddComponent";
  textSave = "textSave";
  textCancel= "textCancel";

  addComponent(){}

  save(){}

  validToSave() {return true}

  closeDialog(){}

}
