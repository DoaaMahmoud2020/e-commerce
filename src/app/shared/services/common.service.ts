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
  constructor(public httpClient: HttpClient, private snackBar: MatSnackBar) {}

  /**
   * Performs an HTTP GET request.
   *
   * @param path - The API endpoint path.
   * @param query - The query parameters.
   * @param removeLang - (Optional) Whether to remove the 'lang' parameter from the query.
   * @returns An Observable that emits the response data.
   */
  get(path: string,query: any,removeLang: boolean = false): Observable<Object> {
    const payload: { headers: HttpHeaders; params: any } = {
      headers: this.header,
      params: { ...query },
    };

    if (removeLang) {
      delete payload.params.lang;
    }

    return this.httpClient.get(this.baseURL + path, payload);
  }

  /**
   * Sends an HTTP POST request.
   *
   * @param path - The API endpoint path.
   * @param payload - The payload to send with the request.
   * @returns An Observable that emits the response data.
   */
  post(path: string, payload: Object): Observable<Object> {
    return this.httpClient.post(this.baseURL + path, payload, {
      headers: this.header,
    });
  }

  /**
   * Sends an HTTP PUT request.
   *
   * @param path - The API endpoint path.
   * @param payload - The payload to send with the request.
   * @returns An Observable that emits the response data.
   */
  put(path: string, payload: Object): Observable<Object> {
    return this.httpClient.put(this.baseURL + path, payload, {
      headers: this.header,
    });
  }

  /**
   * Sends an HTTP DELETE request.
   *
   * @param path - The API endpoint path.
   * @param query - The query parameters.
   * @returns An Observable that emits the response data.
   */
  delete(path: string, query: any): Observable<Object> {
    return this.httpClient.delete(this.baseURL + path, {
      headers: this.header,
      params: query,
    });
  }

  /**
   * Opens a snack bar with the specified message and optional action.
   *
   * @param message - The message to display in the snack bar.
   * @param action - (Optional) The action text to display. Default is 'ok'.
   */
  openSnackBar(message: string, action: string = 'ok'): void {
    this.snackBar.open(message, action, {
      duration: 1000,
      verticalPosition: 'top',
    });
  }
}
