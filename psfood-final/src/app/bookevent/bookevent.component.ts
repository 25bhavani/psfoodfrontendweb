// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-bookevent',
//   templateUrl: './bookevent.component.html',
//   styleUrl: './bookevent.component.css'
// })
// export class BookeventComponent {
//
// }


import { HttpErrorResponse } from "@angular/common/http";
import { Component } from '@angular/core';
import { ItemsService } from '../services/items.service';

interface BookingResponse {
  message: string;
  data: any;
}

@Component({
  selector: 'app-bookevent',
  templateUrl: './bookevent.component.html',
  styleUrls: ['./bookevent.component.css']
})
export class BookEventComponent {
  name: string = '';
  phoneNumber: string = '';
  email: string = '';
  persons: number | null = null;
  date: string = '';
  nameError: string = '';
  phoneError: string = '';
  emailError: string = '';
  personsError: string = '';
  dateError: string = '';
  submissionSuccess: boolean = false;
  errorMessage: string = '';

  constructor(private itemsService: ItemsService) {}

  bookEvent() {
    // console.log('Form Submitted');

    // Check if the form is valid and the date is valid
    if (this.isValidForm() && this.isDateValid()) {
      const eventData = {
        name: this.name,
        phoneNumber: this.phoneNumber,
        email: this.email,
        persons: this.persons,
        date: this.date,
      };

      this.itemsService.bookEvent(eventData).subscribe(
        (response: BookingResponse) => {
          console.log('Event booked successfully', response);
          this.submissionSuccess = true;
          setTimeout(() => {
            this.submissionSuccess = false;
          }, 5000);
        },
        (error: HttpErrorResponse) => {
          console.error('Error booking event', error);
          this.errorMessage = 'Error occurred while submitting the form.';
        }
      );
    } else {
      // Validation errors, do nothing
    }
  }

  isValidForm() {
    this.nameError = '';
    this.phoneError = '';
    this.emailError = '';
    this.personsError = '';
    this.dateError = '';

    let isValid = true;

    if (this.name.trim().length === 0) {
      this.nameError = 'Please enter your name.';
      isValid = false;
    } else if (/\d/.test(this.name.trim())) {
      this.nameError = 'Name should not contain numbers.';
      isValid = false;
    }

    if (this.phoneNumber.trim().length === 0) {
      this.phoneError = 'Please enter your phone number.';
      isValid = false;
    } else if (!/^\d+$/.test(this.phoneNumber.trim())) {
      this.phoneError = 'Phone number should contain only digits.';
      isValid = false;
    }

    if (this.email.trim().length === 0) {
      this.emailError = 'Please enter your email address.';
      isValid = false;
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.email.trim())) {
      this.emailError = 'Please enter a valid email address.';
      isValid = false;
    }

    if (this.persons === null) {
      this.personsError = 'Please select the number of persons.';
      isValid = false;
    }

    if (this.date.trim().length === 0) {
      this.dateError = 'Please select the date.';
      isValid = false;
    }

    return isValid;
  }
  // Check if the selected date is valid
  isDateValid() {
    const selectedDate = new Date(this.date);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    return selectedDate >= currentDate; // Return true if the date is current or future
  }
  onPhoneNumberChange() {
    // Check if the phone number contains non-digit characters
    if (/\D/.test(this.phoneNumber.trim())) {
      this.phoneError = 'Phone number should contain only digits.';
    } else if (this.phoneNumber.trim().length !== 10) {
      this.phoneError = 'Phone number should contain exactly 10 digits.';
    } else {
      this.phoneError = ''; // Clear the error message if the phone number is valid
    }
  }

  checkName() {
    if (!/^[a-zA-Z\s]*$/.test(this.name.trim())) {
      this.nameError = 'Name should only contain alphabets and white spaces.';
    } else {
      this.nameError = ''; // Clear the error message if the name is valid
    }
  }

  clearForm() {
    // Clear form fields
    this.name = '';
    this.phoneNumber = '';
    this.email = '';
    this.persons = null;
    this.date = '';
  }
  // Check if the selected date is in the future
  checkDate() {
    const selectedDate = new Date(this.date);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    if (selectedDate < currentDate) {
      this.dateError = 'Please select a future or current date';
    } else {
      this.dateError = '';
    }
  }

}
