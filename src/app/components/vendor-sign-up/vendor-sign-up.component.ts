import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vendor-sign-up',
  templateUrl: './vendor-sign-up.component.html',
  styleUrls: ['./vendor-sign-up.component.scss']
})
export class VendorSignUpComponent implements OnInit {


  vendorForm!: FormGroup;
  months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August',
    'September',
    'October',
    'November',
    'December']
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.vendorForm = this.fb.group({
      businessName: ['', [Validators.required, Validators.minLength(4)]],
      foodOrRetail: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      termLength: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      instagram: ['', [Validators.required]],
      website: ['', [Validators.required]],
      salesDeckLink: ['', [Validators.required]],
      vendorInfo: ['', [Validators.required]],
    })
  }
  confirmAndSubmitForm() {
    if (!this.vendorForm.valid) {
      false;
    } else {
      console.log(JSON.stringify(this.vendorForm.value));
    }
    // this.vendorForm.submit();
  }

}
