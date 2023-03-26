import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';

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
  ngOnInit(): void {}
  singout() {
    this.common.userInfo.next(null);
    localStorage.clear();
    this.router.navigate(['/login']);
  }
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
