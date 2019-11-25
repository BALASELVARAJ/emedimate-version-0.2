import { IonicModule } from '@ionic/angular';
import { NotificationsPage } from './notifications.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { ModalPage } from '../modal/modal.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NgxDatatableModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatIconModule,
    MatMenuModule,
    RouterModule.forChild([{ path: '', component: NotificationsPage }])
  ],
  declarations: [NotificationsPage]
})
export class NotificationsPageModule {}
