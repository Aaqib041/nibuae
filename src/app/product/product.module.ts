import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { ProductComponent } from './product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NguCarouselModule } from '@ngu/carousel';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

@NgModule({
  imports: [
    CommonModule, ProductRoutingModule,RecaptchaModule, RecaptchaFormsModule,  NguCarouselModule, TranslateModule, HeaderModule, FooterModule, ReactiveFormsModule, FormsModule
  ],
  declarations: [ProductComponent],
  exports: [ProductComponent]
})
export class ProductModule {}
