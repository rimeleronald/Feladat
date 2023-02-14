import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { forkJoin, mergeMap } from 'rxjs';
import { Feladat } from './feladat.model';
import { FeladatService } from './feladat.service';

@Component({
  selector: 'feladat-app',
  standalone: true,
  templateUrl: 'feladat.component.html',
  imports: [CommonModule],
})
export class FeladatComponent implements OnInit {
  data: Feladat[] = [
    {
      id: 1,
      name: 'asd',
    },
    {
      id: 2,
      name: 'dsa',
    },
  ];

  feladatok: Feladat[] = [];

  constructor(private feladatService: FeladatService) {}

  ngOnInit(): void {
    this.feladatService.feladatObserver
      .pipe(
        mergeMap((feladatok) => {
          console.log(feladatok);
          const a = feladatok.map((f) => this.feladatService.convert(f));
          return forkJoin(...a);
        })
      )
      .subscribe((v) => console.log(v));
  }

  loadData() {
    this.feladatService.load(this.data);
  }
}
