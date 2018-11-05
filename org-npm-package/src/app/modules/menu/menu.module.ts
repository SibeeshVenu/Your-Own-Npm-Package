import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgPrivateMenuComponent } from '../ng-private-menu/ng-private-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule, MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [
    NgPrivateMenuComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [
    NgPrivateMenuComponent
  ]
})
export class MenuModule { }
