import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { roles, userModel } from 'src/app/shared/models/user';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide: boolean = false;
  isNotValid:boolean=false;
  // Users data info
  userData: userModel[] = [
    { userName: 'user', password: 'user', roleId: roles.user },
    { userName: 'admin', password: 'admin', roleId: roles.admin },
  ];
  constructor(
    private fb: FormBuilder,
    private common: CommonService,
    private router: Router
  ) {}

  ngOnInit() {}
  // To initialize reactive form controls
  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });

  /**
   * If the form is valid, check if the user exists in the userData array, if it does, store the user in
   * localStorage and navigate to the home page
   */
  onLogin() {
    if (this.loginForm.valid) {
      // To get user  logged in
      const userInfo = this.userData.find((x) => {
        return (
          x.userName === this.loginForm.value.username &&
          x.password === this.loginForm.value.password
        );
      });
      if (userInfo) {
        // To set user info in localStorage
        localStorage.setItem('user', JSON.stringify(userInfo));
        // To set user info in behaviorSubject
        this.common.userInfo.next(userInfo);
        // Navigate to home page
        this.router.navigate(['/']);
        // this.router
        //   .navigateByUrl('/', { skipLocationChange: true })
        //   .then(() => {
        //     this.router.navigate(['/']);
        //   });
      }
      else
      this.isNotValid=true;
    }
  }
}
