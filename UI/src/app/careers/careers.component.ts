import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user';
import { AppService } from '../app.service';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {ValidationManager} from "ng2-validation-manager";
import Swal from 'sweetalert2';
  declare var $:any;


@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css'],
   providers: [UserService, AppService]
})
export class CareersComponent implements OnInit {
public carouselOne: NgxCarousel;
careerForm;

   user  = new User();
  constructor( private spinnerService: Ng4LoadingSpinnerService,
   private toastr: ToastsManager, private appService: AppService, 
   private frmBuilder: FormBuilder, private userService: UserService)  { }


  ngOnInit() {
    this.careerForm = new ValidationManager({
      'name'        : 'required|minLength:4|maxLength:12|alphaSpace',
      'email'       : 'required|email',
      'mobile'    : 'required|pattern:[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*',
      'functionalArea' : 'required',
      'resumeTitle': ''

 
    });
    this.careerForm.setValue({
      'name': ''
    });
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
            display: none;
          }
          .ngucarouselPoint li {
            display: display: none;
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
              display: none;
        `
      },

      load: 2,
      touch: true,
      // loop: true,
      custom: 'banner'
    }
  }
  
  public myfunc(event: Event) {
    // carouselLoad will trigger this funnction when your load value reaches
    // it is helps to load the data by parts to increase the performance of the app

    // must use feature to all carousel
  }


  send(){
  if(this.careerForm.isValid()){
      console.log(this.careerForm.getData());
        this.spinnerService.show();
       this.appService.sendInfoToMail(this.user).subscribe(
      res => {
   this.spinnerService.hide();
       Swal({
  type: 'success',
  title: 'Thanks ! Your form has been successfully sent',
  showConfirmButton: true
})
        this.careerForm.reset();
        console.log(res);
      }, error => {
        console.log(error);
        this.spinnerService.hide();
      });
  }
      this.careerForm.reset();
    }

  closeModal() {
  this.careerForm.reset();
}

  reset() {
    // this.isSubmitted = false;
    this.careerForm.reset();

  }
  }
