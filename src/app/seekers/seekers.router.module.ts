import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeekersPage } from './seekers.page';

const routes: Routes = [
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SeekersPageRoutingModule {}
