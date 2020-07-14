import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {HttpService} from '../service/http.service';


@Injectable({providedIn: 'root'})

export class BookingService {
  constructor(private _httpService: HttpService) { }

  getSlots(date) {
    return this._httpService.getSlots(date);
  }

  bookSlots(date,timeSlot,fullName,carModel) {
    return this._httpService.bookSlots(date,timeSlot,fullName,carModel);
  }
}
