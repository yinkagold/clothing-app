import { PaymentService } from "./../shared/services/payment.service";

import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "shared/services/auth-guard.service";
import { SharedModule } from "shared/shared.module";
import { AngularRaveModule } from "angular-rave";

import { CheckOutComponent } from "./components/check-out/check-out.component";
import { MyOrdersComponent } from "./components/my-orders/my-orders.component";
import { OrderSuccessComponent } from "./components/order-success/order-success.component";
import { ProductFilterComponent } from "./components/products/product-filter/product-filter.component";
import { ProductsComponent } from "./components/products/products.component";
import { ShippingFormComponent } from "./components/shipping-form/shipping-form.component";
import { ShoppingCartSummaryComponent } from "./components/shopping-cart-summary/shopping-cart-summary.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
import { MyOrderDetailsComponent } from "./components/my-order-details/my-order-details.component";
import { PaymentComponent } from "./components/payment/payment.component";
import { RavepaymentComponent } from "./components/ravepayment/ravepayment.component";
import { MakePaymentComponent } from "./components//make-payment/make-payment.component";

@NgModule({
  imports: [
    SharedModule,
    AngularRaveModule,
    RouterModule.forChild([
      { path: "shopping-cart", component: ShoppingCartComponent },

      { path: "products", component: ProductsComponent },
      {
        path: "check-out",
        component: CheckOutComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "payment/:id",
        component: PaymentComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "make-payment/:id",
        component: MakePaymentComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "order-success/:id",
        component: OrderSuccessComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "my/orders",
        component: MyOrdersComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "my/orders/:id",
        component: MyOrderDetailsComponent,
        canActivate: [AuthGuard]
      }
    ])
  ],
  declarations: [
    MyOrdersComponent,
    OrderSuccessComponent,
    ProductsComponent,
    ShoppingCartComponent,
    ProductFilterComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    CheckOutComponent,
    MyOrderDetailsComponent,
    PaymentComponent,
    RavepaymentComponent,
    MakePaymentComponent
  ],
  providers: [PaymentService],
  exports: [RavepaymentComponent]
})
export class ShoppingModule {}
