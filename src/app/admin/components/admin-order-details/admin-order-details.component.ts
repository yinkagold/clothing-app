import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

import { Order } from './../../../shared/models/order';
import { OrderService } from './../../../shared/services/order.service';


@Component({
  selector: 'app-admin-order-details',
  templateUrl: './admin-order-details.component.html',
  styleUrls: ['./admin-order-details.component.css']
})
export class AdminOrderDetailsComponent implements OnInit {
  id: string;
  order: Order;
  order$;
  constructor(private orderService: OrderService,
      db: AngularFireDatabase,
      public router: Router,
      public route: ActivatedRoute ) {
      // this.orders = db.list('/orders');
   }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    // Get order
    this.orderService.getOrdersById(this.id).subscribe(
      order => {
        this.order = order;
      }
    );
  }

  onDelete() {
    if (confirm('Are you sure you want to delete this order?')) {
      this.orderService.deleteOrder(this.id);
      // Navigate back to the dashboard
      this.router.navigate(['/admin/orders']);
    }
  }
}
