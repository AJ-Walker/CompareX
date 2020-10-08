import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeEmailAddPage } from './change-email-add.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeEmailAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeEmailAddPageRoutingModule {}
