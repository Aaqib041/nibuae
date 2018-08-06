import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
// import {} from '@types/googlemaps';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../shared/user';
import { UserService } from '../shared/user.service';
import { AppService } from '../app.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { GoogleMapsModule } from 'google-maps-angular2';
import { GoogleMapsService } from "google-maps-angular2";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements AfterViewInit {
  lang;
  enquiryForm;
  private map: any;

  options = [{"0":"Member"},{"1":"HR"},{ "2": "Other"}];

 constructor(private gapi: GoogleMapsService, private translate: TranslateService, private toastr: ToastsManager, private appService: AppService, private router: Router, private frmBuilder: FormBuilder, private userService: UserService) {
    translate.setDefaultLang('en');
    if (this.lang === 'ar') {
      this.translate.use('ar');
    }
  }
 
  ngAfterViewInit(): void {
   
  }
  
 isValidFormSubmitted = null;
  customerServiceForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]),
    mobile: new FormControl('', [Validators.required]),
    enquiry: new FormControl('', [Validators.required]),
    optradio: new FormControl('', [Validators.required])

  });
  user = new User();
  isSubmitted: boolean = false;
  result: any = null;
 
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }
  switchLanguage(language: string) {
    console.log("language", language);
    this.translate.use(language);
  }
  get email() {
    return this.customerServiceForm.get('email');
  }
  get mobile() {
    return this.customerServiceForm.get('mobile');
  }


  // get enquirySelection() {
  //   console.log("this.enquiryForm.value.optradio", this.enquiryForm.value);
  //   return this.enquiryForm.value;

  // }
  // @HostBinding('attr.aria-expanded')
  //     private isExpanded:boolean = true;
  //     isCollapsed:boolean =true;

  //     @HostBinding('class.collapse in')
  //     private isCollapse;

  sendCustomerServiceForm(){
    this.isValidFormSubmitted = false;
    console.log("this.isValidFormSubmitted", this.isValidFormSubmitted)
    if (this.customerServiceForm.invalid) {
      return;
    }
    this.isValidFormSubmitted = true;
    this.user = this.customerServiceForm.value;
    this.userService.createUser(this.user);
    console.log("inside nav send", this.user.optradio);
    this.appService.sendInfoToMail(this.user).subscribe(
      res => {
        this.customerServiceForm.reset();
        console.log(res);
        this.toastr.success('you email sent successfully', 'Success!');
        // this.toastr.success("");
      }, error => {
        console.log(error);
      });
    // this.register.reset();
  }

  reset() {
    // this.isSubmitted = false;
    this.customerServiceForm.reset();

  }


send(){
  
}
}
