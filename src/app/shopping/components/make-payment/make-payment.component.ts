import { ShoppingCart } from "shared/models/shopping-cart";
import { Component, OnInit, HostListener, Input } from "@angular/core";
import { PaymentService } from "shared/services/payment.service";
import { environment } from "environments/environment";

@Component({
  selector: "app-make-payment",
  templateUrl: "./make-payment.component.html",
  styleUrls: ["./make-payment.component.css"]
})
export class MakePaymentComponent implements OnInit {
  @Input("cart") ShoppingCart;
  handler: any;
  amount = 500;

  constructor(private paymentSvc: PaymentService) {}

  ngOnInit() {
    this.handler = StripeCheckout.configure({
      key: environment.stripeKey,
      image: "",
      locale: "auto",
      token: token => {
        this.paymentSvc.processPayment(token, this.amount);
      }
    });
  }

  handlePayment() {
    this.handler.open({
      name: `GoldyTopman`,
      excerpt: `Deposite Funds to Account`,
      amount: this.amount
    });
  }

  @HostListener("window.popstate")
  onPopstate() {
    this.handler.close();
  }
}
