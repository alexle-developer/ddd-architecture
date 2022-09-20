import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as BookingActions from './booking.actions';
import { Booking } from '../../entities/booking';

export const BOOKING_FEATURE_KEY = 'booking-booking';

export interface State extends EntityState<Booking> {
  selectedId?: string | number; // which Booking record has been selected
  loaded: boolean; // has the Booking list been loaded
  error?: string | null; // last known error (if any)
}

export interface BookingPartialState {
  readonly [BOOKING_FEATURE_KEY]: State;
}

export const bookingAdapter: EntityAdapter<Booking> =
  createEntityAdapter<Booking>();

export const initialState: State = bookingAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const bookingReducer = createReducer(
  initialState,
  on(BookingActions.loadBooking, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(BookingActions.loadBookingSuccess, (state, { booking }) =>
    bookingAdapter.upsertMany(booking, { ...state, loaded: true })
  ),
  on(BookingActions.loadBookingFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return bookingReducer(state, action);
}
