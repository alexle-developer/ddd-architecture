import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { loadBooking } from '../+state/booking/booking.actions';
import * as fromBooking from '../+state/booking/booking.reducer';
import * as BookingSelectors from '../+state/booking/booking.selectors';

@Injectable({ providedIn: 'root' })
export class ManageBookingsFacade {
  loaded$ = this.store.pipe(select(BookingSelectors.getBookingLoaded));
  bookingList$ = this.store.pipe(select(BookingSelectors.getAllBooking));
  selectedBooking$ = this.store.pipe(select(BookingSelectors.getSelected));

  constructor(private store: Store<fromBooking.BookingPartialState>) {}

  load(): void {
    this.store.dispatch(loadBooking());
  }
}
