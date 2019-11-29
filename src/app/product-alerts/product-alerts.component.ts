import { Component, OnInit } from '@angular/core';

// Import Input as this component needs to accept an input from
// a parent component
import { Input } from '@angular/core';

// Import Output as this component needs to output (return) something
// to it's parent component. Import EventEmitter as this is what we
// are going to output
import { Output, EventEmitter} from '@angular/core';

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

  // Create an EventEmitter object called notify which we will use as
  // an output to the parent component. The name of this property 
  // i.e. 'notify' will be used by the parent component to bind to.
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}