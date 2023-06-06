import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';
import { roles, userModel } from '../../models/user';
import { LocalService } from 'src/app/shared/services/local.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide: boolean = false;
  isNotValid: boolean = false;
  // Users data info
  userData: userModel[] = [
    { userName: 'user', password: 'user', roleId: roles.user },
    { userName: 'admin', password: 'admin', roleId: roles.admin },
  ];
  constructor(
    private fb: FormBuilder,
    private commonService: CommonService,
    private router: Router,
    private localStore: LocalService
  ) { }

  ngOnInit() { }
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
      const userInfo = this.userData.find((value) => {
        return (
          value.userName === this.loginForm.value.username &&
          value.password === this.loginForm.value.password
        );
      });
      if (userInfo) {
        this.localStore.saveData('user',JSON.stringify(userInfo));
        this.commonService.userInfo.next(userInfo);
        this.router.navigate(['/']);
      }
      else
        this.isNotValid = true;
    }
  }
}
