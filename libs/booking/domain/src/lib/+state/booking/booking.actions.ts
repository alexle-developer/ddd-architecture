import { createAction, props } from '@ngrx/store';
import { Booking } from '../../entities/booking';

export const loadBooking = createAction('[Booking] Load Booking');

export const loadBookingSuccess = createAction(
  '[Booking] Load Booking Success',
  props<{ booking: Booking[] }>()
);

export const loadBookingFailure = createAction(
  '[Booking] Load Booking Failure',
  props<{ error: any }>()
);
