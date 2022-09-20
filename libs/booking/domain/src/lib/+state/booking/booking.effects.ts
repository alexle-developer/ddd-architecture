import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as BookingActions from './booking.actions';
import { BookingDataService } from '../../infrastructure/booking.data.service';

@Injectable()
export class BookingEffects {
  loadBooking$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.loadBooking),
      switchMap((action) =>
        this.bookingDataService.load().pipe(
          map((booking) => BookingActions.loadBookingSuccess({ booking })),
          catchError((error) =>
            of(BookingActions.loadBookingFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private bookingDataService: BookingDataService
  ) {}
}
