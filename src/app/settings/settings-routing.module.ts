import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsPage } from './settings.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage
  },
  {
    path: 'account-settings',
    loadChildren: () => import('../account-settings/account-settings.module').then( m => m.AccountSettingsPageModule)
  },
  {
    path: 'change-email-add',
    loadChildren: () => import('../change-email-add/change-email-add.module').then( m => m.ChangeEmailAddPageModule)
  },
  {
    path: 'email-settings',
    loadChildren: () => import('../email-settings/email-settings.module').then( m => m.EmailSettingsPageModule)
  },
  {
    path: 'notification-settings',
    loadChildren: () => import('../notification-settings/notification-settings.module').then( m => m.NotificationSettingsPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('../change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsPageRoutingModule {}
