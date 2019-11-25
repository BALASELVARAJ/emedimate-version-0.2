import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkersPage } from './workers.page';

const routes: Routes = [
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MessagePageRoutingModule {}
