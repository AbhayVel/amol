import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  putData<T>(url: string, data: any) {
    
    return this.http.put<T>(url,data);
  }

  constructor(private http : HttpClient) { }


  getData<T>(url: string) {

    return this.http.get<T>(url);

  }


}
