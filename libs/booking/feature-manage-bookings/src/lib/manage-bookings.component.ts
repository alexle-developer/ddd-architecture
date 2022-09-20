import { Component, OnInit } from '@angular/core';
import { ManageBookingsFacade } from '@ddd-architecture/booking/domain';

@Component({
  selector: 'booking-manage-bookings',
  templateUrl: './manage-bookings.component.html',
  styleUrls: ['./manage-bookings.component.scss'],
})
export class ManageBookingsComponent implements OnInit {
  bookingList$ = this.manageBookingsFacade.bookingList$;

  constructor(private manageBookingsFacade: ManageBookingsFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.manageBookingsFacade.load();
  }
}
