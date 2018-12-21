import { ShoppingCart } from "shared/models/shopping-cart";
import { Order } from "shared/models/order";
import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { AuthService } from "shared/services/auth.service";
import { OrderService } from "shared/services/order.service";

@Component({
  selector: "shipping-form",
  templateUrl: "./shipping-form.component.html",
  styleUrls: ["./shipping-form.component.css"]
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input("cart") cart: ShoppingCart;
  shipping = {};
  userSubscription: Subscription;
  userId: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(
      user => (this.userId = user.uid)
    ); // to store the id of the currently logged in user
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
  async placeOrder() {
    const order = new Order(this.userId, this.shipping, this.cart);
    const result = await this.orderService.placeOrder(order);
    this.router.navigate(["/payment", result.key]); // navigates to the payment page
  }

  confirmPayment(response: object): void {
    console.log(response);
  }

  cancelledPayment(): void {
    console.log(close);
  }

  generateReference(): string {
    let text = "";
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 10; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    }
  }
}
