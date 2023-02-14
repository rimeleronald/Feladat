import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Feladat } from './feladat.model';

@Injectable({ providedIn: 'root' })
export class FeladatService {
  private feladatSource = new Subject<Feladat[]>();
  private converterSource = new Subject<Feladat>();

  feladatObserver = this.feladatSource.asObservable();
  converterObserver = this.converterSource.asObservable();

  load = (feladatok: Feladat[]) => {
    if (feladatok) {
      this.feladatSource.next(feladatok);
    }
  };

  convert = (feladat: Feladat): Observable<Feladat> => {
    if (feladat) {
      const f: Feladat = {
        id: feladat.id * 2,
        name: feladat.name + feladat.name,
      };
      this.converterSource.next(f);
      return this.converterObserver;
    }
  };
}
