import { Component, OnInit } from '@angular/core';
import { ManageBoardingsFacade } from '@ddd-architecture/boarding/domain';

@Component({
  selector: 'boarding-manage-boardings',
  templateUrl: './manage-boardings.component.html',
  styleUrls: ['./manage-boardings.component.scss'],
})
export class ManageBoardingsComponent implements OnInit {
  boardingList$ = this.manageBoardingsFacade.boardingList$;

  constructor(private manageBoardingsFacade: ManageBoardingsFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.manageBoardingsFacade.load();
  }
}
