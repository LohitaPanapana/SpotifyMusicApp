import { categories } from './app.constant';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotFoundGuard implements CanActivate {
  constructor(private router: Router){}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const type = next.params['type'];
      categories.some(category => {
        return category.key == type
      });

      /*
        Route will only be activated if active category type is given else it will be routed to not-found route
      */      
      if(categories.some(category => category.key === type)){
        return true;
      }
      this.router.navigateByUrl('not-found');
  }
  
}
