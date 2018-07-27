import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';
import * as $ from 'jquery';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    new WOW().init();
  }

   @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 250 && number < 270) {
      $('.wow').removeClass('animated');
            $('.wow').removeAttr('style');
             new WOW().init();

    } 
  }


}
