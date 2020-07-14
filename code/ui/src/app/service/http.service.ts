import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const API_URL="http://localhost:3004"
const httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json' 
    })
  };
@Injectable()
export class HttpService {
  
    constructor(private http:HttpClient) {}
 
    getSlots(date="") {
        return this.http.post(API_URL + "/api/slot/get",{date:date},httpOptions);
    }
    bookSlots(date,timeslot,fullname,carmodel){
        return this.http.post(API_URL + "/api/slot/book",{date,timeslot,fullname,carmodel},httpOptions);
    }
}