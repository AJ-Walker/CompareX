import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeEmailAddPageRoutingModule } from './change-email-add-routing.module';

import { ChangeEmailAddPage } from './change-email-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeEmailAddPageRoutingModule
  ],
  declarations: [ChangeEmailAddPage]
})
export class ChangeEmailAddPageModule {}
