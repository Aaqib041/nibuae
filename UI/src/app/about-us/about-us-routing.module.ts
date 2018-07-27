import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'about', component: AboutUsComponent }
    ])
  ],
  exports: [RouterModule]
})

export class AboutUsRoutingModule {}
