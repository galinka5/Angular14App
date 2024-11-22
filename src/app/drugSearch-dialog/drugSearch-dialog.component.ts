import { ElementRef, ViewChild } from '@angular/core';
import { Component, Inject, OnInit,} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { GetParameter,  TranslateText } from '../QCare/Helper';
import { DrugService } from '../services/drug.service';
import { PrescriptionDialog, prescMode } from '../dialogs/prescription-dialog/prescription-dialog.component';


@Component({
  selector: 'drugSearch-dialog',
  templateUrl: './drugSearch-dialog.component.html',
  styleUrls: ['./drugSearch-dialog.component.css']
})
export class DrugSearchDialog implements OnInit {

  @ViewChild('drugFilter') drugFilterRef?: ElementRef<HTMLInputElement>;

  public title: string = TranslateText('Search medicine');
  public loading: boolean = true;
  public loaded: boolean = false;
  public error: string = '';  // Add error handling

  public componentSelection: boolean = false;
  public returnKeys: boolean = false;

  public keyboardRows:any;

  public drugList: any = [];
  public selectedList: any[] = [];
  public filterContent: string = '';

  public filterByDefaultPresc: boolean = false;
  public filterByFormularium: boolean = ['J', '1', 'Y', 'TRUE'].includes(GetParameter('QCARE', 'PHARMACY', 'ONLYFORMEQUIV'));
  public HideKeyboard: boolean = ['J', '1', 'Y', 'TRUE'].includes(GetParameter('INTENSIVEPLUS', 'DRUGSEARCH', 'HIDEKEYBOARD') ?? ''.toUpperCase());
  public prescribeSubstance: boolean = ['J', '1', 'Y', 'TRUE'].includes(GetParameter('QCARE.NET', 'SUBSTANCEPRESCRIPTION', 'DRUGASSUBSTANCEBYDEFAULT'));

  public textPlaceHolder: string = TranslateText('Search medicine');
  public textName: string = TranslateText('Nom');
  public textType: string = TranslateText('type de produit');
  public textDefaultDef: string = TranslateText('Prescription Defaults');
  public textProfile: string = TranslateText('Profile');
  public textSubstance: string = TranslateText('Substance');
  public textDrug: string = TranslateText('Drug');
  public textSelectedDrugs: string = TranslateText('Select Drug');
  public textSave: string = TranslateText('Save');
  public textFilterDefaultPrescription: string = TranslateText('Filter by defaultprescription');
  public textFilterFormularium: string = TranslateText('Formularium product');
  public textAsSubstance: string = TranslateText('As Substance');
  public textCancel: string = TranslateText('Annuler');

  private fullDrugList: any[] = [];


  constructor(
    public dialogRef: MatDialogRef<DrugSearchDialog>,
    private drugService: DrugService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: { componentSelection: boolean, returnKeys: boolean},
  ) { }



  ngOnInit(): void {


    switch ((window as any)['HotscreenUserLanguage']) {
      case 2: //french
      case 20: //swiss french
        this.keyboardRows = [
          ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
          ['A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
          ['Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M'],
          ['W', 'X', 'C', 'V', 'B', 'N']
        ]
        break;
      case 6: //german
      case 19: //swiss german
        this.keyboardRows = [
          ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
          ['Q', 'W', 'E', 'R', 'T', 'Z', 'U', 'I', 'O', 'P'],
          ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
          ['Y', 'X', 'C', 'V', 'B', 'N', 'M', 'Ö', 'Ä', 'Ü']
        ];
        break;
      default: //english
        this.keyboardRows = [
          ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
          ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
          ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
          ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],

        ]
        break;
    }

    this.componentSelection = this.data.componentSelection ?? false;
    this.returnKeys = this.data.returnKeys ?? false;

    if (this.data.componentSelection) {
      this.drugService.getSpecificDrugsAsComponents().then((response) => {
        this.fullDrugList = response;
        this.fullDrugList.forEach(x => {
          if (!x.IsProfile && this.prescribeSubstance && x.SubstanceList.length > 0) {
            x.AsSubstance = true
          }
          else {
            x.AsSubstance = false;
          }
        });
        this.drugList = this.fullDrugList.filter(drug => drug.IsFormularium);
        this.filterContent = '';
        this.selectedList = [];
        this.loading = false;
        this.loaded = true;
      })
    }
    else {
      this.drugService.getSpecificDrugs((window as any)['HotscreenPatientAge'], (window as any)['HotscreenPatientSex']).then((response:any) => {
        this.fullDrugList = response;
        this.fullDrugList.forEach(x => {
          if (!x.IsProfile && this.prescribeSubstance && x.SubstanceList.length > 0) {
            x.AsSubstance = true
          }
          else {
            x.AsSubstance = false;
          }
        });
        this.drugList = this.fullDrugList.filter(drug => drug.IsFormularium);
        this.filterContent = '';
        this.selectedList = [];
        this.loading = false;
        this.loaded = true;
      })
    }
  }

  changeDrugList() {
    if (this.filterByFormularium == false && (!this.filterContent || this.filterContent.length <= 2)) {
      this.drugList = [];
    }
    else {
      this.drugList = this.fullDrugList
        .filter(drug => !this.filterContent || (this.filterContent && drug.Name.toUpperCase().includes(this.filterContent.toUpperCase())) || (this.filterContent && drug.SubstanceList.join('|').toUpperCase().includes(this.filterContent.toUpperCase())))
        .filter(drug => !this.filterByFormularium || this.filterByFormularium && drug.IsFormularium)
        .filter(drug => !this.filterByDefaultPresc || this.filterByDefaultPresc && drug.DefaultPrescriptions.length > 0)
    }

  }

  addToSelector(key: string) {

    this.filterContent += key;
    this.drugFilterRef?.nativeElement.focus();
    this.changeDrugList()
  }

  removeFromSelector() {
    this.filterContent = this.filterContent.slice(0, -1);
    this.drugFilterRef?.nativeElement.focus();
    this.changeDrugList()
  }

  filterSelection(newContent: string) {
    this.filterContent = newContent;
    this.changeDrugList()

  }

  isButtonVisible(buttonText: string): boolean {

    const searchQuery = `${this.filterContent}${buttonText}`.toUpperCase();

    return this.drugList.some((drug:any) => drug.Name.toUpperCase().includes(searchQuery) || drug.SubstanceList.join('|').toUpperCase().includes(searchQuery));
  }

  add_Drug(drug: any) {

    this.selectedList.push(drug);

  }

  remove_Drug(drug: any) {

    const index = this.selectedList.indexOf(drug);
    if (index !== -1) {
      this.selectedList.splice(index, 1);
    }

  }

  filterDefaultPrescription() {
    this.filterByDefaultPresc = !this.filterByDefaultPresc;
    this.changeDrugList()
  }

  filterFormularium() {
    this.filterByFormularium = !this.filterByFormularium;
    this.changeDrugList()
  }

  changeSubstanceToName(drug: any) {
    drug.AsSubstance = !drug.AsSubstance
  }

  async save() {
    if (this.returnKeys) {
      this.dialogRef.close({
        drugList: this.selectedList
      });
    }
    else {
      this.dialogRef.close()
      for (const drug of this.selectedList) {
        await this.dialog.open(PrescriptionDialog, {
          width: "50%",
          disableClose: true,
          data: {
            key: Number(drug.Key),
            patientKey: (window as any)["HotscreenPatient"],
            prescMode: drug.IsProfile ? prescMode.Profile : prescMode.Drug,
            prescribeAsSubstance: drug.AsSubstance,
            substanceName: drug.AsSubstance? drug.SubstanceList.join(' + ') : "",
            reload: false
          }
        }).afterClosed().toPromise();
      }
      window.location.reload();
    }
  }


  closeDialog(): void {
    this.dialogRef.close();
  }

}
