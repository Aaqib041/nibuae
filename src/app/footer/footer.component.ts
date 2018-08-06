import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../app.service';
import { User } from '../shared/user';
import { UserService } from '../shared/user.service';
import * as $ from 'jquery';
import { Router, NavigationEnd } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { NgbModule, NgbModal, ModalDismissReasons, NgbModalOptions, NgbDateStruct, NgbPopover } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [AppService, UserService ]
})
export class FooterComponent implements OnInit {
  isValidFormSubmitted = null;
  enquiryForm = new FormGroup({
     email: new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]),
      mobile: new FormControl('', [Validators.required ]),
      enquiry: new FormControl('', [Validators.required ])

  });
  user = new User();
   isSubmitted: boolean = false;
   result: any = null;
  footerLabels;
  constructor(public router: Router, public appService: AppService, private userService: UserService, private toastr: ToastsManager) {
    this.footerLabels = AppService.appLabels;
  }

    get email() {
     return this.enquiryForm.get('email');
  }
   get mobile() {
     return this.enquiryForm.get('mobile');
  }

  send(){
    this.isValidFormSubmitted = false;
    console.log("this.isValidFormSubmitted", this.isValidFormSubmitted)
     if (this.enquiryForm.invalid) {
        return;
     }
     this.isValidFormSubmitted = true;
     this.user = this.enquiryForm.value;
     this.userService.createUser(this.user);
     console.log("inside nav send", this.user);
       this.appService.sendInfoToMail(this.user).subscribe(
      res => {
         this.enquiryForm.reset();
        console.log(res);
        this.toastr.success('you email sent successfully', 'Success!');
        // this.toastr.success("");
      }, error => {
        console.log(error);
      });
     // this.register.reset();
   }
   
   reset(){
     // this.isSubmitted = false;
     this.enquiryForm.reset();
     
   }

  ngOnInit() {}

  chatPopup(){
  	console.log("inside chat method");
     $('#myModal').show();
  }
  careerFooter() {
    this.router.navigateByUrl('/careers');
    window.scrollTo(0,0);
  }

   contactFooter() {
    this.router.navigateByUrl('/contact');
    window.scrollTo(0,0);
  }
   productFooter() {
    this.router.navigateByUrl('/product');
    window.scrollTo(0,0);
  }

   aboutFooter() {
    this.router.navigateByUrl('/about');
    window.scrollTo(0,0);
  }
}
