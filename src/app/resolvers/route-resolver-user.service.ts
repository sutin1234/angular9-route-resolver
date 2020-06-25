import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class RouteResolverUser implements Resolve<any>{
  constructor(private userSerice: UserService) { }

  resolve(): Promise<any> | Observable<any> {
    return this.userSerice.getUser(1)
  }
}
