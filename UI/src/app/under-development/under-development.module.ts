import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UnderDevelopmentRoutingModule} from './under-develop-routing.module';
import {UnderDevelopmentComponent} from './under-development.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,UnderDevelopmentRoutingModule,HeaderModule,FooterModule
  ],
   declarations: [UnderDevelopmentComponent],
  exports: [UnderDevelopmentComponent]
})
export class UnderDevelopmentModule { }
