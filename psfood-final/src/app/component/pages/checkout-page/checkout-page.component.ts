import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { CartService } from "../../../services/cart.service";
import { UserService } from "../../../services/user.service";
import { Order } from "../../../shared/models/order";
import { FormControl } from "@angular/forms";


import { Router } from "@angular/router";
import * as L from 'leaflet';


@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit, AfterViewInit {
  order: Order = new Order();
  checkoutForm!: FormGroup;
  fc = {
    name: new FormControl(''), // Define as FormControl instance
    address: new FormControl('')
    // name: new FormControl(''),
    // address: new FormControl('')
  };

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastrService: ToastrService,
    private router: Router
  ) {
    const cart = this.cartService.getCart();
    this.order.items = cart.items;
    this.order.totalPrice = cart.totalPrice;
  }

  ngOnInit() {
    let { name, address } = this.userService.currentUser;
    this.checkoutForm = this.formBuilder.group({
      'name': [name, Validators.required],
      'address': [address, Validators.required]
    });
  }

  ngAfterViewInit(): void {
    const map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
  }

  createOrder() {
    if (this.checkoutForm.invalid) {
      this.toastrService.warning('please fill the inputs', 'Invalid Inputs');
      return;
    }

    if (!this.order.addressLatLng) {
      this.toastrService.warning('please select your location on the map', 'Location');
      return;
    }

    // Navigate to the payment page
    this.router.navigate(['/payment-page']);

    console.log(this.order);
  }
}
