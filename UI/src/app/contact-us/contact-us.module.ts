import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { ContactUsComponent } from './contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import {GoogleMapsModule} from 'google-maps-angular2';
import {GoogleMapsService} from "google-maps-angular2";
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

@NgModule({
  imports: [
    CommonModule, ContactUsRoutingModule, ReactiveFormsModule, RecaptchaModule, RecaptchaFormsModule,  GoogleMapsModule, TranslateModule, HeaderModule, FooterModule, FormsModule
  ],
  declarations: [ContactUsComponent],
  exports: [ContactUsComponent]
})
export class ContactUsModule {}
