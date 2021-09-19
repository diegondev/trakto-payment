import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeedHelpComponent } from './need-help/need-help.component';



@NgModule({
  declarations: [
    NeedHelpComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NeedHelpComponent
  ]
})
export class ComponentsModule { }
