import { Component, OnInit } from '@angular/core';

// Import Input
import { Input } from '@angular/core';

// Below is the @Component decorator
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  // The @Input decorator indicates that the property value passes in from
  // the component's parent, the product list component
  @Input() product;
  constructor() { }

  ngOnInit() {
  }

}