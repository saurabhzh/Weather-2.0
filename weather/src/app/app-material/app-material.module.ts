import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  declarations: [],
  exports: [
    MatTabsModule,
    BrowserAnimationsModule,
    NgbModule
  ]
})
export class AppMaterialModule { }
