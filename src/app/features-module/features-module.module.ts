import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesModuleComponent } from './features-module.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FeaturesModuleComponent,
    HomeComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class FeaturesModuleModule { }
