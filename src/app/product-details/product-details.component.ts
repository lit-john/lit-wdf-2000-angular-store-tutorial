import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  /*
  Declare a public instance variable called product to be of any type, This is the same as writing:
  product;
  */
  public product:any; 

  /*
  Below is an example of code injection. Angular will inject the ActivatedRoute into the constructor. The ActivatedRoute is specific to each routed component loaded by the Angular Router. It contains information about the route, its parameters, and additional data associated with the route.
  Also, because we declare the argument to the constructor using the access modifier private, Angular will automatically make a private instance variable called route of type ActivatedRoute.
  Same is true for cartService.
  */
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  /*
  Angular calls ngOnInit() shortly after creating a component.
  */
  ngOnInit() {
    /*
     Subscribe to the route's paramMap, when a new parameter is added to the map then the supplied 'arrow' function is called and the paramMap is passed to it.
     */
    this.route.paramMap.subscribe(params => {
      // the + operator in JS converts a string to a number
      this.product = products[+params.get('productId')];
    });
  }

  addToCart(product: any) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

}