import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private localStorageService: LocalStorageService) { }
  role: any

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url: string = state.url;
    // return true;
    return this.checkUserLogin(next, url);
  }
  checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
    const userRole = this.localStorageService.retreiveRole();
    if (userRole != null) {
      if (route.data['role'] && route.data['role'] == userRole) {
        if (userRole == 'Admin' && url == '') {
          this.router.navigate(['/admin'])
        }
        if (userRole == 'Responsable' && url == '') {
          this.router.navigate(['/responsable'])
        }
        if (userRole == 'Employe' && url == '') {
          this.router.navigate(['/employe'])
        }
        return true;
      }
      else
        return false;
    }
    this.router.navigate(['/']);
    return false;
  }

}
