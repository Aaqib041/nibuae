import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderModule } from '../header/header.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { FooterModule } from '../footer/footer.module';
import { TranslateModule } from '@ngx-translate/core';
import { NguCarouselModule } from '@ngu/carousel';


@NgModule({
  imports: [
    CommonModule, ChartsModule, NguCarouselModule, HomeRoutingModule, HeaderModule, FooterModule, FormsModule, TranslateModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule {}
