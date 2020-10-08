import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmailSettingsPageRoutingModule } from './email-settings-routing.module';

import { EmailSettingsPage } from './email-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmailSettingsPageRoutingModule
  ],
  declarations: [EmailSettingsPage]
})
export class EmailSettingsPageModule {}
