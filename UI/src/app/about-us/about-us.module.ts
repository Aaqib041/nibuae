import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsRoutingModule } from './about-us-routing.module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { AboutUsComponent } from './about-us.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule, AboutUsRoutingModule, TranslateModule, HeaderModule, FooterModule, FormsModule
  ],
  declarations: [AboutUsComponent],
  exports: [AboutUsComponent]
})
export class AboutUsModule {}
