import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Boarding } from '../entities/boarding';
import { BoardingDataService } from '../infrastructure/boarding.data.service';

@Injectable({ providedIn: 'root' })
export class ManageBoardingsFacade {
  private boardingListSubject = new BehaviorSubject<Boarding[]>([]);
  boardingList$ = this.boardingListSubject.asObservable();

  constructor(private boardingDataService: BoardingDataService) {}

  load(): void {
    this.boardingDataService.load().subscribe({
      next: (boardingList) => {
        this.boardingListSubject.next(boardingList);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
