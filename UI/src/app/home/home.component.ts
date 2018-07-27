import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { NgxCarousel } from 'ngx-carousel';
import { Router, NavigationEnd } from '@angular/router';
import { WOW } from 'wowjs/dist/wow.min';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit {

  public isVisible: boolean = false;
  public carouselOne: NgxCarousel;
  public carouselBottom: NgxCarousel;
  start: 1;
  end: 20;
  constructor(private router: Router) {

  }
  
  ngOnInit() {
 // this.router.events.subscribe((evt) => {
 //             if (!(evt instanceof NavigationEnd)) {
 //                return;
 //            }

 //            var scrollToTop = window.setInterval(function () {
 //                var pos = window.pageYOffset;
 //                if (pos > 0) {
 //                    window.scrollTo(0, pos - 20); // how far to scroll on each step
 //                } else {
 //                    window.clearInterval(scrollToTop);
 //                }
 //            }, 16); // how fast to scroll (this equals roughly 60 fps)
 //        });
    // this.router.navigate(['/home']);
    this.carouselOne = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 1,
      speed: 400,
      interval: 4000,
      animation: 'lazy',
      point: {
        visible: true,
       pointStyles: `
          .ngucarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            position: absolute;
            width: 100%;
            left: 0;
            bottom: 20px;
            box-sizing: border-box;
          }
          .ngucarouselPoint li {
            display: inline-block;
            border-radius: 999px;
            background: #262679;
            padding: 5px;
            margin: 0 3px;
            transition: .4s ease all;
          }
          .ngucarouselPoint li.active {
              background: #262679;
              width: 10px;
              padding: 8px;

          }
          .leftRs {
            display: none;
          }
        `
      },

      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    }

     this.carouselBottom = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 1,
      speed: 400,
      interval: 4000,
      animation: 'lazy',
      point: {
        visible: false,
       pointStyles: `
          .ngucarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            position: absolute;
            width: 100%;
            left: 0;
            bottom: 20px;
            box-sizing: border-box;
          }
          .ngucarouselPoint li {
            display: inline-block;
            border-radius: 999px;
            background: #262679;
            padding: 5px;
            margin: 0 3px;
            transition: .4s ease all;
          }
          .ngucarouselPoint li.active {
              background: #262679;
              width: 10px;
              padding: 8px;

          }
          .leftRs {
            display: none;
          }
        `
      },

      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    }

  }

  ngAfterViewInit(): void {
    new WOW().init();
  }

  public myfunc(event: Event) {
    // carouselLoad will trigger this funnction when your load value reaches
    // it is helps to load the data by parts to increase the performance of the app
    // must use feature to all carousel
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 250 && number < 270) {
      $('.wow').removeClass('animated');
            $('.wow').removeAttr('style');
             new WOW().init();
      this.isVisible = true;
    } else if (this.isVisible && number < 10) {
      this.isVisible = false;
    }
  }
}
