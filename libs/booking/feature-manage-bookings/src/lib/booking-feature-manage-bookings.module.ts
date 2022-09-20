import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingDomainModule } from '@ddd-architecture/booking/domain';
import { ManageBookingsComponent } from './manage-bookings.component';

@NgModule({
  imports: [CommonModule, BookingDomainModule],
  declarations: [ManageBookingsComponent],
  exports: [ManageBookingsComponent],
})
export class BookingFeatureManageBookingsModule {}
