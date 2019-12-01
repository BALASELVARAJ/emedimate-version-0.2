import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SeekersPage } from './seekers.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import { ModalPage } from '../modal/modal.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    IonicModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: SeekersPage }])
  ],
  declarations: [SeekersPage]
})
export class SeekersPageModule {}
