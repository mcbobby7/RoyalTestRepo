import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/http/services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { IOnboarding } from '../core/interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  data: any;
  stage: number = 1;
  id: any = localStorage.getItem('onboardingId');
  process: any;
  onboardingForm!: FormGroup;
  constructor(private auth: AuthService) {}

  getOnboardingStage() {
    if (this.id) {
      this.auth.getOnboardingStage(this.id).subscribe(
        (res: any) => {
          if (!res.hasError) {
            this.process = res.data;
            console.log(res);
          } else {
            console.log('Error happend');
          }
        },
        (err) => console.error(err.message)
      );
    }
    return;
  }

  // register method
  register() {
    const {
      first_name,
      last_name,
      middle_name,
      Phone,
      email,
      DOB,
      password,
      ref_code,
      accountType,
      companyType,
      BVN,
      hasBVN,
      isVrifiedInfo,
      stage,
      isFinal,
      image,
    } = this.onboardingForm.value;
    this.auth
      .onboarding({
        first_name,
        last_name,
        middle_name,
        Phone,
        email,
        DOB,
        password,
        ref_code,
        accountType,
        companyType,
        BVN,
        hasBVN,
        isVrifiedInfo,
        stage,
        isFinal,
        image,
      })
      .subscribe(
        (res: any) => {
          if (!res.hasError) {
            this.data = res.data;
            localStorage.setItem('onboardingId', res.data.id);
            // deal with register
            console.log(res);
          } else {
            console.log('Error happend');
          }
        },
        (err) => console.error(err.message)
      );
  }

  ngOnInit(): void {
    // register form
    this.getOnboardingStage();
    this.onboardingForm = new FormGroup({
      first_name: new FormControl(''),
      last_name: new FormControl(''),
      middle_name: new FormControl(''),
      Phone: new FormControl(''),
      email: new FormControl(''),
      DOB: new FormControl(''),
      password: new FormControl(''),
      ref_code: new FormControl(''),
      accountType: new FormControl(''),
      companyType: new FormControl(''),
      BVN: new FormControl(''),
      hasBVN: new FormControl(''),
      isVrifiedInfo: new FormControl(''),
      stage: new FormControl(''),
      isFinal: new FormControl(''),
      image: new FormControl(''),
    });
  }
}
