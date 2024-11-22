import { Injectable } from "@angular/core";

@Injectable({providedIn:"root"})
export class DrugService{

  public getSpecificDrugsAsComponents():Promise<any>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([]);
      }, 300);
    });
  }


  getSpecificDrugs(HotscreenPatientAge:any, HotscreenPatientSex:any):Promise<any>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([]);
      }, 300);
    });
  }
}


