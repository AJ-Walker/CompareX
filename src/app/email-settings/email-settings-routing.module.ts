import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailSettingsPage } from './email-settings.page';

const routes: Routes = [
  {
    path: '',
    component: EmailSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmailSettingsPageRoutingModule {}
