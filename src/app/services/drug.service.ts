import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DrugService {
  public getSpecificDrugsAsComponents(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { Name: 'short name',
             SubstanceList: [],
              IsFormularium: true ,
              DefaultPrescriptions:[]
            },
          {
            Name: 'loong very loooon g name name',
            SubstanceList: [],
            IsFormularium: true,
            DefaultPrescriptions:[]
          },
        ]);
      }, 300);
    });
  }

  getSpecificDrugs(
    HotscreenPatientAge: any,
    HotscreenPatientSex: any
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { Name: 'short name',
             SubstanceList: [],
              IsFormularium: true ,
              DefaultPrescriptions:[]
            },
          {
            Name: 'loong very loooon g name name',
            SubstanceList: [],
            IsFormularium: true,
            DefaultPrescriptions:[]
          },
        ]);
      }, 300);
    });
  }
}
