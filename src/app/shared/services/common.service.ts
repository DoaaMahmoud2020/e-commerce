import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { userModel } from '../models/user';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  public baseURL: string = environment.apiUrl; //prod
  public domainURL: string = environment.apiDomain;
  private header: HttpHeaders = new HttpHeaders();

  public userInfo = new BehaviorSubject<userModel | null>(null);
  constructor(public http: HttpClient, private _snackBar: MatSnackBar) {
    
  }

  /**
   * This is general get function
   * @param path
   * @param query
   * @param [removeLang]
   * @returns get
   */
  get(
    path: string,
    query: any,
    removeLang: boolean = false
  ): Observable<Object> {
    var payload = {
      headers: this.header,
      params: {
        ...query,
      },
    };
    if (removeLang) {
      delete payload.params.lang;
    }
    return this.http.get(this.baseURL + path, payload);
  }

  /**
   * This is general post function
   * @param path
   * @param payload
   * @returns post
   */
  post(path: string, payload: Object): Observable<Object> {
    return this.http.post(this.baseURL + path, payload, {
      headers: this.header,
    });
  }

  /**
   * This is general update function
   * @param path
   * @param payload
   * @returns put
   */
  put(path: string, payload: Object): Observable<Object> {
    return this.http.put(this.baseURL + path, payload, {
      headers: this.header,
    });
  }

  /**
   * This is general delete function
   * @param path
   * @param query
   * @returns delete
   */
  delete(path: string, query: any): Observable<Object> {
    return this.http.delete(this.baseURL + path, {
      headers: this.header,
      params: query,
    });
  }

  openSnackBar(message: string, action: string = 'ok') {
    this._snackBar.open(message, action, {
      duration: 1000,
      verticalPosition: 'top',
    });
  }
}
