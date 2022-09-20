import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardingDomainModule } from '@ddd-architecture/boarding/domain';
import { ManageBoardingsComponent } from './manage-boardings.component';

@NgModule({
  imports: [CommonModule, BoardingDomainModule],
  declarations: [ManageBoardingsComponent],
  exports: [ManageBoardingsComponent],
})
export class BoardingFeatureManageBoardingsModule {}
