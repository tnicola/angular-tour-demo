import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home.component';
import { HomeRoutingModule, PageAComponent, PageBComponent } from './components/home-routing.module';
import { JoyrideModule } from 'ngx-joyride';
import { CustomComponent } from './components/custom.component';
import { CommonModule } from '@angular/common';
import { JoyrideTranslatePipe } from './pipes/translate.pipe.component';

@NgModule({
  imports: [
    CommonModule,
    JoyrideModule.forChild(),
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    CustomComponent,
    PageAComponent,
    PageBComponent,
    JoyrideTranslatePipe
  ]
})
export class HomeModule { }