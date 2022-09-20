import * as fromBooking from './+state/booking/booking.reducer';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingEffects } from './+state/booking/booking.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromBooking.BOOKING_FEATURE_KEY,
      fromBooking.reducer
    ),
    EffectsModule.forFeature([BookingEffects]),
  ],
})
export class BookingDomainModule {}
