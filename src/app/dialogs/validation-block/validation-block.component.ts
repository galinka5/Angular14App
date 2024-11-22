import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { GetParameter, TranslateText } from '../../QCare/Helper';
import { from, of } from 'rxjs';
import { ValidationDoctorDialog } from '../validationDoctor-dialog/validationDoctor-dialog.component';
//import { HttpService } from '../../services/http.service';
//import { ValidationDoctorDialog } from './../ValidationDoctorSelect/validationDoctor-dialog.component';

@Component({
  selector: 'validation-block',
  templateUrl: './validation-block.component.html',
  styleUrls: ['./validation-block.component.css']
})
export class ValidationBlock implements OnInit {

  public prescriptionReasons: any[] = [];
  public selectedDoctor: string = "";
  public selectedDoctorKey: number = 0;
  public validationReason: number = 0;
  public validationRemark: string = "";

  public informationText: string = TranslateText('Information about and for prescribing doctor');
  public reasonText: string = TranslateText('Reason for prescription');
  public prescriptionForText: string = TranslateText('Prescription possible par');
  public remarkText: string = TranslateText('Remark for prescribing doctor');

  public showValidation: boolean = true;



  private allowWardDoctor: boolean = true;

  constructor(
   // private httpService: any,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    /*if ((window as any)['HotscreenUserDoctorKey'] != -1) {
      this.showValidation = false;
      return
    }*/

    this.allowWardDoctor = (GetParameter('INTENSIVEPLUS', 'PRESCRIPTION', 'ALLOW_WARD_PHYSICIAN') ?? "1") == "1"

    if (this.allowWardDoctor) {
      this.selectedDoctor = TranslateText('Ward doctor responsible for the shift');
      this.selectedDoctorKey = -1;
    }
    else {
      this.selectedDoctor = TranslateText('Select doctor');
    }

    of([{Key:1, Name1:'sfsdfsdfs'}]).subscribe(
      (response:any) => {
        console.log(response);
        response.forEach((x:any) => {
          let newObject: { key: number, text: string } = { key: x.Key, text: `x["Name" + (window as any)["HotscreenUserLanguageCol"]]` };
          this.prescriptionReasons.push(newObject);
          if (this.prescriptionReasons.length == 1) {
            this.validationReason = newObject.key;
          }
        })
      },
      (error:any) => {
        console.error('API request for GetPrescriptionReasons failed:', error);
      }
    );

    this.prescriptionReasons = [{key:1, text:'short text'}, {key:1, text:'loooooooooooooooooooooooooong very looooooooooong text'}]
    console.log(this.prescriptionReasons);
  }

  openDoctorSelection() {
    const dialogRef = this.dialog.open(ValidationDoctorDialog, {
      width: "50%",
      data: { selectedDoctorKey: this.selectedDoctorKey, allowWardDoctor: this.allowWardDoctor }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.selectedDoctorKey = result.doctorKey;
        this.selectedDoctor = result.doctorName;
      }
    });


  }

  setReason(newValue: string) {
    this.validationReason = parseInt(newValue);
  }

  setRemark(newValue: string) {
    this.validationRemark = newValue;
  }

  getValidationValues(): { ValidationReason?: number, ValidationDoctorKey?: number, ValidationDoctorComment?: string} {
    let validDict: { ValidationReason?: number, ValidationDoctorKey?: number, ValidationDoctorComment?: string } = {};
    validDict.ValidationReason = this.validationReason;
    validDict.ValidationDoctorKey = this.selectedDoctorKey;
    validDict.ValidationDoctorComment = this.validationRemark;

    return validDict;

  }
}
