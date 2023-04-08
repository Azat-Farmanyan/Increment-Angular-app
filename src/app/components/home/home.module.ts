import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ConfirmPopupComponent } from './confirm-popup/confirm-popup.component';

@NgModule({
  declarations: [HomeComponent, ConfirmPopupComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
