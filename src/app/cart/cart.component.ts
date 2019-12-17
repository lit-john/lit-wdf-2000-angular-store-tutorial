import { Component, OnInit } from '@angular/core';

/*
 We are going to use Angular's FormBuilder service so let's import it and we'll then inject it into the comnponent.
 */
import { FormBuilder, FormGroup } from '@angular/forms';

import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public items:any;

  // The checkOutForm variable will hold our form model
  public checkoutForm:FormGroup;
  /*
  Inject the CartService and FormBuilder and save them as private instance variables
  */
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder) {
     }

  ngOnInit() {
    this.items = this.cartService.getItems();

      this.checkoutForm = this.formBuilder.group({
        name: '',
        address: ''
    });
  }

  onSubmit(customerData) {
    console.warn(customerData.name, " Your order has been submitted for delivery to", customerData.address );

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}