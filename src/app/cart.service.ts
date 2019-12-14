import { Injectable } from '@angular/core';

/*
Decorator that marks a class as available to be provided and injected as a dependency.
*/
@Injectable(
  /*
  Determines which injectors will provide the injectable, by either associating it with an @NgModule or other InjectorType, or by specifying that this injectable should be provided in the 'root' injector, which will be the application-level injector in most apps.
  */
 { providedIn: 'root' }
)
export class CartService {
  public items:Array<any> = [];

  constructor() { }

  public addToCart(product:any):void {
    this.items.push(product);
  }

  public getItems():Array<any> {
    return this.items;
  }

  public clearCart():Array<any> {
    this.items = [];
    return this.items;
  }

}