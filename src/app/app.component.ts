import { Component, OnInit, AfterViewInit, ElementRef, ViewContainerRef } from '@angular/core';
import { AppService } from './app.service';
import * as $ from 'jquery';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from './shared/user';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { UserService } from './shared/user.service';
import { Location, PopStateEvent } from "@angular/common";
// import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService, UserService]
})
export class AppComponent implements OnInit{
  model: any = {};
   private lastPoppedUrl: string;
    private yScrollStack: number[] = [];
  isValidFormSubmitted = null;
  quickQuote = new FormGroup({
    email: new FormControl('', [Validators.required,  Validators.pattern("[^ @]*@[^ @]*")]),
    name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
    mobile: new FormControl('', [Validators.required])

  });
  user = new User();
  public viewContainerRef: ViewContainerRef;
  constructor(private router: Router, private location: Location, private userService: UserService, private appService: AppService, public toastr: ToastsManager, public erf: ElementRef, viewContainerRef: ViewContainerRef) {
    this.viewContainerRef = viewContainerRef;
    this.toastr.setRootViewContainerRef(viewContainerRef);
  }



  ngOnInit() {
    this.location.subscribe((psevnt:PopStateEvent) => {
            this.lastPoppedUrl = psevnt.url;
        });
        this.router.events.subscribe((psevnt:any) => {
            if (psevnt instanceof NavigationStart) {
                if (psevnt.url != this.lastPoppedUrl)
                    this.yScrollStack.push(window.scrollY);
            } else if (psevnt instanceof NavigationEnd) {
                if (psevnt.url == this.lastPoppedUrl) {
                    this.lastPoppedUrl = undefined;
                    window.scrollTo(0, this.yScrollStack.pop());
                } else
                    window.scrollTo(0, 0);
            }
        });
   // document.getElementById('up-arrow').style.display="none";
  }
  
  check() {
   console.log("inside check");
    document.getElementById('up-arrow').style.display="none";
  }
  get email() {
    return this.quickQuote.get('email');
  }

  get mobile() {
    return this.quickQuote.get('mobile');
  }

  get name() {
    return this.quickQuote.get('name');
  }

  sendEmail() {
    this.isValidFormSubmitted = false;
    console.log("this.isValidFormSubmitted", this.isValidFormSubmitted)
    if (this.quickQuote.invalid) {
      return;
    }
    this.isValidFormSubmitted = true;
    this.user = this.quickQuote.value;
    this.userService.createUser(this.user);
    console.log("this.user", this.user);
    this.appService.sendInfoToMail(this.user).subscribe(
      res => {
         this.quickQuote.reset();
        console.log(res);
        this.toastr.success('you email sent successfully', 'Success!');
        // this.toastr.success("");
      }, error => {
        console.log(error);
         this.quickQuote.reset();
          this.toastr.error('something went wrong ', 'Fail!');
      });

  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

}
