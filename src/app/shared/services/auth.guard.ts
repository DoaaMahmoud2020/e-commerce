import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { userPermission } from '../models/user';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private common: CommonService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    //this array contain user permissions accroding role id
    const userPermissions: userPermission[] = [
      {
        roleId: 1, // User
        permissions: ['view-product','category-product'],
      },
      {
        roleId: 2, // Admin
        permissions: ['products','edit-product','new-product'],
      },
    ];
    return this.common.userInfo.pipe(
      take(1),
      map((user) => {
        const IsAuth = !!user;
        if (IsAuth) {
          var p = userPermissions.find((e) => e.roleId == user.roleId);

          if (p && p.permissions.some((a) => state.url.includes(a))) {
            return true;
          } else {
            return this.router.createUrlTree(['/auth/not-authorized']);
          }
        }
        return this.router.createUrlTree(['/auth/not-authorized']);
      })
    );
  }
}
