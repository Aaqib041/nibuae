import { Component, OnInit, HostBinding, HostListener, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../shared/user';
import { UserService } from '../shared/user.service';
import { AppService } from '../app.service';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { ValidationManager } from "ng2-validation-manager";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import Swal from 'sweetalert2';
  declare var $:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [UserService, AppService]
})
export class NavbarComponent implements OnInit {
  @ViewChild('closeBtn') closeBtn: ElementRef;
  lang;
  isValidFormSubmitted = null;
    enquiryForm = new FormGroup({
    // corporateName: new FormControl('', [Validators.required]),
    information: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]),
    mobile: new FormControl('', [Validators.required]),
    enquiry: new FormControl('', [Validators.required]),
    optradio: new FormControl('', [Validators.required]),
    captcha: new FormControl('', [Validators.required]),
    anyQuestion: new FormControl(),
    commnets: new FormControl(),
    country: new FormControl(),
    fax: new FormControl()
  });


   user = new User();
  isSubmitted: boolean = false;
  result: any = null;
  addCorporateName;

    constructor( private spinnerService: Ng4LoadingSpinnerService, private elemRef: ElementRef, private translate: TranslateService, private toastr: ToastsManager, private appService: AppService, private router: Router, private formBuilder: FormBuilder, private userService: UserService) {
    translate.setDefaultLang('en');
    if (this.lang === 'ar') {
      this.translate.use('ar');
    }
  }
   
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

   get corporateName() {
    return this.enquiryForm.get('corporateName');
  }
  get information() {
    return this.enquiryForm.get('information');
  }
   get anyQuestion() {
    return this.enquiryForm.get('anyQuestion');
  }

   get country() {
    return this.enquiryForm.get('country');
  }

   get comments() {
    return this.enquiryForm.get('comments');
  }

   get fax() {
    return this.enquiryForm.get('fax');
  }

    get city() {
    return this.enquiryForm.get('city');
  }
  
  get email() {
    return this.enquiryForm.get('email');
  }

  get mobile() {
    return this.enquiryForm.get('mobile');
  }
  get enquiry() {
    return this.enquiryForm.get('enquiry');
  }
get captcha() {
   return this.enquiryForm.get('captcha');
}

 private closeModal(): void {
        this.closeBtn.nativeElement.click();
    }
  switchLanguage(language: string) {
    console.log("language", language);
    this.translate.use(language);
  }

  corporate() {
    console.log("click Corporate ");
    this.addCorporateName = true;
  }
  individual() {
    this.addCorporateName = false;
  }



  @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 50) {
       console.log("pos", this.pos);
      console.log("number", number);
        this.pos[0].style.height = "125px";
      } else {
             this.pos[0].style.height = "80px";
      }

    }

pos;
  ngOnInit() {
    this.pos = document.getElementsByClassName('navbar-default'); 
    console.log("pos", this.pos);
    $('.accordion-group').on('show.bs.collapse', function () {
    $('.accordion-group .in').collapse('hide');
});

    $('#sidebarCollapse').on('click', function() {
      $('#sidebar').toggleClass('active');
    });

    $('#coverCollapse').on('click', function() {
      $('#cover').toggleClass('active');
    });


  }

send(value, valid ){
    console.log("this.isValidFormSubmitted",value, valid);
    if (valid === false) {
      this.isValidFormSubmitted = false;
      
    }
    else {
    this.isValidFormSubmitted = true;
    this.closeModal();
    this.user = this.enquiryForm.value;
    $('#enquiryModal').modal('hide');

    console.log("inside send", this.user);

    this.userService.createUser(this.user);
    console.log("inside nav send", this.user.optradio);
     // this.spinnerService.show();
    this.appService.sendInfoToMail(this.user).subscribe(
      res => {
        // this.spinnerService.hide();
       Swal({
  type: 'success',
  title: 'Thanks ! Your form has been successfully sent',
  showConfirmButton: true
})
        this.enquiryForm.reset();
        console.log(res);
        // this.spinnerService.hide();
        this.toastr.success(' you email sent successfully', 'Success!');
        // this.toastr.success("");
      }, error => {
        console.log(error);
      });
  }
    // this.register.reset();
  }

  serviceSolution() {
    window.scrollTo(0, 1100);
    this.router.navigateByUrl('/about');
    

 
  }

  whyUs() {
   window.scrollTo(0, 470); 
  }
  currenOpenings() {
    window.scrollTo(0, 400); 
  }

  reset() {
    this.enquiryForm.reset();

  }
  resetForm(){
  this.isSubmitted = false;
  this.enquiryForm.reset();
}  // }
  routeToResumeUpload() {

    this.router.navigateByUrl('/careers');
    window.scrollTo(0, 500);
  }
}
