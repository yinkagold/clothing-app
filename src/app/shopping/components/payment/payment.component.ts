import { Component, Input, OnInit } from "@angular/core";
import { ShoppingCart } from "shared/models/shopping-cart";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.css"]
})
export class PaymentComponent {
  @Input("cart") cart: ShoppingCart;

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
