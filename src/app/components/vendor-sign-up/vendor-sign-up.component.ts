import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vendor-sign-up',
  templateUrl: './vendor-sign-up.component.html',
  styleUrls: ['./vendor-sign-up.component.scss']
})
export class VendorSignUpComponent implements OnInit {

  // @ViewChild('vendor')vendor! : ElementRef;
  vendorForm!: FormGroup;
  disableSelect = true;
  months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August',
    'September',
    'October',
    'November',
    'December']


  // constructor() {}



  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.scrollToTop();

    this.vendorForm = this.fb.group({
      businessName: ['', [Validators.required, Validators.minLength(4)]],
      businessType: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      termLength: ['', {disabled: true}],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      instagram: ['', [Validators.required]],
      website: ['', [Validators.required]],
      salesDeckLink: ['', [Validators.required]],
      vendorInfo: ['', [Validators.required]],
    })
  }
  // scrollToTop() {
  //     this.vendor.nativeElement.scrollIntoView({ behavior: 'smooth', contents: 'start' });
  //   }
  confirmAndSubmitForm() {
    if (!this.vendorForm.valid) {
      false;
    } else {
      console.log(JSON.stringify(this.vendorForm.value));
    }

    // TO-DO => turn into dynamic component, dont show footer
    // TO-DO => ad close component X icon
    // this.vendorForm.submit();
  }

}
