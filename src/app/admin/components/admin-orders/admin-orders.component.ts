import { OrderService } from './../../../shared/services/order.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  userId: any;
  orders: any[];
  constructor(
    private orderService: OrderService,
    private router: Router,
    private route: ActivatedRoute) {
   }

   ngOnInit() {
     this.orderService.getOrders().subscribe(
       orders => {
         this.orders = orders;
       }
     );
   }
}
