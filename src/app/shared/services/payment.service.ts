import { ShoppingCart } from "shared/models/shopping-cart";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";
import { Injectable, Input } from "@angular/core";

@Injectable()
export class PaymentService {
  @Input("cart") cart: ShoppingCart;
  userId: string;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe(auth => {
      if (auth) this.userId = auth.uid;
    });
  }

  processPayment(token: any, amount: number) {
    const payment = { token, amount };
    return this.db.list(`/make-payment/${this.userId}`).push(payment);
  }
}
