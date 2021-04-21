import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModuleComponent } from './core-module.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CoreModuleComponent,
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModuleModule { }
