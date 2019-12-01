import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkersPage } from './workers.page';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    IonicModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: WorkersPage }])
  ],
  declarations: [WorkersPage],

})
export class WorkersPageModule {}
