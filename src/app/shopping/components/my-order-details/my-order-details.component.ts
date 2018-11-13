import { Order } from './../../../shared/models/order';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from './../../../shared/services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-order-details',
  templateUrl: './my-order-details.component.html',
  styleUrls: ['./my-order-details.component.css']
})
export class MyOrderDetailsComponent implements OnInit {
  id: string;
  order: Order;
  order$;

  constructor(private orderService: OrderService,
      private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    // Get order
    this.orderService.getOrdersById(this.id).subscribe(
      order => {
        this.order = order;
      }
    );
  }

}
