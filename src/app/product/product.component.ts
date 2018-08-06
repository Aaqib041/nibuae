import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../shared/user';
import { UserService } from '../shared/user.service';
import { Router, NavigationEnd } from '@angular/router';
import { AppService } from '../app.service';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
  declare var $:any;
  import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [UserService, AppService]
})
export class ProductComponent implements OnInit {

  @ViewChild('closeBtn') closeBtn: ElementRef;
  @ViewChild('indMedIns') indMedIns: ElementRef;

  isValidFormSubmitted = null;
  addCorporateName;
    enquiryForm = new FormGroup({
    // corporateName: new FormControl('', [Validators.required]),
    information: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]),
    mobile: new FormControl('', [Validators.required]),
    enquiry: new FormControl('', [Validators.required]),
    optradio: new FormControl('', [Validators.required]),
    captcha: new FormControl('', [Validators.required]),
    anyQuestion: new FormControl(),
    comments: new FormControl(),
    country: new FormControl(),
    fax: new FormControl(),
    city: new FormControl()
  });

    homeUmbrellaForm = new FormGroup({
    mobile: new FormControl('', [Validators.required]),
    policyStartDate: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]),
    country: new FormControl(),
    dob: new FormControl('', [Validators.required]),
    region: new FormControl('', [Validators.required]),
    requiredCovers: new FormControl('', [Validators.required]),
    concreteOption: new FormControl('', [Validators.required]),
    accomadationOption: new FormControl(),
    reclaimedLandOption: new FormControl(),
    leavingHomeOption: new FormControl(),
    insurerOption: new FormControl(),
    captcha: new FormControl('', [Validators.required])
  });

   boatCraftEnquiryForm = new FormGroup({
      boatOwner :new FormControl('', [Validators.required]),
      manufacturer :new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required]),
      buildYear :new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]),
      boatValue :new FormControl('', [Validators.required]),
      nationality :new FormControl('', [Validators.required]),
      purchasePrice :new FormControl('', [Validators.required]),
      countryRegistration :new FormControl(),
      boatSize :new FormControl(),
      currentlyBoatInsr :new FormControl(),
      engineHP :new FormControl(),
      expiredDatePolicy :new FormControl(),
      carriedPassenger: new FormControl(),
      captcha : new FormControl('', [Validators.required])
  });

   motorEnquiryForm = new FormGroup({
    mobile: new FormControl('', [Validators.required]),
    certification : new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]),
    manufacturer : new FormControl('', [Validators.required]),
    nationality : new FormControl('', [Validators.required]),
    dob : new FormControl('', [Validators.required]),
    manufactureYear : new FormControl('', [Validators.required]),
    initPurchaseRate : new FormControl('', [Validators.required]),
    city : new FormControl('', [Validators.required]),
    firstRegistration : new FormControl('', [Validators.required]),
    firstLicenseCountry : new FormControl('', [Validators.required]),
    insuranceDeclareVal : new FormControl('', [Validators.required]),
    uaeDrivingLicense : new FormControl('', [Validators.required]),
    policyStartDate : new FormControl('', [Validators.required]),
    captcha : new FormControl('', [Validators.required])


  });

  individualMedicalForm = new FormGroup({
    mobile: new FormControl('', [Validators.required]),
    policyStartDate: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]),
    country: new FormControl(),
    dob: new FormControl('', [Validators.required]),
    areaCover : new FormControl(),
    numberOfMembers : new FormControl(),
    captcha: new FormControl('', [Validators.required])
  });

  user = new User();
  personalAccCover;
  individualLIWhileAbroad;
  individualLIUniqueFeature;
  oumbkp;
  uc;
  cumbc;
  isSubmitted: boolean = false;
  result: any = null;
  public umbrella: boolean = true;
  public motor: boolean = false;
  public travel: boolean = false;
  public craft: boolean = false;
  public personal: boolean = false;
  public individual: boolean = false;
  public fireAllied:boolean = false;
  public propertyAllRisk: boolean = false;
  public businessInterupption:boolean =false;
  public marineHull:boolean =false;
  public marineCargo:boolean =false;
  public piIns:boolean = false;
  public aviationIns:boolean = false;
  public shipRepairers:boolean=false;
  public contractorAllRiskIns:boolean=false;
  public erectionAllRiskIns:boolean=false;
  public machineryAllRiskIns:boolean=false;
  public machineryBreakdownIns:boolean=false;
  public contractorPlantMachineryIns:boolean =false;
  public deteriorationStockIns:boolean =false;
  public machineryLossProfitsIns:boolean=false;
  public publicLiabilityIns:boolean = false;
  public generalThirdPartyLiabilityIns:boolean = false;
  public workmenCompensationIns:boolean = false;
  public employerLiabilityIns:boolean = false;
  public productsLiabilityIns:boolean = false;
  public haulierLiabilityIns:boolean = false;
  public moneyIns:boolean = false;
  public fidelityGuaranteeIns:boolean = false;
  public hotelPlusIns:boolean = false;
  public goldPlusIns:boolean = false;
  public electronicEquipmentIns:boolean = false;
  public professionalIndemnityIns:boolean = false;
  public contingencyIns:boolean = false;
  public creditLifeCreditShieldIns:boolean = false;
  public bondIns:boolean = false;
  public terrorismSabotageIns:boolean = false;
  public medicalMalpracticeIns : boolean = false;
  public bankersBlanketIns:boolean = false;
  public motorIns:boolean = false;
  public groupMedicalIns:boolean = false;
  public groupLifeIns:boolean = false;
  public riskManag:boolean = false;
  public insuranceConsult:boolean =false;
  public individualLifeIns:boolean = false;
  public endowmentLifeInsProducts:boolean = false;
  public moneyBackLifeInsProducts:boolean = false;
  public educationLifeInsProducts:boolean = false;
  public termLifeInsProducts:boolean = false;
  public unitLinkedLifeProductsUniqueFeatures:boolean = false;
  public pensionPlanswithUniqueFeaturesIns:boolean = false;
  public wealthManagementSol:boolean = false;
  public keyManIns:boolean =false;

  public isVisible: boolean = false;

  public personalAccIns: boolean = false;
  public carouselOne: NgxCarousel;
  public carouselBottom: NgxCarousel;

  constructor(private translate: TranslateService, private toastr: ToastsManager, private appService: AppService, private router: Router, private frmBuilder: FormBuilder, private userService: UserService) {}


  checkProductType() {
    console.log("check product event");
    $('.accordion-group').on('show.bs.collapse', function() {
      $('.accordion-group .in').collapse('hide');
    });
  }

  ngOnInit() {

    $('.accordion-group').on('show.bs.collapse', function() {
      $('.accordion-group .in').collapse('hide');
    });

    $('#sidebarCollapse').on('click', function() {
      $('#sidebar').toggleClass('active');
    });

    $('#coverCollapse').on('click', function() {
      $('#cover').toggleClass('active');
    });

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

    this.oumbkp = document.getElementById("umbrellakeyPoints");
  this.uc = document.getElementById("umbrellaCover");
 this.cumbc = document.getElementById("umbrellaCover");
 this.personalAccCover = document.getElementById("personalAccidentCover");
 this.individualLIWhileAbroad = document.getElementById("individualLifeInsuranceWhileAbroad");
 this.individualLIUniqueFeature =document.getElementById('individualLifeInsuranceUniqueFeature');

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

   get comments() {
    return this.enquiryForm.get('comments');
  }

   get fax() {
    return this.enquiryForm.get('fax');
  }

    get city() {
    return this.enquiryForm.get('city');
  }
  
  get enquiry() {
    return this.enquiryForm.get('enquiry');
  }

  get email() {
    return this.enquiryForm.get('email');
  }
  get mobile() {
    return this.enquiryForm.get('mobile');
  }
  get country() {
    return this.enquiryForm.get('country');
  }





  get policyStartDate() {
    return this.enquiryForm.get('policyStartDate');
  }

  get dob(){
    return this.enquiryForm.get('dob');
  }
  get region() {
    return this.enquiryForm.get('region');

  }
   get requiredCovers() {
    return this.enquiryForm.get('requiredCovers');

  }
  get concreteHome() {
     return this.enquiryForm.get('concreteHome');
  }
  get houseHoldAccomadation() {
    return this.enquiryForm.get('houseHoldAccomadation');
  }
   get reclaimedLand() {
    return this.enquiryForm.get('reclaimedLand');
  }
  get captcha() {
   return this.enquiryForm.get('catcha');
  }

  get accomadationOption() {
   return this.enquiryForm.get('accomadationOption');
  }
  get concreteOption() {
   return this.enquiryForm.get('concreteOption');
  }
  get insurerOption() {
   return this.enquiryForm.get('insurerOption');
  }
   get leavingHomeOption() {
   return this.enquiryForm.get('leavingHomeOption');
  }
  get reclaimedLandOption() {
   return this.enquiryForm.get('reclaimedLandOption');
  }
  get uaeDrivingLicense() {
    return this.motorEnquiryForm.get('uaeDrivingLicense');    
  }
  get areaCover() {
    return this.individualMedicalForm.get('areaCover');
  }
  get numberOfMembers() {
    return this.individualMedicalForm.get('numberOfMembers');
  }
  corporate() {
    this.addCorporateName = true;
  }
  individualName() {
    this.addCorporateName = false;
  }


  private closeModal(): void {
        this.closeBtn.nativeElement.click();
    }

    private closeIndMedIns() : void {
      this.indMedIns.nativeElement.click();
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
     // this.spinnerService.show();
    this.appService.sendInfoToMail(value).subscribe(
      res => {
        console.log("res", res);
        // this.spinnerService.hide();
       Swal({
  type: 'success',
  title: 'Thanks ! Your form has been successfully sent',
  showConfirmButton: true
})

       
        this.enquiryForm.reset();
        console.log(res);
        // this.spinnerService.hide();
      }, error => {
        console.log(error);
      });
  }
    // this.register.reset();
  }

  sendHomeUmbrellaForm(value, valid) {
    console.log("inside send umbrella form", value);
    if (valid === false) {
      this.isValidFormSubmitted = false;
      
    }
    else {
    this.isValidFormSubmitted = true;
    this.closeModal();
    this.user = this.individualMedicalForm.value;


    this.userService.createUser(this.user);
     // this.spinnerService.show();
    this.appService.sendInfoToMail(value).subscribe(
      res => {
        // this.spinnerService.hide();
       Swal({
  type: 'success',
  title: 'Thanks ! Your form has been successfully sent',
  showConfirmButton: true
})
        this.individualMedicalForm.reset();
        console.log(res);
        // this.spinnerService.hide();
      }, error => {
        console.log(error);
      });
  }
    // this.register.reset();
  }

  sendMedInsForm(value, valid) {
    console.log("inside send umbrella form", value, valid);
    if (valid === false) {
      this.isValidFormSubmitted = false;
      
    }
    else {
    this.isValidFormSubmitted = true;
   this.closeIndMedIns();
    this.user = this.enquiryForm.value;


    this.userService.createUser(this.user);
     // this.spinnerService.show();
    this.appService.sendInfoToMail(value).subscribe(
      res => {
        // this.spinnerService.hide();
       Swal({
  type: 'success',
  title: 'Thanks ! Your form has been successfully sent',
  showConfirmButton: true
})
       this.individualMedicalForm.reset();
        console.log(res);
        // this.spinnerService.hide();
      }, error => {
        console.log(error);
      });
  }
    // this.register.reset();
  }

  reset() {
    // this.isSubmitted = false;
    this.enquiryForm.reset();

  }  

  public myfunc(event: Event) {
    // carouselLoad will trigger this funnction when your load value reaches
    // it is helps to load the data by parts to increase the performance of the app
    // must use feature to all carousel
  }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }
  openUmbrCover() {
    this.isVisible = true;
    this.oumbkp.style.width = "0";
    this.uc.style.width = "400px";
    this.uc.style.paddingLeft = "10px";
    this.oumbkp.style.paddingLeft = "0px";
  }

  closeUmbrCover() {
  this.uc.style.width = "0px";
    this.uc.style.paddingLeft = "0px";
    this.cumbc.style.width = "0";
    this.cumbc.style.paddingLeft = "0px";
  }


  openUmbrKeyPoints() {

    this.uc.style.width = "0";
    this.oumbkp.style.width = "400px";
    this.oumbkp.style.paddingLeft = "10px";
    this.cumbc.style.paddingLeft = "0px";

  }

  closeUmbrKeyPoints() {
    // var cumbkp = document.getElementById("umbrellakeyPoints");
    this.oumbkp.style.width = "0";
    this.oumbkp.style.paddingLeft = "0";
  }


  toggle() {
    console.log("inside toggle");
    $('#sidebar').toggleClass('active');
  }

  cover() {
    $('#cover').toggleClass('active');
  }
  homeUmbrella() {
    console.log("home umbrella");
    this.craft = false;
    this.motor = false;
    this.travel = false;
    this.umbrella = true;

    this.personal = false;
    this.individual = false;
    this.fireAllied = false;
    this.propertyAllRisk = false;
    this.businessInterupption =false;
    this.marineHull = false;
    this.marineCargo = false;
    this.piIns = false;
    this.aviationIns = false;
    this.shipRepairers = false;
    this.contractorAllRiskIns = false;
    this.erectionAllRiskIns = false;
    this.machineryAllRiskIns = false;
    this.machineryBreakdownIns = false;
    this.contractorPlantMachineryIns = false;
    this.deteriorationStockIns = false;
    this.machineryLossProfitsIns = false;
    this.publicLiabilityIns = false;
    this.employerLiabilityIns = false;
    this.productsLiabilityIns = false
    this.haulierLiabilityIns = false;
    this.moneyIns = false;
    this.fidelityGuaranteeIns = false;
    this.hotelPlusIns = false;
    this.goldPlusIns = false;
    this.electronicEquipmentIns = false;
    this.professionalIndemnityIns = false;
    this.contingencyIns = false;
    this.creditLifeCreditShieldIns = false;
    this.bondIns =false;
    this.terrorismSabotageIns = false;
    this.medicalMalpracticeIns = false;
    this.bankersBlanketIns = false;
    this.motorIns = false;
    this.groupLifeIns = false;
    this.groupMedicalIns = false;
    this.groupLifeIns = false;
    this.individualLifeIns = false;
    this.endowmentLifeInsProducts = false;
    this.moneyBackLifeInsProducts = false;
    this.educationLifeInsProducts = false;
    this.termLifeInsProducts = false;
    this.unitLinkedLifeProductsUniqueFeatures = false;
    this.pensionPlanswithUniqueFeaturesIns = false;
    this.wealthManagementSol = false;
    this.keyManIns = false;
    this.riskManag = false;
    this.insuranceConsult = false;
  }

  craftInsurance() {
    console.log("craftInsurance");
    this.closeUmbrKeyPoints();
    this.closeUmbrCover();
    this.umbrella = false;
    this.motor = false;
    this.travel = false;
    this.craft = true;

    this.personal = false;
    this.personalAccIns = false;
    this.individual = false;
    this.fireAllied = false;
    this.propertyAllRisk = false;
    this.businessInterupption =false;
    this.marineHull = false;
    this.marineCargo = false;
    this.piIns = false;
    this.aviationIns = false;
    this.shipRepairers = false;
    this.contractorAllRiskIns = false;
    this.erectionAllRiskIns = false;
    this.machineryAllRiskIns = false;
    this.machineryBreakdownIns = false;
    this.contractorPlantMachineryIns = false;
    this.deteriorationStockIns = false;
    this.machineryLossProfitsIns = false;
    this.publicLiabilityIns = false;
    this.employerLiabilityIns = false;
    this.productsLiabilityIns = false
    this.haulierLiabilityIns = false;
    this.moneyIns = false;
    this.fidelityGuaranteeIns = false;
    this.hotelPlusIns = false;
    this.goldPlusIns = false;
    this.electronicEquipmentIns = false;
    this.professionalIndemnityIns = false;
    this.contingencyIns = false;
    this.creditLifeCreditShieldIns = false;
    this.bondIns =false;
    this.terrorismSabotageIns = false;
    this.medicalMalpracticeIns = false;
    this.bankersBlanketIns = false;
    this.motorIns = false;
    this.groupLifeIns = false;
    this.groupMedicalIns = false;
    this.individualLifeIns = false;
    this.endowmentLifeInsProducts = false;
    this.moneyBackLifeInsProducts = false;
    this.educationLifeInsProducts = false;
    this.termLifeInsProducts = false;
    this.unitLinkedLifeProductsUniqueFeatures = false;
    this.pensionPlanswithUniqueFeaturesIns = false;
    this.wealthManagementSol = false;
    this.keyManIns = false;
    this.riskManag = false;
    this.insuranceConsult = false;
  }

  motorInsurance() {
    this.umbrella = false;
    this.craft = false;
    this.motor = true;

    this.travel = false;
    this.personal = false;
    this.personalAccIns = false;
    this.individual = false;
    this.fireAllied = false;
    this.propertyAllRisk = false;
    this.businessInterupption =false;
    this.marineHull = false;
    this.marineCargo = false;
    this.piIns = false;
    this.aviationIns = false;
    this.shipRepairers = false;
    this.contractorAllRiskIns = false;
    this.erectionAllRiskIns = false;
    this.machineryAllRiskIns = false;
    this.machineryBreakdownIns = false;
    this.contractorPlantMachineryIns = false;
    this.deteriorationStockIns = false;
    this.machineryLossProfitsIns = false;
    this.publicLiabilityIns = false;
    this.employerLiabilityIns = false;
    this.productsLiabilityIns = false
    this.haulierLiabilityIns = false;
    this.moneyIns = false;
    this.fidelityGuaranteeIns = false;
    this.hotelPlusIns = false;
    this.goldPlusIns = false;
    this.electronicEquipmentIns = false;
    this.professionalIndemnityIns = false;
    this.contingencyIns = false;
    this.creditLifeCreditShieldIns = false;
    this.bondIns =false;
    this.terrorismSabotageIns = false;
    this.medicalMalpracticeIns = false;
    this.bankersBlanketIns = false;
    this.motorIns = false;
    this.groupLifeIns = false;
    this.groupMedicalIns = false;
    this.individualLifeIns = false;
    this.endowmentLifeInsProducts = false;
    this.moneyBackLifeInsProducts = false;
    this.educationLifeInsProducts = false;
    this.termLifeInsProducts = false;
    this.unitLinkedLifeProductsUniqueFeatures = false;
    this.pensionPlanswithUniqueFeaturesIns = false;
    this.wealthManagementSol = false;
    this.keyManIns = false;
    this.riskManag = false;
    this.insuranceConsult = false;

  }

  travelInsurance() {
    this.umbrella = false;
    this.craft = false;
    this.motor = false;
    this.travel = true;

    this.personal = false;
    this.personalAccIns = false;
    this.individual = false;
    this.fireAllied = false;
    this.propertyAllRisk = false;
    this.businessInterupption =false;
    this.marineHull = false;
    this.marineCargo = false;
    this.piIns = false;
    this.aviationIns = false;
    this.shipRepairers = false;
    this.contractorAllRiskIns = false;
    this.erectionAllRiskIns = false;
    this.machineryAllRiskIns = false;
    this.machineryBreakdownIns = false;
    this.contractorPlantMachineryIns = false;
    this.deteriorationStockIns = false;
    this.machineryLossProfitsIns = false;
    this.publicLiabilityIns = false;
    this.employerLiabilityIns = false;
    this.productsLiabilityIns = false
    this.haulierLiabilityIns = false;
    this.moneyIns = false;
    this.fidelityGuaranteeIns = false;
    this.hotelPlusIns = false;
    this.goldPlusIns = false;
    this.electronicEquipmentIns = false;
    this.professionalIndemnityIns = false;
    this.contingencyIns = false;
    this.creditLifeCreditShieldIns = false;
    this.bondIns =false;
    this.terrorismSabotageIns = false;
    this.medicalMalpracticeIns = false;
    this.bankersBlanketIns = false;
    this.motorIns = false;
    this.groupLifeIns = false;
    this.groupMedicalIns = false;
    this.individualLifeIns = false;
    this.endowmentLifeInsProducts = false;
    this.moneyBackLifeInsProducts = false;
    this.educationLifeInsProducts = false;
    this.termLifeInsProducts = false;
    this.unitLinkedLifeProductsUniqueFeatures = false;
    this.pensionPlanswithUniqueFeaturesIns = false;
    this.wealthManagementSol = false;
    this.keyManIns = false;
    this.riskManag = false;
    this.insuranceConsult = false;
  }
  personalAccidentInsurance() {

   this.umbrella = false;
    this.craft = false;
    this.motor = false;
    this.travel = false;
    this.personalAccIns = true;

    this.individual = false;
    this.fireAllied = false;
    this.propertyAllRisk = false;
    this.businessInterupption =false;
    this.marineHull = false;
    this.marineCargo = false;
    this.piIns = false;
    this.aviationIns = false;
    this.shipRepairers = false;
    this.contractorAllRiskIns = false;
    this.erectionAllRiskIns = false;
    this.machineryAllRiskIns = false;
    this.machineryBreakdownIns = false;
    this.contractorPlantMachineryIns = false;
    this.deteriorationStockIns = false;
    this.machineryLossProfitsIns = false;
    this.publicLiabilityIns = false;
    this.employerLiabilityIns = false;
    this.productsLiabilityIns = false
    this.haulierLiabilityIns = false;
    this.moneyIns = false;
    this.fidelityGuaranteeIns = false;
    this.hotelPlusIns = false;
    this.goldPlusIns = false;
    this.electronicEquipmentIns = false;
    this.professionalIndemnityIns = false;
    this.contingencyIns = false;
    this.creditLifeCreditShieldIns = false;
    this.bondIns =false;
    this.terrorismSabotageIns = false;
    this.medicalMalpracticeIns = false;
    this.bankersBlanketIns = false;
    this.motorIns = false;
    this.groupMedicalIns = false;
    this.groupLifeIns = false;
    this.individualLifeIns = false;
    this.endowmentLifeInsProducts = false;
    this.moneyBackLifeInsProducts = false;
    this.educationLifeInsProducts = false;
    this.termLifeInsProducts = false;
    this.unitLinkedLifeProductsUniqueFeatures = false;
    this.pensionPlanswithUniqueFeaturesIns = false;
    this.wealthManagementSol = false;
    this.keyManIns = false;
    this.riskManag = false;
    this.insuranceConsult = false;
  }

  individualMedicalInsurance() {
    this.umbrella = false;
    this.craft = false;
    this.motor = false;
    this.travel = false;
    this.personalAccIns = false;
    this.personal = false;

    this.individual = true;
    this.fireAllied = false;
    this.propertyAllRisk = false;
    this.businessInterupption =false;
    this.marineHull = false;
    this.marineCargo = false;
    this.piIns = false;
    this.aviationIns = false;
    this.shipRepairers = false;
    this.contractorAllRiskIns = false;
    this.erectionAllRiskIns = false;
    this.machineryAllRiskIns = false;
    this.machineryBreakdownIns = false;
    this.contractorPlantMachineryIns = false;
    this.deteriorationStockIns = false;
    this.machineryLossProfitsIns = false;
    this.publicLiabilityIns = false;
    this.employerLiabilityIns = false;
    this.productsLiabilityIns = false
    this.haulierLiabilityIns = false;
    this.moneyIns = false;
    this.fidelityGuaranteeIns = false;
    this.hotelPlusIns = false;
    this.goldPlusIns = false;
    this.electronicEquipmentIns = false;
    this.professionalIndemnityIns = false;
    this.contingencyIns = false;
    this.creditLifeCreditShieldIns = false;
    this.bondIns =false;
    this.terrorismSabotageIns = false;
    this.medicalMalpracticeIns = false;
    this.bankersBlanketIns = false;
    this.motorIns = false;
    this.groupMedicalIns = false;
    this.groupLifeIns = false;
    this.individualLifeIns = false;
    this.endowmentLifeInsProducts = false;
    this.moneyBackLifeInsProducts = false;
    this.educationLifeInsProducts = false;
    this.termLifeInsProducts = false;
    this.unitLinkedLifeProductsUniqueFeatures = false;
    this.pensionPlanswithUniqueFeaturesIns = false;
    this.wealthManagementSol = false;
    this.keyManIns = false;
    this.riskManag = false;
    this.insuranceConsult = false;
  }

fireAlliedPerils() {
  this.personalAccIns = false;
    this.travel = false;
    this.motor = false;
    this.umbrella = false;
    this.craft = false;
    this.personal = false;
    this.individual = false;
    this.fireAllied = true;

    this.propertyAllRisk = false;
    this.businessInterupption =false;
    this.marineHull = false;
    this.marineCargo = false;
    this.piIns = false;
    this.aviationIns = false;
    this.shipRepairers = false;
    this.contractorAllRiskIns = false;
    this.erectionAllRiskIns = false;
    this.machineryAllRiskIns = false;
    this.machineryBreakdownIns = false;
    this.contractorPlantMachineryIns = false;
    this.deteriorationStockIns = false;
    this.machineryLossProfitsIns = false;
    this.publicLiabilityIns = false;
    this.employerLiabilityIns = false;
    this.productsLiabilityIns = false
    this.haulierLiabilityIns = false;
    this.moneyIns = false;
    this.fidelityGuaranteeIns = false;
    this.hotelPlusIns = false;
    this.goldPlusIns = false;
    this.electronicEquipmentIns = false;
    this.professionalIndemnityIns = false;
    this.contingencyIns = false;
    this.creditLifeCreditShieldIns = false;
    this.bondIns =false;
    this.terrorismSabotageIns = false;
    this.medicalMalpracticeIns = false;
    this.bankersBlanketIns = false;
    this.motorIns = false;
    this.groupMedicalIns = false;
    this.groupLifeIns = false;
    this.individualLifeIns = false;
    this.endowmentLifeInsProducts = false;
    this.moneyBackLifeInsProducts = false;
    this.educationLifeInsProducts = false;
    this.termLifeInsProducts = false;
    this.unitLinkedLifeProductsUniqueFeatures = false;
    this.pensionPlanswithUniqueFeaturesIns = false;
    this.wealthManagementSol = false;
    this.keyManIns = false;
    this.riskManag = false;
    this.insuranceConsult = false;
}

propertyAllRiskIns() {
  this.personalAccIns = false;
    this.travel = false;
    this.motor = false;
    this.umbrella = false;
    this.craft = false;
    this.personal = false;
    this.individual = false;
    this.fireAllied = false;
    this.propertyAllRisk = true;

    this.businessInterupption =false;
    this.marineHull = false;
    this.marineCargo = false;
    this.piIns = false;
    this.aviationIns = false;
    this.shipRepairers = false;
    this.contractorAllRiskIns = false;
    this.erectionAllRiskIns = false;
    this.machineryAllRiskIns = false;
    this.machineryBreakdownIns = false;
    this.contractorPlantMachineryIns = false;
    this.deteriorationStockIns = false;
    this.machineryLossProfitsIns = false;
    this.publicLiabilityIns = false;
    this.employerLiabilityIns = false;
    this.productsLiabilityIns = false
    this.haulierLiabilityIns = false;
    this.moneyIns = false;
    this.fidelityGuaranteeIns = false;
    this.hotelPlusIns = false;
    this.goldPlusIns = false;
    this.electronicEquipmentIns = false;
    this.professionalIndemnityIns = false;
    this.contingencyIns = false;
    this.creditLifeCreditShieldIns = false;
    this.bondIns =false;
    this.terrorismSabotageIns = false;
    this.medicalMalpracticeIns = false;
    this.bankersBlanketIns = false;
    this.motorIns = false;
    this.groupMedicalIns = false;
    this.groupLifeIns = false;
    this.individualLifeIns = false;
    this.endowmentLifeInsProducts = false;
    this.moneyBackLifeInsProducts = false;
    this.educationLifeInsProducts = false;
    this.termLifeInsProducts = false;
    this.unitLinkedLifeProductsUniqueFeatures = false;
    this.pensionPlanswithUniqueFeaturesIns = false;
    this.wealthManagementSol = false;
    this.keyManIns = false;
    this.riskManag = false;
    this.insuranceConsult = false;
}

businessInterupptionIns() {
 this.personalAccIns = false;
    this.travel = false;
    this.motor = false;
    this.umbrella = false;
    this.craft = false;
    this.personal = false;
    this.individual = false;
    this.fireAllied = false;
    this.propertyAllRisk = false;
    this.businessInterupption =true;

    this.marineHull = false;
    this.marineCargo = false;
    this.piIns = false;
    this.aviationIns = false;
    this.shipRepairers = false;
    this.contractorAllRiskIns = false;
    this.erectionAllRiskIns = false;
    this.machineryAllRiskIns = false;
    this.machineryBreakdownIns = false;
    this.contractorPlantMachineryIns = false;
    this.deteriorationStockIns = false;
    this.machineryLossProfitsIns = false;
    this.publicLiabilityIns = false;
    this.employerLiabilityIns = false;
    this.productsLiabilityIns = false
    this.haulierLiabilityIns = false;
    this.moneyIns = false;
    this.fidelityGuaranteeIns = false;
    this.hotelPlusIns = false;
    this.goldPlusIns = false;
    this.electronicEquipmentIns = false;
    this.professionalIndemnityIns = false;
    this.contingencyIns = false;
    this.creditLifeCreditShieldIns = false;
    this.bondIns =false;
    this.terrorismSabotageIns = false;
    this.medicalMalpracticeIns = false;
    this.bankersBlanketIns = false;
    this.motorIns = false;
    this.groupMedicalIns = false;
    this.groupLifeIns = false;
    this.individualLifeIns = false;
    this.endowmentLifeInsProducts = false;
    this.moneyBackLifeInsProducts = false;
    this.educationLifeInsProducts = false;
    this.termLifeInsProducts = false;
    this.unitLinkedLifeProductsUniqueFeatures = false;
    this.pensionPlanswithUniqueFeaturesIns = false;
    this.wealthManagementSol = false;
    this.keyManIns = false;
    this.riskManag = false;
    this.insuranceConsult = false;
}

marineHullIns() {
 this.personalAccIns = false;
    this.travel = false;
    this.motor = false;
    this.umbrella = false;
    this.craft = false;
    this.personal = false;
    this.individual = false;
    this.fireAllied = false;
    this.propertyAllRisk = false;
    this.businessInterupption =false;
    this.marineHull =true;

    this.marineCargo = false;
    this.piIns = false;
    this.aviationIns = false;
    this.shipRepairers = false;
    this.contractorAllRiskIns = false;
    this.erectionAllRiskIns = false;
    this.machineryAllRiskIns = false;
    this.machineryBreakdownIns = false;
    this.contractorPlantMachineryIns = false;
    this.deteriorationStockIns = false;
    this.machineryLossProfitsIns = false;
    this.publicLiabilityIns = false;
    this.employerLiabilityIns = false;
    this.productsLiabilityIns = false
    this.haulierLiabilityIns = false;
    this.moneyIns = false;
    this.fidelityGuaranteeIns = false;
    this.hotelPlusIns = false;
    this.goldPlusIns = false;
    this.electronicEquipmentIns = false;
    this.professionalIndemnityIns = false;
    this.contingencyIns = false;
    this.creditLifeCreditShieldIns = false;
    this.bondIns =false;
    this.terrorismSabotageIns = false;
    this.medicalMalpracticeIns = false;
    this.bankersBlanketIns = false;
    this.motorIns = false;
    this.groupMedicalIns = false;
    this.groupLifeIns = false;
    this.individualLifeIns = false;
    this.endowmentLifeInsProducts = false;
    this.moneyBackLifeInsProducts = false;
    this.educationLifeInsProducts = false;
    this.termLifeInsProducts = false;
    this.unitLinkedLifeProductsUniqueFeatures = false;
    this.pensionPlanswithUniqueFeaturesIns = false;
    this.wealthManagementSol = false;
    this.keyManIns = false;
    this.riskManag = false;
    this.insuranceConsult = false;
}

marineCargoIns() {
 this.personalAccIns = false;
    this.travel = false;
    this.motor = false;
    this.umbrella = false;
    this.craft = false;
    this.personal = false;
    this.individual = false;
    this.fireAllied = false;
    this.propertyAllRisk = false;
    this.businessInterupption =false;
    this.marineHull = false;
    this.marineCargo =true;

    this.piIns = false;
    this.aviationIns = false;
    this.shipRepairers = false;
    this.contractorAllRiskIns = false;
    this.erectionAllRiskIns = false;
    this.machineryAllRiskIns = false;
    this.machineryBreakdownIns = false;
    this.contractorPlantMachineryIns = false;
    this.deteriorationStockIns = false;
    this.machineryLossProfitsIns = false;
    this.publicLiabilityIns = false;
    this.employerLiabilityIns = false;
    this.productsLiabilityIns = false
    this.haulierLiabilityIns = false;
    this.moneyIns = false;
    this.fidelityGuaranteeIns = false;
    this.hotelPlusIns = false;
    this.goldPlusIns = false;
    this.electronicEquipmentIns = false;
    this.professionalIndemnityIns = false;
    this.contingencyIns = false;
    this.creditLifeCreditShieldIns = false;
    this.bondIns =false;
    this.terrorismSabotageIns = false;
    this.medicalMalpracticeIns = false;
    this.bankersBlanketIns = false;
    this.motorIns = false;
    this.groupMedicalIns = false;
    this.groupLifeIns = false;
    this.individualLifeIns = false;
    this.endowmentLifeInsProducts = false;
    this.moneyBackLifeInsProducts = false;
    this.educationLifeInsProducts = false;
    this.termLifeInsProducts = false;
    this.unitLinkedLifeProductsUniqueFeatures = false;
    this.pensionPlanswithUniqueFeaturesIns = false;
    this.wealthManagementSol = false;
    this.keyManIns = false;
    this.riskManag = false;
}
piInsurance() {
    this.personalAccIns = false;
    this.travel = false;
    this.motor = false;
    this.umbrella = false;
    this.craft = false;
    this.personal = false;
    this.individual = false;
    this.fireAllied = false;
    this.propertyAllRisk = false;
    this.businessInterupption =false;
    this.marineHull = false;
    this.marineCargo = false;
    this.piIns = true;


    this.aviationIns = false;
    this.shipRepairers = false;
    this.contractorAllRiskIns = false;
    this.erectionAllRiskIns = false;
    this.machineryAllRiskIns = false;
    this.machineryBreakdownIns = false;
    this.contractorPlantMachineryIns = false;
    this.deteriorationStockIns = false;
    this.machineryLossProfitsIns = false;
    this.publicLiabilityIns = false;
    this.employerLiabilityIns = false;
    this.productsLiabilityIns = false
    this.haulierLiabilityIns = false;
    this.moneyIns = false;
    this.fidelityGuaranteeIns = false;
    this.hotelPlusIns = false;
    this.goldPlusIns = false;
    this.electronicEquipmentIns = false;
    this.professionalIndemnityIns = false;
    this.contingencyIns = false;
    this.creditLifeCreditShieldIns = false;
    this.bondIns =false;
    this.terrorismSabotageIns = false;
    this.medicalMalpracticeIns = false;
    this.bankersBlanketIns = false;
    this.motorIns = false;
    this.groupMedicalIns = false;
    this.groupLifeIns = false;
    this.individualLifeIns = false;
    this.endowmentLifeInsProducts = false;
    this.moneyBackLifeInsProducts = false;
    this.educationLifeInsProducts = false;
    this.termLifeInsProducts = false;
    this.unitLinkedLifeProductsUniqueFeatures = false;
    this.pensionPlanswithUniqueFeaturesIns = false;
    this.wealthManagementSol = false;
    this.keyManIns = false;
    this.riskManag = false;
}
aviationInsurance() {
    this.personalAccIns = false;
    this.travel = false;
    this.motor = false;
    this.umbrella = false;
    this.craft = false;
    this.personal = false;
    this.individual = false;
    this.fireAllied = false;
    this.propertyAllRisk = false;
    this.businessInterupption =false;
    this.marineHull = false;
    this.marineCargo = false;
    this.piIns = false;
    this.aviationIns =true;

    this.shipRepairers = false;
    this.contractorAllRiskIns = false;
    this.erectionAllRiskIns = false;
    this.machineryAllRiskIns = false;
    this.machineryBreakdownIns = false;
    this.contractorPlantMachineryIns = false;
    this.deteriorationStockIns = false;
    this.machineryLossProfitsIns = false;
    this.publicLiabilityIns = false;
    this.employerLiabilityIns = false;
    this.productsLiabilityIns = false
    this.haulierLiabilityIns = false;
    this.moneyIns = false;
    this.fidelityGuaranteeIns = false;
    this.hotelPlusIns = false;
    this.goldPlusIns = false;
    this.electronicEquipmentIns = false;
    this.professionalIndemnityIns = false;
    this.contingencyIns = false;
    this.creditLifeCreditShieldIns = false;
    this.bondIns =false;
    this.terrorismSabotageIns = false;
    this.medicalMalpracticeIns = false;
    this.bankersBlanketIns = false;
    this.motorIns = false;
    this.groupMedicalIns = false;
    this.groupLifeIns = false;
    this.individualLifeIns = false;
    this.endowmentLifeInsProducts = false;
    this.moneyBackLifeInsProducts = false;
    this.educationLifeInsProducts = false;
    this.termLifeInsProducts = false;
    this.unitLinkedLifeProductsUniqueFeatures = false;
    this.pensionPlanswithUniqueFeaturesIns = false;
    this.wealthManagementSol = false;
    this.keyManIns = false;
    this.riskManag = false;
    this.insuranceConsult =false;
}
shipRepairersLiabilityInsurance() {
    this.personalAccIns = false;
    this.travel = false;
    this.motor = false;
    this.umbrella = false;
    this.craft = false;
    this.personal = false;
    this.individual = false;
    this.fireAllied = false;
    this.propertyAllRisk = false;
    this.businessInterupption =false;
    this.marineHull = false;
    this.marineCargo = false;
    this.piIns = false;
    this.aviationIns = false;
    this.shipRepairers =true;


    this.contractorAllRiskIns = false;
    this.erectionAllRiskIns = false;
    this.machineryAllRiskIns = false;
    this.machineryBreakdownIns = false;
    this.contractorPlantMachineryIns = false;
    this.deteriorationStockIns = false;
    this.machineryLossProfitsIns = false;
    this.publicLiabilityIns = false;
    this.employerLiabilityIns = false;
    this.productsLiabilityIns = false
    this.haulierLiabilityIns = false;
    this.moneyIns = false;
    this.fidelityGuaranteeIns = false;
    this.hotelPlusIns = false;
    this.goldPlusIns = false;
    this.electronicEquipmentIns = false;
    this.professionalIndemnityIns = false;
    this.contingencyIns = false;
    this.creditLifeCreditShieldIns = false;
    this.bondIns =false;
    this.terrorismSabotageIns = false;
    this.medicalMalpracticeIns = false;
    this.bankersBlanketIns = false;
    this.motorIns = false;
    this.groupMedicalIns = false;
    this.groupLifeIns = false;
    this.individualLifeIns = false;
    this.endowmentLifeInsProducts = false;
    this.moneyBackLifeInsProducts = false;
    this.educationLifeInsProducts = false;
    this.termLifeInsProducts = false;
    this.unitLinkedLifeProductsUniqueFeatures = false;
    this.pensionPlanswithUniqueFeaturesIns = false;
    this.wealthManagementSol = false;
    this.keyManIns = false;
    this.riskManag = false;
    this.insuranceConsult =false;
}
contractorAllRiskInsurance() {
    this.personalAccIns = false;
    this.travel = false;
    this.motor = false;
    this.umbrella = false;
    this.craft = false;
    this.personal = false;
    this.individual = false;
    this.fireAllied = false;
    this.propertyAllRisk = false;
    this.businessInterupption =false;
    this.marineHull = false;
    this.marineCargo = false;
    this.piIns = false;
    this.aviationIns = false;
    this.shipRepairers = false;
    this.contractorAllRiskIns = true;


    this.erectionAllRiskIns = false;
    this.machineryAllRiskIns = false;
    this.machineryBreakdownIns = false;
    this.contractorPlantMachineryIns = false;
    this.deteriorationStockIns = false;
    this.machineryLossProfitsIns = false;
    this.publicLiabilityIns = false;
    this.employerLiabilityIns = false;
    this.productsLiabilityIns = false
    this.haulierLiabilityIns = false;
    this.moneyIns = false;
    this.fidelityGuaranteeIns = false;
    this.hotelPlusIns = false;
    this.goldPlusIns = false;
    this.electronicEquipmentIns = false;
    this.professionalIndemnityIns = false;
    this.contingencyIns = false;
    this.creditLifeCreditShieldIns = false;
    this.bondIns =false;
    this.terrorismSabotageIns = false;
    this.medicalMalpracticeIns = false;
    this.bankersBlanketIns = false;
    this.motorIns = false;
    this.groupMedicalIns = false;
    this.groupLifeIns = false;
    this.individualLifeIns = false;
    this.endowmentLifeInsProducts = false;
    this.moneyBackLifeInsProducts = false;
    this.educationLifeInsProducts = false;
    this.termLifeInsProducts = false;
    this.unitLinkedLifeProductsUniqueFeatures = false;
    this.pensionPlanswithUniqueFeaturesIns = false;
    this.wealthManagementSol = false;
    this.keyManIns = false;
    this.riskManag = false;
    this.insuranceConsult = false;
}

erectionAllRiskInsurance() {
    this.personalAccIns = false;
    this.travel = false;
    this.motor = false;
    this.umbrella = false;
    this.craft = false;
    this.personal = false;
    this.individual = false;
    this.fireAllied = false;
    this.propertyAllRisk = false;
    this.businessInterupption =false;
    this.marineHull = false;
    this.marineCargo = false;
    this.piIns = false;
    this.aviationIns = false;
    this.shipRepairers = false;
    this.contractorAllRiskIns = false;
    this.erectionAllRiskIns = true;


    this.machineryAllRiskIns = false;
    this.machineryBreakdownIns = false;
    this.contractorPlantMachineryIns = false;
    this.deteriorationStockIns = false;
    this.machineryLossProfitsIns = false;
    this.publicLiabilityIns = false;
    this.employerLiabilityIns = false;
    this.productsLiabilityIns = false
    this.haulierLiabilityIns = false;
    this.moneyIns = false;
    this.fidelityGuaranteeIns = false;
    this.hotelPlusIns = false;
    this.goldPlusIns = false;
    this.electronicEquipmentIns = false;
    this.professionalIndemnityIns = false;
    this.contingencyIns = false;
    this.creditLifeCreditShieldIns = false;
    this.bondIns =false;
    this.terrorismSabotageIns = false;
    this.medicalMalpracticeIns = false;
    this.bankersBlanketIns = false;
    this.motorIns = false;
    this.groupMedicalIns = false;
    this.groupLifeIns = false;
    this.individualLifeIns = false;
    this.endowmentLifeInsProducts = false;
    this.moneyBackLifeInsProducts = false;
    this.educationLifeInsProducts = false;
    this.termLifeInsProducts = false;
    this.unitLinkedLifeProductsUniqueFeatures = false;
    this.pensionPlanswithUniqueFeaturesIns = false;
    this.wealthManagementSol = false;
    this.keyManIns = false;
    this.riskManag = false;
    this.insuranceConsult = false;
}

machineryAllRiskInsurance() {
    this.personalAccIns = false;
    this.travel = false;
    this.motor = false;
    this.umbrella = false;
    this.craft = false;
    this.personal = false;
    this.individual = false;
    this.fireAllied = false;
    this.propertyAllRisk = false;
    this.businessInterupption =false;
    this.marineHull = false;
    this.marineCargo = false;
    this.piIns = false;
    this.aviationIns = false;
    this.shipRepairers = false;
    this.contractorAllRiskIns = false;
    this.erectionAllRiskIns = false;
    this.machineryAllRiskIns = true;


    this.machineryBreakdownIns = false;
    this.contractorPlantMachineryIns = false;
    this.deteriorationStockIns = false;
    this.machineryLossProfitsIns = false;
    this.publicLiabilityIns = false;
    this.employerLiabilityIns = false;
    this.productsLiabilityIns = false
    this.haulierLiabilityIns = false;
    this.moneyIns = false;
    this.fidelityGuaranteeIns = false;
    this.hotelPlusIns = false;
    this.goldPlusIns = false;
    this.electronicEquipmentIns = false;
    this.professionalIndemnityIns = false;
    this.contingencyIns = false;
    this.creditLifeCreditShieldIns = false;
    this.bondIns =false;
    this.terrorismSabotageIns = false;
    this.medicalMalpracticeIns = false;
    this.bankersBlanketIns = false;
    this.motorIns = false;
    this.groupMedicalIns = false;
    this.groupLifeIns = false;
    this.individualLifeIns = false;
    this.endowmentLifeInsProducts = false;
    this.moneyBackLifeInsProducts = false;
    this.educationLifeInsProducts = false;
    this.termLifeInsProducts = false;
    this.unitLinkedLifeProductsUniqueFeatures = false;
    this.pensionPlanswithUniqueFeaturesIns = false;
    this.wealthManagementSol = false;
    this.keyManIns = false;
    this.riskManag = false;
    this.insuranceConsult = false;
}


machineryBreakdownInsurance() {
    this.personalAccIns = false;
    this.travel = false;
    this.motor = false;
    this.umbrella = false;
    this.craft = false;
    this.personal = false;

    this.individual = false;
    this.fireAllied = false;
    this.propertyAllRisk = false;
    this.businessInterupption =false;
    this.marineHull = false;
    this.marineCargo = false;
    this.piIns = false;
    this.aviationIns = false;
    this.shipRepairers = false;
    this.contractorAllRiskIns = false;
    this.erectionAllRiskIns = false;
    this.machineryAllRiskIns = false;
    this.machineryBreakdownIns = true;

    this.contractorPlantMachineryIns = false;
    this.deteriorationStockIns = false;
    this.machineryLossProfitsIns = false;
    this.publicLiabilityIns = false;
    this.employerLiabilityIns = false;
    this.productsLiabilityIns = false;
    this.haulierLiabilityIns = false;
    this.moneyIns = false;
    this.fidelityGuaranteeIns = false;
    this.hotelPlusIns = false;
    this.goldPlusIns = false;
    this.electronicEquipmentIns = false;
    this.professionalIndemnityIns = false;
    this.contingencyIns = false;
    this.creditLifeCreditShieldIns = false;
    this.bondIns =false;
    this.terrorismSabotageIns = false;
    this.medicalMalpracticeIns = false;
    this.bankersBlanketIns = false;
    this.motorIns = false;
    this.groupMedicalIns = false;
    this.groupLifeIns = false;
    this.individualLifeIns = false;
    this.endowmentLifeInsProducts = false;
    this.moneyBackLifeInsProducts = false;
    this.educationLifeInsProducts = false;
    this.termLifeInsProducts = false;
    this.unitLinkedLifeProductsUniqueFeatures = false;
    this.pensionPlanswithUniqueFeaturesIns = false;
    this.wealthManagementSol = false;
    this.keyManIns = false;
    this.riskManag = false;
}

contractorPlantMachineryInsurance(){
    this.personalAccIns = false;
    this.travel = false;
    this.motor = false;
    this.umbrella = false;
    this.craft = false;
    this.personal = false;
    this.individual = false;
    this.fireAllied = false;
    this.propertyAllRisk = false;
    this.businessInterupption =false;
    this.marineHull = false;
    this.marineCargo = false;
    this.piIns = false;
    this.aviationIns = false;
    this.shipRepairers = false;
    this.contractorAllRiskIns = false;
    this.erectionAllRiskIns = false;
    this.machineryAllRiskIns = false;
    this.machineryBreakdownIns = false;
    this.contractorPlantMachineryIns = true;

    this.deteriorationStockIns = false;
    this.machineryLossProfitsIns = false;
    this.publicLiabilityIns = false;
    this.employerLiabilityIns = false;
    this.productsLiabilityIns = false
    this.haulierLiabilityIns = false;
    this.moneyIns = false;
    this.fidelityGuaranteeIns = false;
    this.hotelPlusIns = false;
    this.goldPlusIns = false;
    this.electronicEquipmentIns = false;
    this.professionalIndemnityIns = false;
    this.contingencyIns = false;
    this.creditLifeCreditShieldIns = false;
    this.bondIns =false;
    this.terrorismSabotageIns = false;
    this.medicalMalpracticeIns = false;
    this.bankersBlanketIns = false;
    this.motorIns = false;
    this.groupMedicalIns = false;
    this.groupLifeIns = false;
    this.individualLifeIns = false;
    this.endowmentLifeInsProducts = false;
    this.moneyBackLifeInsProducts = false;
    this.educationLifeInsProducts = false;
    this.termLifeInsProducts = false;
    this.unitLinkedLifeProductsUniqueFeatures = false;
    this.pensionPlanswithUniqueFeaturesIns = false;
    this.wealthManagementSol = false;
    this.keyManIns = false;
    this.riskManag = false;
    this.insuranceConsult = false;
}

deteriorationStockInsurance(){
    this.personalAccIns = false;
    this.travel = false;
    this.motor = false;
    this.umbrella = false;
    this.craft = false;
    this.personal = false;
    this.individual = false;
    this.fireAllied = false;
    this.propertyAllRisk = false;
    this.businessInterupption =false;
    this.marineHull = false;
    this.marineCargo = false;
    this.piIns = false;
    this.aviationIns = false;
    this.shipRepairers = false;
    this.contractorAllRiskIns = false;
    this.erectionAllRiskIns = false;
    this.machineryAllRiskIns = false;
    this.machineryBreakdownIns = false;
    this.contractorPlantMachineryIns = false;
    this.deteriorationStockIns = true;

    this.machineryLossProfitsIns = false;
    this.publicLiabilityIns = false;
    this.employerLiabilityIns = false;
    this.productsLiabilityIns = false
    this.haulierLiabilityIns = false;
    this.moneyIns = false;
    this.fidelityGuaranteeIns = false;
    this.hotelPlusIns = false;
    this.goldPlusIns = false;
    this.electronicEquipmentIns = false;
    this.professionalIndemnityIns = false;
    this.contingencyIns = false;
    this.creditLifeCreditShieldIns = false;
    this.bondIns =false;
    this.terrorismSabotageIns = false;
    this.medicalMalpracticeIns = false;
    this.bankersBlanketIns = false;
    this.motorIns = false;
    this.groupMedicalIns = false;
    this.groupLifeIns = false;
    this.individualLifeIns = false;
    this.endowmentLifeInsProducts = false;
    this.moneyBackLifeInsProducts = false;
    this.educationLifeInsProducts = false;
    this.termLifeInsProducts = false;
    this.unitLinkedLifeProductsUniqueFeatures = false;
    this.pensionPlanswithUniqueFeaturesIns = false;
    this.wealthManagementSol = false;
    this.keyManIns = false;
    this.riskManag = false;
    this.insuranceConsult = false;
}

machineryLossProfitsInsurance(){
    this.personalAccIns = false;
    this.travel = false;
    this.motor = false;
    this.umbrella = false;
    this.craft = false;
    this.personal = false;
    this.individual = false;
    this.fireAllied = false;
    this.propertyAllRisk = false;
    this.businessInterupption =false;
    this.marineHull = false;
    this.marineCargo = false;
    this.piIns = false;
    this.aviationIns = false;
    this.shipRepairers = false;
    this.contractorAllRiskIns = false;
    this.erectionAllRiskIns = false;
    this.machineryAllRiskIns = false;
    this.machineryBreakdownIns = false;
    this.contractorPlantMachineryIns = false;
    this.deteriorationStockIns = false;
    this.generalThirdPartyLiabilityIns = false;
    this.machineryLossProfitsIns = true;

    this.publicLiabilityIns = false;
    this.employerLiabilityIns = false;
    this.productsLiabilityIns = false
    this.haulierLiabilityIns = false;
    this.moneyIns = false;
    this.fidelityGuaranteeIns = false;
    this.hotelPlusIns = false;
    this.goldPlusIns = false;
    this.electronicEquipmentIns = false;
    this.professionalIndemnityIns = false;
    this.contingencyIns = false;
    this.creditLifeCreditShieldIns = false;
    this.bondIns =false;
    this.terrorismSabotageIns = false;
    this.medicalMalpracticeIns = false;
    this.bankersBlanketIns = false;
    this.motorIns = false;
    this.groupMedicalIns = false;
    this.groupLifeIns = false;
    this.individualLifeIns = false;
    this.endowmentLifeInsProducts = false;
    this.moneyBackLifeInsProducts = false;
    this.educationLifeInsProducts = false;
    this.termLifeInsProducts = false;
    this.unitLinkedLifeProductsUniqueFeatures = false;
    this.pensionPlanswithUniqueFeaturesIns = false;
    this.wealthManagementSol = false;
    this.keyManIns = false;
    this.riskManag = false;
    this.insuranceConsult = false;
}


publicLiabilityInsurance(){
    this.personalAccIns = false;
    this.travel = false;
    this.motor = false;
    this.umbrella = false;
    this.craft = false;
    this.personal = false;
    this.individual = false;
    this.fireAllied = false;
    this.propertyAllRisk = false;
    this.businessInterupption =false;
    this.marineHull = false;
    this.marineCargo = false;
    this.piIns = false;
    this.aviationIns = false;
    this.shipRepairers = false;
    this.contractorAllRiskIns = false;
    this.erectionAllRiskIns = false;
    this.machineryAllRiskIns = false;
    this.machineryBreakdownIns = false;
    this.contractorPlantMachineryIns = false;
    this.deteriorationStockIns = false;
    this.machineryLossProfitsIns = false;
    this.publicLiabilityIns = true;

    this.generalThirdPartyLiabilityIns = false;
    this.employerLiabilityIns = false;
    this.productsLiabilityIns = false
    this.haulierLiabilityIns = false;
    this.moneyIns = false;
    this.fidelityGuaranteeIns = false;
    this.hotelPlusIns = false;
    this.goldPlusIns = false;
    this.electronicEquipmentIns = false;
    this.professionalIndemnityIns = false;
    this.contingencyIns = false;
    this.creditLifeCreditShieldIns = false;
    this.bondIns =false;
    this.terrorismSabotageIns = false;
    this.medicalMalpracticeIns = false;
    this.bankersBlanketIns = false;
    this.motorIns = false;
    this.groupMedicalIns = false;
    this.groupLifeIns = false;
    this.individualLifeIns = false;
    this.endowmentLifeInsProducts = false;
    this.moneyBackLifeInsProducts = false;
    this.educationLifeInsProducts = false;
    this.termLifeInsProducts = false;
    this.unitLinkedLifeProductsUniqueFeatures = false;
    this.pensionPlanswithUniqueFeaturesIns = false;
    this.wealthManagementSol = false;
    this.keyManIns = false;
    this.riskManag = false;
    this.insuranceConsult = false;
}

generalThirdPartyLiabilityInsurance(){
    this.personalAccIns = false;
    this.travel = false;
    this.motor = false;
    this.umbrella = false;
    this.craft = false;
    this.personal = false;
    this.individual = false;
    this.fireAllied = false;
    this.propertyAllRisk = false;
    this.businessInterupption =false;
    this.marineHull = false;
    this.marineCargo = false;
    this.piIns = false;
    this.aviationIns = false;
    this.shipRepairers = false;
    this.contractorAllRiskIns = false;
    this.erectionAllRiskIns = false;
    this.machineryAllRiskIns = false;
    this.machineryBreakdownIns = false;
    this.contractorPlantMachineryIns = false;
    this.deteriorationStockIns = false;
    this.machineryLossProfitsIns = false;
    this.publicLiabilityIns = false;
    this.generalThirdPartyLiabilityIns = true;

    this.workmenCompensationIns = false;
    this.employerLiabilityIns = false;
    this.productsLiabilityIns = false
    this.haulierLiabilityIns = false;
    this.moneyIns = false;
    this.fidelityGuaranteeIns = false;
    this.hotelPlusIns = false;
    this.goldPlusIns = false;
    this.electronicEquipmentIns = false;
    this.professionalIndemnityIns = false;
    this.contingencyIns = false;
    this.creditLifeCreditShieldIns = false;
    this.bondIns =false;
    this.terrorismSabotageIns = false;
    this.medicalMalpracticeIns = false;
    this.bankersBlanketIns = false;
    this.motorIns = false;
    this.groupMedicalIns = false;
    this.groupLifeIns = false;
    this.individualLifeIns = false;
    this.endowmentLifeInsProducts = false;
    this.moneyBackLifeInsProducts = false;
    this.educationLifeInsProducts = false;
    this.termLifeInsProducts = false;
    this.unitLinkedLifeProductsUniqueFeatures = false;
    this.pensionPlanswithUniqueFeaturesIns = false;
    this.wealthManagementSol = false;
    this.keyManIns = false;
    this.riskManag = false;
    this.insuranceConsult = false;
}


workmenCompensationInsurance(){
    this.personalAccIns = false;
    this.travel = false;
    this.motor = false;
    this.umbrella = false;
    this.craft = false;
    this.personal = false;
    this.individual = false;
    this.fireAllied = false;
    this.propertyAllRisk = false;
    this.businessInterupption =false;
    this.marineHull = false;
    this.marineCargo = false;
    this.piIns = false;
    this.aviationIns = false;
    this.shipRepairers = false;
    this.contractorAllRiskIns = false;
    this.erectionAllRiskIns = false;
    this.machineryAllRiskIns = false;
    this.machineryBreakdownIns = false;
    this.contractorPlantMachineryIns = false;
    this.deteriorationStockIns = false;
    this.machineryLossProfitsIns = false;
    this.publicLiabilityIns = false;
    this.generalThirdPartyLiabilityIns = false;
    this.workmenCompensationIns = true;

    this.employerLiabilityIns = false;
    this.productsLiabilityIns = false
    this.haulierLiabilityIns = false;
    this.moneyIns = false;
    this.fidelityGuaranteeIns = false;
    this.hotelPlusIns = false;
    this.goldPlusIns = false;
    this.electronicEquipmentIns = false;
    this.professionalIndemnityIns = false;
    this.contingencyIns = false;
    this.creditLifeCreditShieldIns = false;
    this.bondIns =false;
    this.terrorismSabotageIns = false;
    this.medicalMalpracticeIns = false;
    this.bankersBlanketIns = false;
    this.motorIns = false;
    this.groupMedicalIns = false;
    this.groupLifeIns = false;
    this.individualLifeIns = false;
    this.endowmentLifeInsProducts = false;
    this.moneyBackLifeInsProducts = false;
    this.educationLifeInsProducts = false;
    this.termLifeInsProducts = false;
    this.unitLinkedLifeProductsUniqueFeatures = false;
    this.pensionPlanswithUniqueFeaturesIns = false;
    this.wealthManagementSol = false;
    this.keyManIns = false;
    this.riskManag = false;
    this.insuranceConsult = false;
}


employerLiabilityInsurance(){
    this.personalAccIns = false;
    this.travel = false;
    this.motor = false;
    this.umbrella = false;
    this.craft = false;
    this.personal = false;
    this.individual = false;
    this.fireAllied = false;
    this.propertyAllRisk = false;
    this.businessInterupption =false;
    this.marineHull = false;
    this.marineCargo = false;
    this.piIns = false;
    this.aviationIns = false;
    this.shipRepairers = false;
    this.contractorAllRiskIns = false;
    this.erectionAllRiskIns = false;
    this.machineryAllRiskIns = false;
    this.machineryBreakdownIns = false;
    this.contractorPlantMachineryIns = false;
    this.deteriorationStockIns = false;
    this.machineryLossProfitsIns = false;
    this.publicLiabilityIns = false;
    this.generalThirdPartyLiabilityIns = false;
    this.workmenCompensationIns = false;
    this.employerLiabilityIns = true;
    this.productsLiabilityIns = false
    this.haulierLiabilityIns = false;
    this.moneyIns = false;
    this.fidelityGuaranteeIns = false;
    this.hotelPlusIns = false;
    this.goldPlusIns = false;
    this.electronicEquipmentIns = false;
    this.professionalIndemnityIns = false;
    this.contingencyIns = false;
    this.creditLifeCreditShieldIns = false;
    this.bondIns =false;
    this.terrorismSabotageIns = false;
    this.medicalMalpracticeIns = false;
    this.bankersBlanketIns = false;
    this.motorIns = false;
    this.groupMedicalIns = false;
    this.groupLifeIns = false;
    this.individualLifeIns = false;
    this.endowmentLifeInsProducts = false;
    this.moneyBackLifeInsProducts = false;
    this.educationLifeInsProducts = false;
    this.termLifeInsProducts = false;
    this.unitLinkedLifeProductsUniqueFeatures = false;
    this.pensionPlanswithUniqueFeaturesIns = false;
    this.wealthManagementSol = false;
    this.keyManIns = false;
    this.riskManag = false;
    this.insuranceConsult = false;
}

productsLiabilityInsurnace(){
    this.personalAccIns = false;
    this.travel = false;
    this.motor = false;
    this.umbrella = false;
    this.craft = false;
    this.personal = false;
    this.individual = false;
    this.fireAllied = false;
    this.propertyAllRisk = false;
    this.businessInterupption =false;
    this.marineHull = false;
    this.marineCargo = false;
    this.piIns = false;
    this.aviationIns = false;
    this.shipRepairers = false;
    this.contractorAllRiskIns = false;
    this.erectionAllRiskIns = false;
    this.machineryAllRiskIns = false;
    this.machineryBreakdownIns = false;
    this.contractorPlantMachineryIns = false;
    this.deteriorationStockIns = false;
    this.machineryLossProfitsIns = false;
    this.publicLiabilityIns = false;
    this.generalThirdPartyLiabilityIns = false;
    this.workmenCompensationIns = false;
    this.employerLiabilityIns = false;
    this.productsLiabilityIns = true;
    this.haulierLiabilityIns = false;
    this.moneyIns = false;
    this.fidelityGuaranteeIns = false;
    this.hotelPlusIns = false;
    this.goldPlusIns = false;
    this.electronicEquipmentIns = false;
    this.professionalIndemnityIns = false;
    this.contingencyIns = false;
    this.creditLifeCreditShieldIns = false;
    this.bondIns =false;
    this.terrorismSabotageIns = false;
    this.medicalMalpracticeIns = false;
    this.bankersBlanketIns = false;
    this.motorIns = false;
    this.groupMedicalIns = false;
    this.groupLifeIns = false;
    this.individualLifeIns = false;
    this.endowmentLifeInsProducts = false;
    this.moneyBackLifeInsProducts = false;
    this.educationLifeInsProducts = false;
    this.termLifeInsProducts = false;
    this.unitLinkedLifeProductsUniqueFeatures = false;
    this.pensionPlanswithUniqueFeaturesIns = false;
    this.wealthManagementSol = false;
    this.keyManIns = false;
    this.riskManag = false;
    this.insuranceConsult = false;
}

haulierLiabilityInsurance() {
    this.personalAccIns = false;
    this.travel = false;
    this.motor = false;
    this.umbrella = false;
    this.craft = false;
    this.personal = false;
    this.individual = false;
    this.fireAllied = false;
    this.propertyAllRisk = false;
    this.businessInterupption =false;
    this.marineHull = false;
    this.marineCargo = false;
    this.piIns = false;
    this.aviationIns = false;
    this.shipRepairers = false;
    this.contractorAllRiskIns = false;
    this.erectionAllRiskIns = false;
    this.machineryAllRiskIns = false;
    this.machineryBreakdownIns = false;
    this.contractorPlantMachineryIns = false;
    this.deteriorationStockIns = false;
    this.machineryLossProfitsIns = false;
    this.publicLiabilityIns = false;
    this.generalThirdPartyLiabilityIns = false;
    this.workmenCompensationIns = false;
    this.employerLiabilityIns = false;
    this.productsLiabilityIns = false;
    this.haulierLiabilityIns = true;
    this.moneyIns = false;
    this.fidelityGuaranteeIns = false;
    this.hotelPlusIns = false;
    this.goldPlusIns = false;
    this.electronicEquipmentIns = false;
    this.professionalIndemnityIns = false;
    this.contingencyIns = false;
    this.creditLifeCreditShieldIns = false;
    this.bondIns =false;
    this.terrorismSabotageIns = false;
    this.medicalMalpracticeIns = false;
    this.bankersBlanketIns = false;
    this.motorIns = false;
    this.groupMedicalIns = false;
    this.groupLifeIns = false;
    this.individualLifeIns = false;
    this.endowmentLifeInsProducts = false;
    this.moneyBackLifeInsProducts = false;
    this.educationLifeInsProducts = false;
    this.termLifeInsProducts = false;
    this.unitLinkedLifeProductsUniqueFeatures = false;
    this.pensionPlanswithUniqueFeaturesIns = false;
    this.wealthManagementSol = false;
    this.keyManIns = false;
    this.riskManag = false;
    this.insuranceConsult = false;
}

moneyInsurance() {
  this.personalAccIns = false;
  this.travel = false;
  this.motor = false;
  this.umbrella = false;
  this.craft = false;
  this.personal = false;
  this.individual = false;
  this.fireAllied = false;
  this.propertyAllRisk = false;
  this.businessInterupption =false;
  this.marineHull = false;
  this.marineCargo = false;
  this.piIns = false;
  this.aviationIns = false;
  this.shipRepairers = false;
  this.contractorAllRiskIns = false;
  this.erectionAllRiskIns = false;
  this.machineryAllRiskIns = false;
  this.machineryBreakdownIns = false;
  this.contractorPlantMachineryIns = false;
  this.deteriorationStockIns = false;
  this.machineryLossProfitsIns = false;
  this.publicLiabilityIns = false;
  this.generalThirdPartyLiabilityIns = false;
  this.workmenCompensationIns = false;
  this.employerLiabilityIns = false;
  this.productsLiabilityIns = false;
  this.haulierLiabilityIns = false;
  this.moneyIns = true;
  this.fidelityGuaranteeIns = false;
  this.hotelPlusIns = false;
  this.goldPlusIns = false;
  this.electronicEquipmentIns = false;
  this.professionalIndemnityIns = false;
  this.contingencyIns = false;
  this.creditLifeCreditShieldIns = false;
  this.bondIns =false;
  this.terrorismSabotageIns = false;
  this.medicalMalpracticeIns = false;
  this.bankersBlanketIns = false;
  this.motorIns = false;
  this.groupMedicalIns = false;
  this.groupLifeIns = false;
  this.individualLifeIns = false;
  this.endowmentLifeInsProducts = false;
  this.moneyBackLifeInsProducts = false;
  this.educationLifeInsProducts = false;
  this.termLifeInsProducts = false;
  this.unitLinkedLifeProductsUniqueFeatures = false;
  this.pensionPlanswithUniqueFeaturesIns = false;
  this.wealthManagementSol = false;
  this.keyManIns = false;
  this.riskManag = false;
  this.insuranceConsult = false;
}

fidelityGuaranteeInsurance() {
  this.personalAccIns = false;
  this.travel = false;
  this.motor = false;
  this.umbrella = false;
  this.craft = false;
  this.personal = false;
  this.individual = false;
  this.fireAllied = false;
  this.propertyAllRisk = false;
  this.businessInterupption =false;
  this.marineHull = false;
  this.marineCargo = false;
  this.piIns = false;
  this.aviationIns = false;
  this.shipRepairers = false;
  this.contractorAllRiskIns = false;
  this.erectionAllRiskIns = false;
  this.machineryAllRiskIns = false;
  this.machineryBreakdownIns = false;
  this.contractorPlantMachineryIns = false;
  this.deteriorationStockIns = false;
  this.machineryLossProfitsIns = false;
  this.publicLiabilityIns = false;
  this.generalThirdPartyLiabilityIns = false;
  this.workmenCompensationIns = false;
  this.employerLiabilityIns = false;
  this.productsLiabilityIns = false;
  this.haulierLiabilityIns = false;
  this.moneyIns = false;
  this.fidelityGuaranteeIns = true;
  this.hotelPlusIns = false;
  this.goldPlusIns = false;
  this.electronicEquipmentIns = false;
  this.professionalIndemnityIns = false;
  this.contingencyIns = false;
  this.creditLifeCreditShieldIns = false;
  this.bondIns =false;
  this.terrorismSabotageIns = false;
  this.medicalMalpracticeIns = false;
  this.bankersBlanketIns = false;
  this.motorIns = false;
  this.groupMedicalIns = false;
  this.groupLifeIns = false;
  this.individualLifeIns = false;
  this.endowmentLifeInsProducts = false;
  this.moneyBackLifeInsProducts = false;
  this.educationLifeInsProducts = false;
  this.termLifeInsProducts = false;
  this.unitLinkedLifeProductsUniqueFeatures = false;
  this.pensionPlanswithUniqueFeaturesIns = false;
  this.wealthManagementSol = false;
  this.keyManIns = false;
  this.riskManag = false;
  this.insuranceConsult = false;
}

hotelPlusInsurance() {
  this.personalAccIns = false;
  this.travel = false;
  this.motor = false;
  this.umbrella = false;
  this.craft = false;
  this.personal = false;
  this.individual = false;
  this.fireAllied = false;
  this.propertyAllRisk = false;
  this.businessInterupption =false;
  this.marineHull = false;
  this.marineCargo = false;
  this.piIns = false;
  this.aviationIns = false;
  this.shipRepairers = false;
  this.contractorAllRiskIns = false;
  this.erectionAllRiskIns = false;
  this.machineryAllRiskIns = false;
  this.machineryBreakdownIns = false;
  this.contractorPlantMachineryIns = false;
  this.deteriorationStockIns = false;
  this.machineryLossProfitsIns = false;
  this.publicLiabilityIns = false;
  this.generalThirdPartyLiabilityIns = false;
  this.workmenCompensationIns = false;
  this.employerLiabilityIns = false;
  this.productsLiabilityIns = false;
  this.haulierLiabilityIns = false;
  this.moneyIns = false;
  this.fidelityGuaranteeIns = false;
  this.hotelPlusIns = true;
  this.goldPlusIns = false;
  this.electronicEquipmentIns = false;
  this.professionalIndemnityIns = false;
  this.contingencyIns = false;
  this.creditLifeCreditShieldIns = false;
  this.bondIns =false;
  this.terrorismSabotageIns = false;
  this.medicalMalpracticeIns = false;
  this.bankersBlanketIns = false;
  this.motorIns = false;
  this.groupMedicalIns = false;
  this.groupLifeIns = false;
  this.individualLifeIns = false;
  this.endowmentLifeInsProducts = false;
  this.moneyBackLifeInsProducts = false;
  this.educationLifeInsProducts = false;
  this.termLifeInsProducts = false;
  this.unitLinkedLifeProductsUniqueFeatures = false;
  this.pensionPlanswithUniqueFeaturesIns = false;
  this.wealthManagementSol = false;
  this.keyManIns = false;
  this.riskManag = false;
  this.insuranceConsult = false;
}

goldPlusInsurance() {
  this.personalAccIns = false;
  this.travel = false;
  this.motor = false;
  this.umbrella = false;
  this.craft = false;
  this.personal = false;
  this.individual = false;
  this.fireAllied = false;
  this.propertyAllRisk = false;
  this.businessInterupption =false;
  this.marineHull = false;
  this.marineCargo = false;
  this.piIns = false;
  this.aviationIns = false;
  this.shipRepairers = false;
  this.contractorAllRiskIns = false;
  this.erectionAllRiskIns = false;
  this.machineryAllRiskIns = false;
  this.machineryBreakdownIns = false;
  this.contractorPlantMachineryIns = false;
  this.deteriorationStockIns = false;
  this.machineryLossProfitsIns = false;
  this.publicLiabilityIns = false;
  this.generalThirdPartyLiabilityIns = false;
  this.workmenCompensationIns = false;
  this.employerLiabilityIns = false;
  this.productsLiabilityIns = false;
  this.haulierLiabilityIns = false;
  this.moneyIns = false;
  this.fidelityGuaranteeIns = false;
  this.hotelPlusIns = false;
  this.goldPlusIns = true;
  this.electronicEquipmentIns = false;
  this.professionalIndemnityIns = false;
  this.contingencyIns = false;
  this.creditLifeCreditShieldIns = false;
  this.bondIns =false;
  this.terrorismSabotageIns = false;
  this.medicalMalpracticeIns = false;
  this.bankersBlanketIns = false;
  this.motorIns = false;
  this.groupMedicalIns = false;
  this.groupLifeIns = false;
  this.individualLifeIns = false;
  this.endowmentLifeInsProducts = false;
  this.moneyBackLifeInsProducts = false;
  this.educationLifeInsProducts = false;
  this.termLifeInsProducts = false;
  this.unitLinkedLifeProductsUniqueFeatures = false;
  this.pensionPlanswithUniqueFeaturesIns = false;
  this.wealthManagementSol = false;
  this.keyManIns = false;
  this.riskManag = false;
  this.insuranceConsult = false;
}

electronicEquipmentInsurance() {
  this.personalAccIns = false;
  this.travel = false;
  this.motor = false;
  this.umbrella = false;
  this.craft = false;
  this.personal = false;
  this.individual = false;
  this.fireAllied = false;
  this.propertyAllRisk = false;
  this.businessInterupption =false;
  this.marineHull = false;
  this.marineCargo = false;
  this.piIns = false;
  this.aviationIns = false;
  this.shipRepairers = false;
  this.contractorAllRiskIns = false;
  this.erectionAllRiskIns = false;
  this.machineryAllRiskIns = false;
  this.machineryBreakdownIns = false;
  this.contractorPlantMachineryIns = false;
  this.deteriorationStockIns = false;
  this.machineryLossProfitsIns = false;
  this.publicLiabilityIns = false;
  this.generalThirdPartyLiabilityIns = false;
  this.workmenCompensationIns = false;
  this.employerLiabilityIns = false;
  this.productsLiabilityIns = false;
  this.haulierLiabilityIns = false;
  this.moneyIns = false;
  this.fidelityGuaranteeIns = false;
  this.hotelPlusIns = false;
  this.goldPlusIns = false;
  this.electronicEquipmentIns = true;
  this.professionalIndemnityIns = false;
  this.contingencyIns = false;
  this.creditLifeCreditShieldIns = false;
  this.bondIns =false;
  this.terrorismSabotageIns = false;
  this.medicalMalpracticeIns = false;
  this.bankersBlanketIns = false;
  this.motorIns = false;
  this.groupMedicalIns = false;
  this.groupLifeIns = false;
  this.individualLifeIns = false;
  this.endowmentLifeInsProducts = false;
  this.moneyBackLifeInsProducts = false;
  this.educationLifeInsProducts = false;
  this.termLifeInsProducts = false;
  this.unitLinkedLifeProductsUniqueFeatures = false;
  this.pensionPlanswithUniqueFeaturesIns = false;
  this.wealthManagementSol = false;
  this.keyManIns = false;
  this.riskManag = false;
  this.insuranceConsult = false;
}

professionalIndemnityInsurance() {
  this.personalAccIns = false;
  this.travel = false;
  this.motor = false;
  this.umbrella = false;
  this.craft = false;
  this.personal = false;
  this.individual = false;
  this.fireAllied = false;
  this.propertyAllRisk = false;
  this.businessInterupption =false;
  this.marineHull = false;
  this.marineCargo = false;
  this.piIns = false;
  this.aviationIns = false;
  this.shipRepairers = false;
  this.contractorAllRiskIns = false;
  this.erectionAllRiskIns = false;
  this.machineryAllRiskIns = false;
  this.machineryBreakdownIns = false;
  this.contractorPlantMachineryIns = false;
  this.deteriorationStockIns = false;
  this.machineryLossProfitsIns = false;
  this.publicLiabilityIns = false;
  this.generalThirdPartyLiabilityIns = false;
  this.workmenCompensationIns = false;
  this.employerLiabilityIns = false;
  this.productsLiabilityIns = false;
  this.haulierLiabilityIns = false;
  this.moneyIns = false;
  this.fidelityGuaranteeIns = false;
  this.hotelPlusIns = false;
  this.goldPlusIns = false;
  this.electronicEquipmentIns = false;
  this.professionalIndemnityIns = true;
  this.contingencyIns = false;
  this.creditLifeCreditShieldIns = false;
  this.bondIns =false;
  this.terrorismSabotageIns = false;
  this.medicalMalpracticeIns = false;
  this.bankersBlanketIns = false;
  this.motorIns = false;
  this.groupMedicalIns = false;
  this.groupLifeIns = false;
  this.individualLifeIns = false;
  this.endowmentLifeInsProducts = false;
  this.moneyBackLifeInsProducts = false;
  this.educationLifeInsProducts = false;
  this.termLifeInsProducts = false;
  this.unitLinkedLifeProductsUniqueFeatures = false;
  this.pensionPlanswithUniqueFeaturesIns = false;
  this.wealthManagementSol = false;
  this.keyManIns = false;
  this.riskManag = false;
  this.insuranceConsult = false;
}

contingencyInsurance() {
  this.personalAccIns = false;
  this.travel = false;
  this.motor = false;
  this.umbrella = false;
  this.craft = false;
  this.personal = false;
  this.individual = false;
  this.fireAllied = false;
  this.propertyAllRisk = false;
  this.businessInterupption =false;
  this.marineHull = false;
  this.marineCargo = false;
  this.piIns = false;
  this.aviationIns = false;
  this.shipRepairers = false;
  this.contractorAllRiskIns = false;
  this.erectionAllRiskIns = false;
  this.machineryAllRiskIns = false;
  this.machineryBreakdownIns = false;
  this.contractorPlantMachineryIns = false;
  this.deteriorationStockIns = false;
  this.machineryLossProfitsIns = false;
  this.publicLiabilityIns = false;
  this.generalThirdPartyLiabilityIns = false;
  this.workmenCompensationIns = false;
  this.employerLiabilityIns = false;
  this.productsLiabilityIns = false;
  this.haulierLiabilityIns = false;
  this.moneyIns = false;
  this.fidelityGuaranteeIns = false;
  this.hotelPlusIns = false;
  this.goldPlusIns = false;
  this.electronicEquipmentIns = false;
  this.professionalIndemnityIns = false;
  this.contingencyIns = true;
  this.creditLifeCreditShieldIns = false;
  this.bondIns =false;
  this.terrorismSabotageIns = false;
  this.medicalMalpracticeIns = false;
  this.bankersBlanketIns = false;
  this.motorIns = false;
  this.groupMedicalIns = false;
  this.groupLifeIns = false;
  this.individualLifeIns = false;
  this.endowmentLifeInsProducts = false;
  this.moneyBackLifeInsProducts = false;
  this.educationLifeInsProducts = false;
  this.termLifeInsProducts = false;
  this.unitLinkedLifeProductsUniqueFeatures = false;
  this.pensionPlanswithUniqueFeaturesIns = false;
  this.wealthManagementSol = false;
  this.keyManIns = false;
  this.riskManag = false;
  this.insuranceConsult = false;
}

creditLifeCreditShieldInsurance() {
  this.personalAccIns = false;
  this.travel = false;
  this.motor = false;
  this.umbrella = false;
  this.craft = false;
  this.personal = false;
  this.individual = false;
  this.fireAllied = false;
  this.propertyAllRisk = false;
  this.businessInterupption =false;
  this.marineHull = false;
  this.marineCargo = false;
  this.piIns = false;
  this.aviationIns = false;
  this.shipRepairers = false;
  this.contractorAllRiskIns = false;
  this.erectionAllRiskIns = false;
  this.machineryAllRiskIns = false;
  this.machineryBreakdownIns = false;
  this.contractorPlantMachineryIns = false;
  this.deteriorationStockIns = false;
  this.machineryLossProfitsIns = false;
  this.publicLiabilityIns = false;
  this.generalThirdPartyLiabilityIns = false;
  this.workmenCompensationIns = false;
  this.employerLiabilityIns = false;
  this.productsLiabilityIns = false;
  this.haulierLiabilityIns = false;
  this.moneyIns = false;
  this.fidelityGuaranteeIns = false;
  this.hotelPlusIns = false;
  this.goldPlusIns = false;
  this.electronicEquipmentIns = false;
  this.professionalIndemnityIns = false;
  this.contingencyIns = false;
  this.creditLifeCreditShieldIns = true;
  this.bondIns =false;
  this.terrorismSabotageIns = false;
  this.medicalMalpracticeIns = false;
  this.bankersBlanketIns = false;
  this.motorIns = false;
  this.groupMedicalIns = false;
  this.groupLifeIns = false;
  this.individualLifeIns = false;
  this.endowmentLifeInsProducts = false;
  this.moneyBackLifeInsProducts = false;
  this.educationLifeInsProducts = false;
  this.termLifeInsProducts = false;
  this.unitLinkedLifeProductsUniqueFeatures = false;
  this.pensionPlanswithUniqueFeaturesIns = false;
  this.wealthManagementSol = false;
  this.keyManIns = false;
  this.riskManag = false;
  this.insuranceConsult = false;
}

bondInsurance() {
  this.personalAccIns = false;
  this.travel = false;
  this.motor = false;
  this.umbrella = false;
  this.craft = false;
  this.personal = false;
  this.individual = false;
  this.fireAllied = false;
  this.propertyAllRisk = false;
  this.businessInterupption =false;
  this.marineHull = false;
  this.marineCargo = false;
  this.piIns = false;
  this.aviationIns = false;
  this.shipRepairers = false;
  this.contractorAllRiskIns = false;
  this.erectionAllRiskIns = false;
  this.machineryAllRiskIns = false;
  this.machineryBreakdownIns = false;
  this.contractorPlantMachineryIns = false;
  this.deteriorationStockIns = false;
  this.machineryLossProfitsIns = false;
  this.publicLiabilityIns = false;
  this.generalThirdPartyLiabilityIns = false;
  this.workmenCompensationIns = false;
  this.employerLiabilityIns = false;
  this.productsLiabilityIns = false;
  this.haulierLiabilityIns = false;
  this.moneyIns = false;
  this.fidelityGuaranteeIns = false;
  this.hotelPlusIns = false;
  this.goldPlusIns = false;
  this.electronicEquipmentIns = false;
  this.professionalIndemnityIns = false;
  this.contingencyIns = false;
  this.creditLifeCreditShieldIns = false;
  this.bondIns =true;
  this.terrorismSabotageIns = false;
  this.medicalMalpracticeIns = false;
  this.bankersBlanketIns = false;
  this.motorIns = false;
  this.groupMedicalIns = false;
  this.groupLifeIns = false;
  this.individualLifeIns = false;
  this.endowmentLifeInsProducts = false;
  this.moneyBackLifeInsProducts = false;
  this.educationLifeInsProducts = false;
  this.termLifeInsProducts = false;
  this.unitLinkedLifeProductsUniqueFeatures = false;
  this.pensionPlanswithUniqueFeaturesIns = false;
  this.wealthManagementSol = false;
  this.keyManIns = false;
  this.riskManag = false;
  this.insuranceConsult = false;
}

terrorismSabotageInsurance() {
  this.personalAccIns = false;
  this.travel = false;
  this.motor = false;
  this.umbrella = false;
  this.craft = false;
  this.personal = false;
  this.individual = false;
  this.fireAllied = false;
  this.propertyAllRisk = false;
  this.businessInterupption =false;
  this.marineHull = false;
  this.marineCargo = false;
  this.piIns = false;
  this.aviationIns = false;
  this.shipRepairers = false;
  this.contractorAllRiskIns = false;
  this.erectionAllRiskIns = false;
  this.machineryAllRiskIns = false;
  this.machineryBreakdownIns = false;
  this.contractorPlantMachineryIns = false;
  this.deteriorationStockIns = false;
  this.machineryLossProfitsIns = false;
  this.publicLiabilityIns = false;
  this.generalThirdPartyLiabilityIns = false;
  this.workmenCompensationIns = false;
  this.employerLiabilityIns = false;
  this.productsLiabilityIns = false;
  this.haulierLiabilityIns = false;
  this.moneyIns = false;
  this.fidelityGuaranteeIns = false;
  this.hotelPlusIns = false;
  this.goldPlusIns = false;
  this.electronicEquipmentIns = false;
  this.professionalIndemnityIns = false;
  this.contingencyIns = false;
  this.creditLifeCreditShieldIns = false;
  this.bondIns = false;
  this.terrorismSabotageIns = true;
  this.medicalMalpracticeIns = false;
  this.bankersBlanketIns = false;
  this.motorIns = false;
  this.groupMedicalIns = false;
  this.groupLifeIns = false;
  this.individualLifeIns = false;
  this.endowmentLifeInsProducts = false;
  this.moneyBackLifeInsProducts = false;
  this.educationLifeInsProducts = false;
  this.termLifeInsProducts = false;
  this.unitLinkedLifeProductsUniqueFeatures = false;
  this.pensionPlanswithUniqueFeaturesIns = false;
  this.wealthManagementSol = false;
  this.keyManIns = false;
  this.riskManag = false;
  this.insuranceConsult = false;
}

medicalMalpracticeInsurance() {
  this.personalAccIns = false;
  this.travel = false;
  this.motor = false;
  this.umbrella = false;
  this.craft = false;
  this.personal = false;
  this.individual = false;
  this.fireAllied = false;
  this.propertyAllRisk = false;
  this.businessInterupption =false;
  this.marineHull = false;
  this.marineCargo = false;
  this.piIns = false;
  this.aviationIns = false;
  this.shipRepairers = false;
  this.contractorAllRiskIns = false;
  this.erectionAllRiskIns = false;
  this.machineryAllRiskIns = false;
  this.machineryBreakdownIns = false;
  this.contractorPlantMachineryIns = false;
  this.deteriorationStockIns = false;
  this.machineryLossProfitsIns = false;
  this.publicLiabilityIns = false;
  this.generalThirdPartyLiabilityIns = false;
  this.workmenCompensationIns = false;
  this.employerLiabilityIns = false;
  this.productsLiabilityIns = false;
  this.haulierLiabilityIns = false;
  this.moneyIns = false;
  this.fidelityGuaranteeIns = false;
  this.hotelPlusIns = false;
  this.goldPlusIns = false;
  this.electronicEquipmentIns = false;
  this.professionalIndemnityIns = false;
  this.contingencyIns = false;
  this.creditLifeCreditShieldIns = false;
  this.bondIns = false;
  this.terrorismSabotageIns = false;
  this.medicalMalpracticeIns = true;
  this.bankersBlanketIns = false;
  this.motorIns = false;
  this.groupLifeIns = false;
  this.groupMedicalIns = false;
  this.individualLifeIns = false;
  this.endowmentLifeInsProducts = false;
  this.moneyBackLifeInsProducts = false;
  this.educationLifeInsProducts = false;
  this.termLifeInsProducts = false;
  this.unitLinkedLifeProductsUniqueFeatures = false;
  this.pensionPlanswithUniqueFeaturesIns = false;
  this.wealthManagementSol = false;
  this.keyManIns = false;
  this.riskManag = false;
  this.insuranceConsult = false;
}

bankersBlanketInsurance() {
  this.personalAccIns = false;
  this.travel = false;
  this.motor = false;
  this.umbrella = false;
  this.craft = false;
  this.personal = false;
  this.individual = false;
  this.fireAllied = false;
  this.propertyAllRisk = false;
  this.businessInterupption =false;
  this.marineHull = false;
  this.marineCargo = false;
  this.piIns = false;
  this.aviationIns = false;
  this.shipRepairers = false;
  this.contractorAllRiskIns = false;
  this.erectionAllRiskIns = false;
  this.machineryAllRiskIns = false;
  this.machineryBreakdownIns = false;
  this.contractorPlantMachineryIns = false;
  this.deteriorationStockIns = false;
  this.machineryLossProfitsIns = false;
  this.publicLiabilityIns = false;
  this.generalThirdPartyLiabilityIns = false;
  this.workmenCompensationIns = false;
  this.employerLiabilityIns = false;
  this.productsLiabilityIns = false;
  this.haulierLiabilityIns = false;
  this.moneyIns = false;
  this.fidelityGuaranteeIns = false;
  this.hotelPlusIns = false;
  this.goldPlusIns = false;
  this.electronicEquipmentIns = false;
  this.professionalIndemnityIns = false;
  this.contingencyIns = false;
  this.creditLifeCreditShieldIns = false;
  this.bondIns = false;
  this.terrorismSabotageIns = false;
  this.medicalMalpracticeIns = false;
  this.bankersBlanketIns = true;
  this.motorIns = false;
  this.groupMedicalIns = false;
  this.groupLifeIns = false;
  this.individualLifeIns = false;
  this.endowmentLifeInsProducts = false;
  this.moneyBackLifeInsProducts = false;
  this.educationLifeInsProducts = false;
  this.termLifeInsProducts = false;
  this.unitLinkedLifeProductsUniqueFeatures = false;
  this.pensionPlanswithUniqueFeaturesIns = false;
  this.wealthManagementSol = false;
  this.keyManIns = false;
  this.riskManag = false;
  this.insuranceConsult = false;
}
commercialMotorInsurance() {
  this.personalAccIns = false;
  this.travel = false;
  this.motor = false;
  this.umbrella = false;
  this.craft = false;
  this.personal = false;
  this.individual = false;
  this.fireAllied = false;
  this.propertyAllRisk = false;
  this.businessInterupption =false;
  this.marineHull = false;
  this.marineCargo = false;
  this.piIns = false;
  this.aviationIns = false;
  this.shipRepairers = false;
  this.contractorAllRiskIns = false;
  this.erectionAllRiskIns = false;
  this.machineryAllRiskIns = false;
  this.machineryBreakdownIns = false;
  this.contractorPlantMachineryIns = false;
  this.deteriorationStockIns = false;
  this.machineryLossProfitsIns = false;
  this.publicLiabilityIns = false;
  this.generalThirdPartyLiabilityIns = false;
  this.workmenCompensationIns = false;
  this.employerLiabilityIns = false;
  this.productsLiabilityIns = false;
  this.haulierLiabilityIns = false;
  this.moneyIns = false;
  this.fidelityGuaranteeIns = false;
  this.hotelPlusIns = false;
  this.goldPlusIns = false;
  this.electronicEquipmentIns = false;
  this.professionalIndemnityIns = false;
  this.contingencyIns = false;
  this.creditLifeCreditShieldIns = false;
  this.bondIns = false;
  this.terrorismSabotageIns = false;
  this.medicalMalpracticeIns = false;
  this.bankersBlanketIns = false;
  this.motorIns = true;
  this.groupMedicalIns = false;
  this.groupLifeIns = false;
  this.individualLifeIns = false;
  this.endowmentLifeInsProducts = false;
  this.moneyBackLifeInsProducts = false;
  this.educationLifeInsProducts = false;
  this.termLifeInsProducts = false;
  this.unitLinkedLifeProductsUniqueFeatures = false;
  this.pensionPlanswithUniqueFeaturesIns = false;
  this.wealthManagementSol = false;
  this.keyManIns = false;
  this.riskManag = false;
  this.insuranceConsult = false;
}
groupLifeInsurance() {
  this.personalAccIns = false;
  this.travel = false;
  this.motor = false;
  this.umbrella = false;
  this.craft = false;
  this.personal = false;
  this.individual = false;
  this.fireAllied = false;
  this.propertyAllRisk = false;
  this.businessInterupption =false;
  this.marineHull = false;
  this.marineCargo = false;
  this.piIns = false;
  this.aviationIns = false;
  this.shipRepairers = false;
  this.contractorAllRiskIns = false;
  this.erectionAllRiskIns = false;
  this.machineryAllRiskIns = false;
  this.machineryBreakdownIns = false;
  this.contractorPlantMachineryIns = false;
  this.deteriorationStockIns = false;
  this.machineryLossProfitsIns = false;
  this.publicLiabilityIns = false;
  this.generalThirdPartyLiabilityIns = false;
  this.workmenCompensationIns = false;
  this.employerLiabilityIns = false;
  this.productsLiabilityIns = false;
  this.haulierLiabilityIns = false;
  this.moneyIns = false;
  this.fidelityGuaranteeIns = false;
  this.hotelPlusIns = false;
  this.goldPlusIns = false;
  this.electronicEquipmentIns = false;
  this.professionalIndemnityIns = false;
  this.contingencyIns = false;
  this.creditLifeCreditShieldIns = false;
  this.bondIns = false;
  this.terrorismSabotageIns = false;
  this.medicalMalpracticeIns = false;
  this.bankersBlanketIns = false;
  this.motorIns = false;
  this.groupLifeIns = true;
  this.groupMedicalIns = false;
  this.individualLifeIns = false;
  this.endowmentLifeInsProducts = false;
  this.moneyBackLifeInsProducts = false;
  this.educationLifeInsProducts = false;
  this.termLifeInsProducts = false;
  this.unitLinkedLifeProductsUniqueFeatures = false;
  this.pensionPlanswithUniqueFeaturesIns = false;
  this.wealthManagementSol = false;
  this.keyManIns = false;
  this.riskManag = false;
  this.insuranceConsult = false;
}

groupMedicalInsurance() {
  this.personalAccIns = false;
  this.travel = false;
  this.motor = false;
  this.umbrella = false;
  this.craft = false;
  this.personal = false;
  this.individual = false;
  this.fireAllied = false;
  this.propertyAllRisk = false;
  this.businessInterupption =false;
  this.marineHull = false;
  this.marineCargo = false;
  this.piIns = false;
  this.aviationIns = false;
  this.shipRepairers = false;
  this.contractorAllRiskIns = false;
  this.erectionAllRiskIns = false;
  this.machineryAllRiskIns = false;
  this.machineryBreakdownIns = false;
  this.contractorPlantMachineryIns = false;
  this.deteriorationStockIns = false;
  this.machineryLossProfitsIns = false;
  this.publicLiabilityIns = false;
  this.generalThirdPartyLiabilityIns = false;
  this.workmenCompensationIns = false;
  this.employerLiabilityIns = false;
  this.productsLiabilityIns = false;
  this.haulierLiabilityIns = false;
  this.moneyIns = false;
  this.fidelityGuaranteeIns = false;
  this.hotelPlusIns = false;
  this.goldPlusIns = false;
  this.electronicEquipmentIns = false;
  this.professionalIndemnityIns = false;
  this.contingencyIns = false;
  this.creditLifeCreditShieldIns = false;
  this.bondIns = false;
  this.terrorismSabotageIns = false;
  this.medicalMalpracticeIns = false;
  this.bankersBlanketIns = false;
  this.motorIns = false;
  this.groupMedicalIns = true;
  this.groupLifeIns = false;
  this.individualLifeIns = false;
  this.endowmentLifeInsProducts = false;
  this.moneyBackLifeInsProducts = false;
  this.educationLifeInsProducts = false;
  this.termLifeInsProducts = false;
  this.unitLinkedLifeProductsUniqueFeatures = false;
  this.pensionPlanswithUniqueFeaturesIns = false;
  this.wealthManagementSol = false;
  this.keyManIns = false;
  this.riskManag = false;
  this.insuranceConsult = false;
}

individualLifeInsurance() {
  this.personalAccIns = false;
  this.travel = false;
  this.motor = false;
  this.umbrella = false;
  this.craft = false;
  this.personal = false;
  this.individual = false;
  this.fireAllied = false;
  this.propertyAllRisk = false;
  this.businessInterupption =false;
  this.marineHull = false;
  this.marineCargo = false;
  this.piIns = false;
  this.aviationIns = false;
  this.shipRepairers = false;
  this.contractorAllRiskIns = false;
  this.erectionAllRiskIns = false;
  this.machineryAllRiskIns = false;
  this.machineryBreakdownIns = false;
  this.contractorPlantMachineryIns = false;
  this.deteriorationStockIns = false;
  this.machineryLossProfitsIns = false;
  this.publicLiabilityIns = false;
  this.generalThirdPartyLiabilityIns = false;
  this.workmenCompensationIns = false;
  this.employerLiabilityIns = false;
  this.productsLiabilityIns = false;
  this.haulierLiabilityIns = false;
  this.moneyIns = false;
  this.fidelityGuaranteeIns = false;
  this.hotelPlusIns = false;
  this.goldPlusIns = false;
  this.electronicEquipmentIns = false;
  this.professionalIndemnityIns = false;
  this.contingencyIns = false;
  this.creditLifeCreditShieldIns = false;
  this.bondIns = false;
  this.terrorismSabotageIns = false;
  this.medicalMalpracticeIns = false;
  this.bankersBlanketIns = false;
  this.motorIns = false;
  this.groupMedicalIns = false;
  this.groupLifeIns = false;
  this.individualLifeIns = true;
  this.endowmentLifeInsProducts = false;
  this.moneyBackLifeInsProducts = false;
  this.educationLifeInsProducts = false;
  this.termLifeInsProducts = false;
  this.unitLinkedLifeProductsUniqueFeatures = false;
  this.pensionPlanswithUniqueFeaturesIns = false;
  this.wealthManagementSol = false;
  this.keyManIns = false;
  this.riskManag = false;
  this.insuranceConsult = false;
}

endowmentLifeInsurance() {
  this.personalAccIns = false;
  this.travel = false;
  this.motor = false;
  this.umbrella = false;
  this.craft = false;
  this.personal = false;
  this.individual = false;
  this.fireAllied = false;
  this.propertyAllRisk = false;
  this.businessInterupption =false;
  this.marineHull = false;
  this.marineCargo = false;
  this.piIns = false;
  this.aviationIns = false;
  this.shipRepairers = false;
  this.contractorAllRiskIns = false;
  this.erectionAllRiskIns = false;
  this.machineryAllRiskIns = false;
  this.machineryBreakdownIns = false;
  this.contractorPlantMachineryIns = false;
  this.deteriorationStockIns = false;
  this.machineryLossProfitsIns = false;
  this.publicLiabilityIns = false;
  this.generalThirdPartyLiabilityIns = false;
  this.workmenCompensationIns = false;
  this.employerLiabilityIns = false;
  this.productsLiabilityIns = false;
  this.haulierLiabilityIns = false;
  this.moneyIns = false;
  this.fidelityGuaranteeIns = false;
  this.hotelPlusIns = false;
  this.goldPlusIns = false;
  this.electronicEquipmentIns = false;
  this.professionalIndemnityIns = false;
  this.contingencyIns = false;
  this.creditLifeCreditShieldIns = false;
  this.bondIns = false;
  this.terrorismSabotageIns = false;
  this.medicalMalpracticeIns = false;
  this.bankersBlanketIns = false;
  this.motorIns = false;
  this.groupMedicalIns = false;
  this.groupLifeIns = false;
  this.individualLifeIns = false;
  this.endowmentLifeInsProducts = true;
  this.moneyBackLifeInsProducts = false;
  this.educationLifeInsProducts = false;
  this.termLifeInsProducts = false;
  this.unitLinkedLifeProductsUniqueFeatures = false;
  this.pensionPlanswithUniqueFeaturesIns = false;
  this.wealthManagementSol = false;
  this.keyManIns = false;
  this.riskManag = false;
  this.insuranceConsult = false;
}
moneyBackLifeInsurance() {
  this.personalAccIns = false;
  this.travel = false;
  this.motor = false;
  this.umbrella = false;
  this.craft = false;
  this.personal = false;
  this.individual = false;
  this.fireAllied = false;
  this.propertyAllRisk = false;
  this.businessInterupption =false;
  this.marineHull = false;
  this.marineCargo = false;
  this.piIns = false;
  this.aviationIns = false;
  this.shipRepairers = false;
  this.contractorAllRiskIns = false;
  this.erectionAllRiskIns = false;
  this.machineryAllRiskIns = false;
  this.machineryBreakdownIns = false;
  this.contractorPlantMachineryIns = false;
  this.deteriorationStockIns = false;
  this.machineryLossProfitsIns = false;
  this.publicLiabilityIns = false;
  this.generalThirdPartyLiabilityIns = false;
  this.workmenCompensationIns = false;
  this.employerLiabilityIns = false;
  this.productsLiabilityIns = false;
  this.haulierLiabilityIns = false;
  this.moneyIns = false;
  this.fidelityGuaranteeIns = false;
  this.hotelPlusIns = false;
  this.goldPlusIns = false;
  this.electronicEquipmentIns = false;
  this.professionalIndemnityIns = false;
  this.contingencyIns = false;
  this.creditLifeCreditShieldIns = false;
  this.bondIns = false;
  this.terrorismSabotageIns = false;
  this.medicalMalpracticeIns = false;
  this.bankersBlanketIns = false;
  this.motorIns = false;
  this.groupMedicalIns = false;
  this.groupLifeIns = false;
  this.individualLifeIns = false;
  this.endowmentLifeInsProducts = false;
  this.moneyBackLifeInsProducts = true;
  this.educationLifeInsProducts = false;
  this.termLifeInsProducts = false;
  this.unitLinkedLifeProductsUniqueFeatures = false;
  this.pensionPlanswithUniqueFeaturesIns = false;
  this.wealthManagementSol = false;
  this.keyManIns = false;
  this.riskManag = false;
  this.insuranceConsult = false;
}
educationLifeInsuranceUniqueFeatures() {
  this.personalAccIns = false;
  this.travel = false;
  this.motor = false;
  this.umbrella = false;
  this.craft = false;
  this.personal = false;
  this.individual = false;
  this.fireAllied = false;
  this.propertyAllRisk = false;
  this.businessInterupption =false;
  this.marineHull = false;
  this.marineCargo = false;
  this.piIns = false;
  this.aviationIns = false;
  this.shipRepairers = false;
  this.contractorAllRiskIns = false;
  this.erectionAllRiskIns = false;
  this.machineryAllRiskIns = false;
  this.machineryBreakdownIns = false;
  this.contractorPlantMachineryIns = false;
  this.deteriorationStockIns = false;
  this.machineryLossProfitsIns = false;
  this.publicLiabilityIns = false;
  this.generalThirdPartyLiabilityIns = false;
  this.workmenCompensationIns = false;
  this.employerLiabilityIns = false;
  this.productsLiabilityIns = false;
  this.haulierLiabilityIns = false;
  this.moneyIns = false;
  this.fidelityGuaranteeIns = false;
  this.hotelPlusIns = false;
  this.goldPlusIns = false;
  this.electronicEquipmentIns = false;
  this.professionalIndemnityIns = false;
  this.contingencyIns = false;
  this.creditLifeCreditShieldIns = false;
  this.bondIns = false;
  this.terrorismSabotageIns = false;
  this.medicalMalpracticeIns = false;
  this.bankersBlanketIns = false;
  this.motorIns = false;
  this.groupMedicalIns = false;
  this.groupLifeIns = false;
  this.individualLifeIns = false;
  this.endowmentLifeInsProducts = false;
  this.moneyBackLifeInsProducts = false;
  this.educationLifeInsProducts = true;
  this.termLifeInsProducts = false;
  this.unitLinkedLifeProductsUniqueFeatures = false;
  this.pensionPlanswithUniqueFeaturesIns = false;
  this.wealthManagementSol = false;
  this.keyManIns = false;
  this.riskManag = false;
  this.insuranceConsult = false;
}

termLifeInsuranceUniqueFeatures() {
  this.personalAccIns = false;
  this.travel = false;
  this.motor = false;
  this.umbrella = false;
  this.craft = false;
  this.personal = false;
  this.individual = false;
  this.fireAllied = false;
  this.propertyAllRisk = false;
  this.businessInterupption =false;
  this.marineHull = false;
  this.marineCargo = false;
  this.piIns = false;
  this.aviationIns = false;
  this.shipRepairers = false;
  this.contractorAllRiskIns = false;
  this.erectionAllRiskIns = false;
  this.machineryAllRiskIns = false;
  this.machineryBreakdownIns = false;
  this.contractorPlantMachineryIns = false;
  this.deteriorationStockIns = false;
  this.machineryLossProfitsIns = false;
  this.publicLiabilityIns = false;
  this.generalThirdPartyLiabilityIns = false;
  this.workmenCompensationIns = false;
  this.employerLiabilityIns = false;
  this.productsLiabilityIns = false;
  this.haulierLiabilityIns = false;
  this.moneyIns = false;
  this.fidelityGuaranteeIns = false;
  this.hotelPlusIns = false;
  this.goldPlusIns = false;
  this.electronicEquipmentIns = false;
  this.professionalIndemnityIns = false;
  this.contingencyIns = false;
  this.creditLifeCreditShieldIns = false;
  this.bondIns = false;
  this.terrorismSabotageIns = false;
  this.medicalMalpracticeIns = false;
  this.bankersBlanketIns = false;
  this.motorIns = false;
  this.groupMedicalIns = false;
  this.groupLifeIns = false;
  this.individualLifeIns = false;
  this.endowmentLifeInsProducts = false;
  this.moneyBackLifeInsProducts = false;
  this.educationLifeInsProducts = false;
  this.termLifeInsProducts = true;
  this.unitLinkedLifeProductsUniqueFeatures = false;
  this.pensionPlanswithUniqueFeaturesIns = false;
  this.wealthManagementSol = false;
  this.keyManIns = false;
  this.riskManag = false;
  this.insuranceConsult = false;
}

unitLinkedLifeInsurance() {
  this.personalAccIns = false;
  this.travel = false;
  this.motor = false;
  this.umbrella = false;
  this.craft = false;
  this.personal = false;
  this.individual = false;
  this.fireAllied = false;
  this.propertyAllRisk = false;
  this.businessInterupption =false;
  this.marineHull = false;
  this.marineCargo = false;
  this.piIns = false;
  this.aviationIns = false;
  this.shipRepairers = false;
  this.contractorAllRiskIns = false;
  this.erectionAllRiskIns = false;
  this.machineryAllRiskIns = false;
  this.machineryBreakdownIns = false;
  this.contractorPlantMachineryIns = false;
  this.deteriorationStockIns = false;
  this.machineryLossProfitsIns = false;
  this.publicLiabilityIns = false;
  this.generalThirdPartyLiabilityIns = false;
  this.workmenCompensationIns = false;
  this.employerLiabilityIns = false;
  this.productsLiabilityIns = false;
  this.haulierLiabilityIns = false;
  this.moneyIns = false;
  this.fidelityGuaranteeIns = false;
  this.hotelPlusIns = false;
  this.goldPlusIns = false;
  this.electronicEquipmentIns = false;
  this.professionalIndemnityIns = false;
  this.contingencyIns = false;
  this.creditLifeCreditShieldIns = false;
  this.bondIns = false;
  this.terrorismSabotageIns = false;
  this.medicalMalpracticeIns = false;
  this.bankersBlanketIns = false;
  this.motorIns = false;
  this.groupMedicalIns = false;
  this.groupLifeIns = false;
  this.individualLifeIns = false;
  this.endowmentLifeInsProducts = false;
  this.moneyBackLifeInsProducts = false;
  this.educationLifeInsProducts = false;
  this.termLifeInsProducts = false;
  this.unitLinkedLifeProductsUniqueFeatures = true;
  this.pensionPlanswithUniqueFeaturesIns = false;
  this.wealthManagementSol = false;
  this.keyManIns = false;
  this.riskManag = false;
  this.insuranceConsult = false;
}

pensionPlansUniqueFeatures() {
  this.personalAccIns = false;
  this.travel = false;
  this.motor = false;
  this.umbrella = false;
  this.craft = false;
  this.personal = false;
  this.individual = false;
  this.fireAllied = false;
  this.propertyAllRisk = false;
  this.businessInterupption =false;
  this.marineHull = false;
  this.marineCargo = false;
  this.piIns = false;
  this.aviationIns = false;
  this.shipRepairers = false;
  this.contractorAllRiskIns = false;
  this.erectionAllRiskIns = false;
  this.machineryAllRiskIns = false;
  this.machineryBreakdownIns = false;
  this.contractorPlantMachineryIns = false;
  this.deteriorationStockIns = false;
  this.machineryLossProfitsIns = false;
  this.publicLiabilityIns = false;
  this.generalThirdPartyLiabilityIns = false;
  this.workmenCompensationIns = false;
  this.employerLiabilityIns = false;
  this.productsLiabilityIns = false;
  this.haulierLiabilityIns = false;
  this.moneyIns = false;
  this.fidelityGuaranteeIns = false;
  this.hotelPlusIns = false;
  this.goldPlusIns = false;
  this.electronicEquipmentIns = false;
  this.professionalIndemnityIns = false;
  this.contingencyIns = false;
  this.creditLifeCreditShieldIns = false;
  this.bondIns = false;
  this.terrorismSabotageIns = false;
  this.medicalMalpracticeIns = false;
  this.bankersBlanketIns = false;
  this.motorIns = false;
  this.groupMedicalIns = false;
  this.groupLifeIns = false;
  this.individualLifeIns = false;
  this.endowmentLifeInsProducts = false;
  this.moneyBackLifeInsProducts = false;
  this.educationLifeInsProducts = false;
  this.termLifeInsProducts = false;
  this.unitLinkedLifeProductsUniqueFeatures = false;
  this.pensionPlanswithUniqueFeaturesIns = true;
  this.wealthManagementSol = false;
  this.keyManIns = false;
  this.riskManag = false;
  this.insuranceConsult = false;
}

wealthManagementSolutions() {
  this.personalAccIns = false;
  this.travel = false;
  this.motor = false;
  this.umbrella = false;
  this.craft = false;
  this.personal = false;
  this.individual = false;
  this.fireAllied = false;
  this.propertyAllRisk = false;
  this.businessInterupption =false;
  this.marineHull = false;
  this.marineCargo = false;
  this.piIns = false;
  this.aviationIns = false;
  this.shipRepairers = false;
  this.contractorAllRiskIns = false;
  this.erectionAllRiskIns = false;
  this.machineryAllRiskIns = false;
  this.machineryBreakdownIns = false;
  this.contractorPlantMachineryIns = false;
  this.deteriorationStockIns = false;
  this.machineryLossProfitsIns = false;
  this.publicLiabilityIns = false;
  this.generalThirdPartyLiabilityIns = false;
  this.workmenCompensationIns = false;
  this.employerLiabilityIns = false;
  this.productsLiabilityIns = false;
  this.haulierLiabilityIns = false;
  this.moneyIns = false;
  this.fidelityGuaranteeIns = false;
  this.hotelPlusIns = false;
  this.goldPlusIns = false;
  this.electronicEquipmentIns = false;
  this.professionalIndemnityIns = false;
  this.contingencyIns = false;
  this.creditLifeCreditShieldIns = false;
  this.bondIns = false;
  this.terrorismSabotageIns = false;
  this.medicalMalpracticeIns = false;
  this.bankersBlanketIns = false;
  this.motorIns = false;
  this.groupMedicalIns = false;
  this.groupLifeIns = false;
  this.individualLifeIns = false;
  this.endowmentLifeInsProducts = false;
  this.moneyBackLifeInsProducts = false;
  this.educationLifeInsProducts = false;
  this.termLifeInsProducts = false;
  this.unitLinkedLifeProductsUniqueFeatures = false;
  this.pensionPlanswithUniqueFeaturesIns = false;
  this.wealthManagementSol = true;
  this.keyManIns = false;
  this.riskManag = false;
  this.insuranceConsult = false;
}

keyManInsurance() {
  this.personalAccIns = false;
  this.travel = false;
  this.motor = false;
  this.umbrella = false;
  this.craft = false;
  this.personal = false;
  this.individual = false;
  this.fireAllied = false;
  this.propertyAllRisk = false;
  this.businessInterupption =false;
  this.marineHull = false;
  this.marineCargo = false;
  this.piIns = false;
  this.aviationIns = false;
  this.shipRepairers = false;
  this.contractorAllRiskIns = false;
  this.erectionAllRiskIns = false;
  this.machineryAllRiskIns = false;
  this.machineryBreakdownIns = false;
  this.contractorPlantMachineryIns = false;
  this.deteriorationStockIns = false;
  this.machineryLossProfitsIns = false;
  this.publicLiabilityIns = false;
  this.generalThirdPartyLiabilityIns = false;
  this.workmenCompensationIns = false;
  this.employerLiabilityIns = false;
  this.productsLiabilityIns = false;
  this.haulierLiabilityIns = false;
  this.moneyIns = false;
  this.fidelityGuaranteeIns = false;
  this.hotelPlusIns = false;
  this.goldPlusIns = false;
  this.electronicEquipmentIns = false;
  this.professionalIndemnityIns = false;
  this.contingencyIns = false;
  this.creditLifeCreditShieldIns = false;
  this.bondIns = false;
  this.terrorismSabotageIns = false;
  this.medicalMalpracticeIns = false;
  this.bankersBlanketIns = false;
  this.motorIns = false;
  this.groupMedicalIns = false;
  this.groupLifeIns = false;
  this.individualLifeIns = false;
  this.endowmentLifeInsProducts = false;
  this.moneyBackLifeInsProducts = false;
  this.educationLifeInsProducts = false;
  this.termLifeInsProducts = false;
  this.unitLinkedLifeProductsUniqueFeatures = false;
  this.pensionPlanswithUniqueFeaturesIns = false;
  this.wealthManagementSol = false;
  this.keyManIns = true;

  this.riskManag = false;
  this.insuranceConsult = false;
}

riskManagement() {
  this.personalAccIns = false;
  this.travel = false;
  this.motor = false;
  this.umbrella = false;
  this.craft = false;
  this.personal = false;
  this.individual = false;
  this.fireAllied = false;
  this.propertyAllRisk = false;
  this.businessInterupption =false;
  this.marineHull = false;
  this.marineCargo = false;
  this.piIns = false;
  this.aviationIns = false;
  this.shipRepairers = false;
  this.contractorAllRiskIns = false;
  this.erectionAllRiskIns = false;
  this.machineryAllRiskIns = false;
  this.machineryBreakdownIns = false;
  this.contractorPlantMachineryIns = false;
  this.deteriorationStockIns = false;
  this.machineryLossProfitsIns = false;
  this.publicLiabilityIns = false;
  this.generalThirdPartyLiabilityIns = false;
  this.workmenCompensationIns = false;
  this.employerLiabilityIns = false;
  this.productsLiabilityIns = false;
  this.haulierLiabilityIns = false;
  this.moneyIns = false;
  this.fidelityGuaranteeIns = false;
  this.hotelPlusIns = false;
  this.goldPlusIns = false;
  this.electronicEquipmentIns = false;
  this.professionalIndemnityIns = false;
  this.contingencyIns = false;
  this.creditLifeCreditShieldIns = false;
  this.bondIns = false;
  this.terrorismSabotageIns = false;
  this.medicalMalpracticeIns = false;
  this.bankersBlanketIns = false;
  this.motorIns = false;
  this.groupMedicalIns = false;
  this.groupLifeIns = false;
  this.individualLifeIns = false;
  this.endowmentLifeInsProducts = false;
  this.moneyBackLifeInsProducts = false;
  this.educationLifeInsProducts = false;
  this.termLifeInsProducts = false;
  this.unitLinkedLifeProductsUniqueFeatures = false;
  this.pensionPlanswithUniqueFeaturesIns = false;
  this.wealthManagementSol = false;
  this.keyManIns = false;
  this.riskManag = true;
  this.insuranceConsult = false;
}

insuranceConsultancy() {
  this.personalAccIns = false;
  this.travel = false;
  this.motor = false;
  this.umbrella = false;
  this.craft = false;
  this.personal = false;
  this.individual = false;
  this.fireAllied = false;
  this.propertyAllRisk = false;
  this.businessInterupption =false;
  this.marineHull = false;
  this.marineCargo = false;
  this.piIns = false;
  this.aviationIns = false;
  this.shipRepairers = false;
  this.contractorAllRiskIns = false;
  this.erectionAllRiskIns = false;
  this.machineryAllRiskIns = false;
  this.machineryBreakdownIns = false;
  this.contractorPlantMachineryIns = false;
  this.deteriorationStockIns = false;
  this.machineryLossProfitsIns = false;
  this.publicLiabilityIns = false;
  this.generalThirdPartyLiabilityIns = false;
  this.workmenCompensationIns = false;
  this.employerLiabilityIns = false;
  this.productsLiabilityIns = false;
  this.haulierLiabilityIns = false;
  this.moneyIns = false;
  this.fidelityGuaranteeIns = false;
  this.hotelPlusIns = false;
  this.goldPlusIns = false;
  this.electronicEquipmentIns = false;
  this.professionalIndemnityIns = false;
  this.contingencyIns = false;
  this.creditLifeCreditShieldIns = false;
  this.bondIns = false;
  this.terrorismSabotageIns = false;
  this.medicalMalpracticeIns = false;
  this.bankersBlanketIns = false;
  this.motorIns = false;
  this.groupMedicalIns = false;
  this.groupLifeIns = false;
  this.individualLifeIns = false;
  this.endowmentLifeInsProducts = false;
  this.moneyBackLifeInsProducts = false;
  this.educationLifeInsProducts = false;
  this.termLifeInsProducts = false;
  this.unitLinkedLifeProductsUniqueFeatures = false;
  this.pensionPlanswithUniqueFeaturesIns = false;
  this.wealthManagementSol = false;
  this.keyManIns = false;
  this.riskManag = false;
  this.insuranceConsult = true;
}



  openPersonalAccidentCover() {

   this.personalAccCover.style.width="400px";
  }

  closePersonalAccCover() {
    this.personalAccCover.style.width="0px";
  }

  openIndividualLIWhileAbroad() {
    this.individualLIWhileAbroad.style.width="400px";

  }
  closeIndividualLIWhileAbroad() {
    this.individualLIWhileAbroad.style.width="0px";

  }

  openIndividualLIUniqueFeature() {
this.individualLIUniqueFeature.style.width="400px";

  }
   closeIndividualLIUniqueFeature() {
this.individualLIUniqueFeature.style.width="0px";

  }


  
  commercial() {

  }
  fireSubMenu(){

  }
}
