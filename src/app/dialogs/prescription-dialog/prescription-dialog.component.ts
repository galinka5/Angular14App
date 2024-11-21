import { Component, inject } from '@angular/core';
import { TimeSelectionDialog } from '../timeSelection-dialog/timeSelection-dialog.component';
import { MatDialog } from '@angular/material/dialog';

export class Prescription {
  FromDateAsLocalTime: any = '2024-11-19T12:00:00.00Z';
  TillDateAsLocalTime: any;
  TillEndOfAdmission: any;
  DistributionType: any;
  DistributionAsText: any;
  DistributionNumericParameter1: number = 1;
  DistributionStringParameter1: any;
  DistributionNumericParameter2: number = 1;
  DistributionStringParameter2: any;
  NumericParameter3: number = 1;
  NumericParameter4: number = 1;
  DistributionNumericParameter5: number = 1;
  DistributionNumericParameter6: number = 1;
  DistributionNumericParameter7: number = 1;
  DistributionNumericParameter8: number = 1;
  DistributionNumericParameter9: number = 1;
  DistributionNumericParameter10: number = 1;

  Components: {
    Drug: number;
    Label: string;
    DosageType: any;
    UnitList: any;
    Dosage: any;
    DosageUnit: any;
    DosageRelativity: any;
    DosageQS: any;
  }[] = [];
  FlexDosages: any;

  FlowRateString: any;
  AdministrationWay: any;

  IntermittentSubType = 402; //402 403

  AllowedAdministrationWays: any;

  DefinedTimes: any;
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
  componentsLinked: boolean = true;

  allowedAdministrationWaysLength = 0;
  allAdministrationWays: any;
  prescKey: any;

  title = 'GLUCOSE 5% 1000ML *';
  textInterAction = 'Interaction médicamenteuse trouvée!';
  textStartDate = 'Date de démarrage:';
  textEndDate = 'Date de fin:';
  textOr = 'ou';
  textMinutes = 'minute(s)';
  textHours = 'heure(s)';
  textDays = 'jour(s)';
  textWeeks = 'semaine(s)';
  textTillEndOfAdmission = `jusqu'à la fin de l'admission`;
  textDistribution = 'Distribution';
  textDuring = 'textDuring';
  textWithARateOf = 'Avec un débit de';
  textTotalDosage = 'CHLORURE DE SODIUM MACOPHARMA 0,9 % sol p perf';
  textInAPeriodOf = 'pour une période de';
  textSingleDose = 'Dose unique';
  textTimesPer24H = 'fois par 24h';
  textEvery = 'chaque';
  textPredefined = 'Prédéfini';
  textToBeDefined = 'Définir';
  textFlexibleDosage = 'textFlexibleDosage';
  textQuodSatis = 'Quod satis';
  textComponents = 'Composants';
  textUnLinkComponents = 'textUnLinkComponents';
  textLinkComponents = 'textLinkComponents';
  textQSDosage = 'textQSDosage';
  remark = 'Remarque';
  textComment = 'textComment';
  error = 'error';
  textAddComponent = 'Ajouter un composant';
  textSave = 'Sauvegarder';
  textCancel = 'Annuler';

  endTimeNumberValue = 0;
  endTimeUnit = 1;
  mainCompUnitList = [];
  noWeight: boolean = false;
  presc!: Prescription;
  distributionTimes = { 1: 'hour', 2: 'minut' };

  readonly dialog = inject(MatDialog);

  constructor() {
    this.presc = {
      FromDateAsLocalTime: '2024-11-19T12:00:00.00Z',
      TillDateAsLocalTime: '2024-12-19T16:00:00.00Z',
      TillEndOfAdmission: 0,
      DistributionType: 7,
      DistributionAsText: 'asdasd',
      DistributionNumericParameter1: 1,
      DistributionStringParameter1: 1,
      DistributionNumericParameter2: 1,
      DistributionStringParameter2: 1,
      NumericParameter3: 1,
      NumericParameter4: 1,
      DistributionNumericParameter5: 1,
      DistributionNumericParameter6: 1,
      DistributionNumericParameter7: 1,
      DistributionNumericParameter8: 1,
      DistributionNumericParameter9: 1,
      DistributionNumericParameter10: 1,

      Components: [{
        Drug: 1,
        Label: "Label",
        DosageType: 1,
        UnitList: [],
        Dosage: "Dosage",
        DosageUnit: "DosageUnit",
        DosageRelativity: 1,
        DosageQS: "DosageQS",
      },{
        Drug: 2,
        Label: "Label2 Label2 Label2Label2Label2Label2Label2 Label2",
        DosageType: 1,
        UnitList: [],
        Dosage: "Dosage2",
        DosageUnit: "DosageUnit2",
        DosageRelativity: 2,
        DosageQS: "DosageQS2",
      }],
      FlexDosages: 1,

      FlowRateString: "FlowRateString",
      AdministrationWay: 1,

      IntermittentSubType: 406, //401 402 403 404 405

      AllowedAdministrationWays: 1,

      DefinedTimes: {"-1":12},
    };
  }

  saveStartTime(value: any) {
    //const value = event.target.value;
  }

  setEndTimeValue(value: any) {
    //const value = event.target.value;
  }

  setEndTimeUnit(value: any) {
    //const value = event.target.value;
  }

  saveEndTime(value: any) {
    //const value = event.target.value;
  }

  setEndOfAdmission() {}

  openDistributionChange() {}

  setNumericParameter(num: number, value: any) {
    //const value = event.target.value;
  }

  setStringParameter(num: number, text: string) {
    //const value = event.target.options[event.target.selectedIndex].text;
  }

  getUnitValue(val: any) {
    return 0;
  }

  editSelectedTimes() {
    const dialogRef = this.dialog.open(TimeSelectionDialog, {width:'50%', data:{onlyDaily:false}});
    dialogRef.afterClosed().subscribe();
  }

  getDistributionTimes(event: any) {
    return '';
  }

  setFlexDosage(time: any, component: any, event: any) {}

  translateSelectedTimes(param: any) {return 'translateSelectedTimes'}

  changeComponentLinked() {}

  changeDosageType(component: any) {}

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

  setAdministrationWay(event: any) {
    const value = event.target.options[event.target.selectedIndex].text;
  }

  removeComp(component: any) {}

  setRemark($event: any) {}

  addComponent() {}

  save() {}

  validToSave() {
    return true;
  }

  closeDialog() {}
}
