import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {MatSnackBar} from '@angular/material/snack-bar';
import { BookingService } from './booking.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingComponent implements OnInit {

  slots:any={};
  carModel="";
  fullName="";
  maxBookingLimitPerhour=0;
  maxDate = new Date(2020, 9, 1);
  selectedTimeSlot="";
  selectedDate="";
  slotDate=undefined;
  private postsSub: Subscription;
  constructor(private _snackBar: MatSnackBar,public bookingService: BookingService,private router: Router) {

  }
  bookSuccessPopup(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 10000,
    });
  }
  ngOnInit() {
  }
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0;
  }
  onDateChange(type: string, event: MatDatepickerInputEvent<Date>) {
    if(event.value.getDay()==6){
      this.maxBookingLimitPerhour=4;
    } else {
      this.maxBookingLimitPerhour=2;
    }
    this.selectedDate=event.value.toLocaleDateString("en-US")
    this.loadSlots(this.selectedDate)
  }
  loadSlots(date){
    this.bookingService.getSlots(date)
      .subscribe((slots) => {
         Object.keys(slots).map(function(key, index) {
          slots[key] = {count:slots[key],selected:false};
        });
        this.slots = slots;
    });
  }
  SelectSlot(timeSlot){
    Object.keys(this.slots).map((key, index) => {
      if(timeSlot!=key)
      this.slots[key].selected=false;
    });
    this.slots[timeSlot].selected=!this.slots[timeSlot].selected;
    this.selectedTimeSlot=timeSlot
  }
  BookSlot(){
    this.bookingService.bookSlots(this.selectedDate,this.selectedTimeSlot,this.fullName,this.carModel)
      .subscribe((slot) => {
        let bookingSuccessText = "Hi "+this.fullName+", Your booking made on " + slot["bookingDate"] +" at " + slot["bookingTime"]
        this.bookSuccessPopup(bookingSuccessText,"close");
        this.resetAll();
    });
  }
  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }
  resetAll(){
    this.slots={};
        this.selectedTimeSlot="";
        this.selectedDate="";
        this.slotDate = undefined;
        this.carModel="";
        this.fullName="";
  }
  ngOnDestroy() {
    //this.postsSub.unsubscribe();
  }

}

