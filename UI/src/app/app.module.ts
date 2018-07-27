import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastModule, ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { CustomOption } from './shared/custom-options';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header/header.module';
import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';
import { ContactUsModule } from './contact-us/contact-us.module';
import { ProductModule } from './product/product.module';
import { AboutUsModule } from './about-us/about-us.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppService } from './app.service';
import { UnderDevelopmentModule } from './under-development/under-development.module';
import { HomeModule } from './home/home.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxCarouselModule } from 'ngx-carousel';
import { NguCarouselModule } from '@ngu/carousel';
import 'hammerjs';
import { CarrersModule } from './careers/careers.module';
import {GoogleMapsModule} from 'google-maps-angular2';
import {GoogleMapsService} from "google-maps-angular2";
import { ProductComponent } from './product/product.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { RecaptchaModule } from 'ng-recaptcha';
// import { CommonModule } from '@angular/common';
export class CustomOptions extends ToastOptions {
  animate = 'fade';
  dismiss = 'auto';
  positionClass: string = 'toast-bottom-right';
  showCloseButton = true;
  // newestOnTop = true;
  enableHTML = true;
  // messageClass = '';
  // titleClass = '';
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


export function loadConfigFile(config: AppService) {
  return () => {
    return config.loadConfigFile();
  };
}
export function loadLabels(config: AppService) {
  return () => {
    return config.loadLabels();
  };
}

export function loadMessages(config: AppService) {
  return () => {
    return config.loadMessages();
  };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,  HttpClientModule,
    ReactiveFormsModule,
    ToastModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot(),
    GoogleMapsModule.forRoot({
            url: 'https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyATexi3aMokeMdFna0e97XZWf_QvB__FCE'
        }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RecaptchaModule.forRoot(),
     BrowserAnimationsModule, GoogleMapsModule, RouterModule, ProductModule, CarrersModule, NguCarouselModule, NgxCarouselModule, UnderDevelopmentModule, HomeModule,AboutUsModule, HttpModule, AppRoutingModule, FormsModule, FooterModule, HeaderModule, NavbarModule, ContactUsModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, AppService,
    {
      'provide': APP_INITIALIZER,
      'useFactory': loadConfigFile,
      'deps': [AppService],
      'multi': true
    }, {
      'provide': APP_INITIALIZER,
      'useFactory': loadLabels,
      'deps': [AppService],
      'multi': true
    }, {
      'provide': APP_INITIALIZER,
      'useFactory': loadMessages,
      'deps': [AppService],
      'multi': true
    },{provide: ToastOptions, useClass:CustomOption }],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}
