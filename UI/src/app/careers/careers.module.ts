import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerRoutingModule } from './careers-routing.module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { CareersComponent } from './careers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NguCarouselModule } from '@ngu/carousel';

@NgModule({
  imports: [
    CommonModule, CareerRoutingModule, NguCarouselModule,ReactiveFormsModule, TranslateModule, HeaderModule, FooterModule, FormsModule
  ],
  declarations: [CareersComponent],
  exports: [CareersComponent]
})
export class CarrersModule {}
