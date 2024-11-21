import { Component, Inject, OnInit,} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { transformDefinedTimesToDict, transformDictToDefinedTimes, TranslateText } from '../../QCare/Helper';


@Component({
  selector: 'timeSelection-dialog',
  templateUrl: './timeSelection-dialog.component.html',
  styleUrls: ['./timeSelection-dialog.component.css']
})
export class TimeSelectionDialog implements OnInit {

  public title: string = '';
  public loading: boolean = true;
  public loaded: boolean = false;
  public error: string = '';  // Add error handling

  public onlyDaily: boolean = true;

  public previousHour: number = 23;
  public hour: number = 0;
  public nextHour: number = 1;
  public previousMinute: number = 59;
  public minute: number = 0;
  public nextMinute: number = 1;



  public selectedTimes: { [key: string]: string[] } = { "-1": [], "0": [], "1": [], "2": [], "3": [], "4": [], "5": [], "6": [], Dates: [] };
  public selectedDays: Set<number> = new Set<number>()
  public specificDate: string = "";

  public textSelectedTimes: string = TranslateText('Selected times');
  public textDaily: string = TranslateText('Every day');
  public textMonday: string = TranslateText('Monday');
  public textTuesday: string = TranslateText('Tuesday');
  public textWednesday: string = TranslateText('Wednesday');
  public textThursday: string = TranslateText('Thursday');
  public textFriday: string = TranslateText('Friday');
  public textSaturday: string = TranslateText('Saturday');
  public textSunday: string = TranslateText('Sunday');
  public textExactDate: string = TranslateText('Exact Date and Time');
  public textSave: string = TranslateText('Save');
  public textCancel: string = TranslateText('Annuler');
  constructor(
    public dialogRef: MatDialogRef<TimeSelectionDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { sParam: string, onlyDaily: boolean },
  ) { }



  ngOnInit(): void {

    this.selectedDays.add(-1)

    this.onlyDaily = this.data.onlyDaily;
    if (this.data.sParam) {
      this.selectedTimes = transformDefinedTimesToDict(this.data.sParam);
      this.selectedDays.clear();

      for (let key in this.selectedTimes) {
        if (this.selectedTimes[key].length > 0) {
          if (key == "-1") {
            this.selectedDays.add(-1);
            break;
          }
          else if (key != "Dates") {
            this.selectedDays.add(Number(key));
          }
        }
      }

      if (this.selectedDays.size >= 7 || this.selectedDays.size == 0) {
        this.selectedDays.clear();
        this.selectedDays.add(-1);
      }


    }

  }

  translateDay(day: string) {

    switch (day) {
      case "-1":
        return this.textDaily;
      case "0":
        return this.textSaturday;
      case "1":
        return this.textSunday;
      case "2":
        return this.textMonday;
      case "3":
        return this.textTuesday;
      case "4":
        return this.textWednesday;
      case "5":
        return this.textThursday;
      case "6":
        return this.textFriday;
      default:
        return this.textExactDate;

    }

  }

  setDateTime(newValue: string) {
    this.specificDate = newValue;
  }

  addDateToSelection() {

    if (!this.specificDate) {
      return;
    }

    let value = new Date(this.specificDate);

    let formattedDateTime =
      ('0' + value.getDate()).slice(-2) + '.' +
      ('0' + (value.getMonth() + 1)).slice(-2) + '.' +
      value.getFullYear() + ' ' +
      ('0' + value.getHours()).slice(-2) + ':' +
      ('0' + value.getMinutes()).slice(-2);

    if (this.selectedTimes["Dates"].includes(formattedDateTime)) {
      return;
    }
    this.selectedTimes["Dates"].push(formattedDateTime);

    this.reorderTimes()
  }

  addSelectedTime() {

    let timeToAdd = String(this.hour).padStart(2, "0") + ':' + String(this.minute).padStart(2, "0");

    let isEveryDay = this.selectedDays.has(-1) || this.selectedDays.size == 7;



    if (isEveryDay) {
      if (!this.selectedTimes[-1].includes(timeToAdd)) {
        this.selectedTimes[-1].push(timeToAdd);
      }
      for (let time in this.selectedTimes) {
        if (time != "-1" && time != "Dates") {
          this.selectedTimes[time] = this.selectedTimes[time].filter(x => x != timeToAdd);
        }
      }
    }
    else {
     this.selectedDays.forEach(i => {
        if (!this.selectedTimes[i].includes(timeToAdd) && !this.selectedTimes[-1].includes(timeToAdd)) {
          this.selectedTimes[i].push(timeToAdd);
        }
      })
    }
    this.reorderTimes()
  }

  private reorderTimes() {
    for (let dayIndex in this.selectedTimes) {
      if (dayIndex != 'Dates') {
        this.selectedTimes[dayIndex].sort((a, b) => {
          const [aHour, aMinute] = a.split(':').map(Number);
          const [bHour, bMinute] = b.split(':').map(Number);
          return (aHour * 60 + aMinute) - (bHour * 60 + bMinute);
        });
      }
      else {
        this.selectedTimes[dayIndex].sort((a, b) => {
          const [aDate, aTime] = a.split(' ');
          const [bDate, bTime] = b.split(' ');

          const [aDay, aMonth, aYear] = aDate.split('.').map(Number);
          const [aHour, aMinute] = aTime.split(':').map(Number);

          const [bDay, bMonth, bYear] = bDate.split('.').map(Number);
          const [bHour, bMinute] = bTime.split(':').map(Number);

          const aDateTime = new Date(aYear, aMonth - 1, aDay, aHour, aMinute);
          const bDateTime = new Date(bYear, bMonth - 1, bDay, bHour, bMinute);

          return aDateTime.getTime() - bDateTime.getTime();
        });
      }
    }
  }

  selectDay(dayToChange: number) {
    if (this.selectedDays.has(dayToChange)) {
      this.selectedDays.delete(dayToChange);
    }
    else {
      this.selectedDays.add(dayToChange);

      //if (this.selectedDays.has(-1) || this.selectedDays.size >= 7) { //should be readed with [(ngModel)]
      //  this.selectedDays.clear();
      //  this.selectedDays.add(-1);
      //}

    }

  }

  removeTime(day: string, time: string) {
    this.selectedTimes[day] = this.selectedTimes[day].filter(x => x != time);

  }


  incrementHour() {
    this.hour = (this.hour + 1) % 24;
    this.nextHour = (this.hour + 1) % 24;
    this.previousHour = (this.hour - 1 + 24) % 24;
  }

  decrementHour() {
    this.hour = (this.hour - 1 + 24) % 24;
    this.nextHour = (this.hour + 1) % 24;
    this.previousHour = (this.hour - 1 + 24) % 24;
  }

  incrementMinute() {
    if (this.minute === 59) {
      this.minute = 0;
      this.incrementHour();
    } else {
      this.minute++;
    }
    this.nextMinute = (this.minute + 1) % 60;
    this.previousMinute = (this.minute - 1 + 60) % 60;
  }

  decrementMinute() {
    if (this.minute === 0) {
      this.minute = 59;
      this.decrementHour();
    } else {
      this.minute--;
    }
    this.nextMinute = (this.minute + 1) % 60;
    this.previousMinute = (this.minute - 1 + 60) % 60;
  }

  save(): void {

    this.dialogRef.close({
      newParam: transformDictToDefinedTimes(this.selectedTimes)
    });

  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
