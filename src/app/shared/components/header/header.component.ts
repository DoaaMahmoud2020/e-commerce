import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { userModel } from '../../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public common: CommonService,
    private router: Router,
    public translate: TranslateService,
    @Inject(DOCUMENT) private document: Document
  ) {
    translate.setDefaultLang('en');
  }
  defaultLang: string = 'en';
  ngOnInit(): void {
    if (this.common.userInfo.value == null) {
      // To set user data in userInfo object
      const data = JSON.parse(localStorage.getItem('user'));
      if (data != null) {
        this.common.userInfo = new BehaviorSubject(data as userModel);
        this.common.userInfo.next(data as userModel);
      }
    }
  }
  /**
   * It sets the userInfo to null, clears the localStorage and navigates to the login page
   */
  singout() {
    this.common.userInfo.next(null);
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  /**
   * It changes the language of the application
   * @param {string} lang - The language to change to.
   */
  changeLangage(lang: string) {
    let htmlTag = this.document.getElementsByTagName(
      'html'
    )[0] as HTMLHtmlElement;
    htmlTag.dir = lang === 'ar' ? 'rtl' : 'ltr';
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    localStorage.setItem('defaultLang', lang);
    this.defaultLang = lang;
    // this.changeCssFile(lang);
  }
}
