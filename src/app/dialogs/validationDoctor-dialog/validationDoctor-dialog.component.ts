import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateText } from '../../QCare/Helper';
//import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'validationDoctor-dialog',
  templateUrl: './validationDoctor-dialog.component.html',
  styleUrls: ['./validationDoctor-dialog.component.css']
})
export class ValidationDoctorDialog implements OnInit {
  public title: string = TranslateText('Select doctor');

  public doctorList: { key: number, name: string }[] = [{ key: 1, name: "string" }, { key: 2, name: "asdasdasd asd  kjasbdksjf kjsd fsdf" }];
  private fullDoctorList: { key: number, name: string }[] = [];

  public searchPlaceHolderText: string = "";

  public selectedDoctorKey: number = 0;
  public selectedDoctorName: string = "";

  public textSave: string = TranslateText('Save');
  public textCancel: string = TranslateText('Annuler');
  constructor(
    public dialogRef: MatDialogRef<ValidationDoctorDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { allowWardDoctor: boolean, selectedDoctorKey: number},
  ) { }

  ngOnInit(): void {

    this.selectedDoctorKey = this.data.selectedDoctorKey;
    this.searchPlaceHolderText = TranslateText('Search');

    if (this.data.allowWardDoctor) {
      this.doctorList.push({ key: -1, name: TranslateText('Ward doctor responsible for the shift') })
    }

    /*this.httpService.httpCall('GET', 'api/User/GetAllDoctorsForService').subscribe(
      (response) => {
        response.forEach(doctor => {
          this.doctorList.push({ key: doctor.Key, name: doctor.FirstName + ' ' + doctor.LastName });
          this.fullDoctorList.push({ key: doctor.Key, name: doctor.FirstName + ' ' + doctor.LastName });
        })
      },
      (error) => {
        console.error('API request for GetAllDoctorsForService failed:', error);
      }
    );*/





  }

  filterList(textToFilter: string) {
    this.doctorList = this.fullDoctorList.filter(x => x.name.toUpperCase().includes(textToFilter.toUpperCase()));
  }

  selectElement(element: any) {
    this.selectedDoctorKey = element.key;
    this.selectedDoctorName = element.name;
    this.dialogRef.close({
      doctorKey: this.selectedDoctorKey,
      doctorName: this.selectedDoctorName
    });
  }


  closeDialog(): void {
    this.dialogRef.close();
  }
}
