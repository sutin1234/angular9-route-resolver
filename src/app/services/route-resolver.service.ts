import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteResolverService implements Resolve<any>{
  constructor(private http: HttpClient) { }

  resolve(): Promise<any> | Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users/1')
  }
}
