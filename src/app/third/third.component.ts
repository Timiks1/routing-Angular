import { Component } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent {
  dob: string = '';
  horoscope: string = '';

  getHoroscope() {
    // Get the month and day from the date of birth
    const date = new Date(this.dob);
    const month = date.getMonth() + 1;
    const day = date.getDate();

    // Determine the horoscope based on the month and day
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
      this.horoscope = 'Aries';
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
      this.horoscope = 'Taurus';
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
      this.horoscope = 'Gemini';
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
      this.horoscope = 'Cancer';
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
      this.horoscope = 'Leo';
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
      this.horoscope = 'Virgo';
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
      this.horoscope = 'Libra';
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
      this.horoscope = 'Scorpio';
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
      this.horoscope = 'Sagittarius';
    } else if ((month == 12 && day >= 22) || (month == 1 && day <= 21)){
      this.horoscope = 'Sagittarius';
    }else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
      this.horoscope = 'Capricorn';
      } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
      this.horoscope = 'Aquarius';
      } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
      this.horoscope = 'Pisces';
      }
  }
}
