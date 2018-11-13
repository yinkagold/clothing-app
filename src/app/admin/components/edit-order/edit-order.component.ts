import { Order } from './../../../shared/models/order';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { OrderService } from './../../../shared/services/order.service';



@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  id;
  order = {};

  constructor(
    public orderService: OrderService,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    // Get order
    this.orderService.getOrdersByUser(this.id).subscribe(
      order => {
        this.order = order;
      }
    );
  }

  // onSubmit({value, valid}: {value: Order, valid: boolean}) {
  //   console.log(value);
  //   if (!valid) {
  //     // Reload the page
  //     this.router.navigate(['/edit-client/' + this.id]);

  //   } else {
  //     // Update the Order
  //     this.orderService.updateOrder(this.id, value);

  //     // navigate back to same order
  //     this.router.navigate(['/order/' + this.id]);

  //     }
  save(order) {
    if (this.id) this.orderService.updateOrder(this.id, order);
    else this.orderService.create(order);
   this.orderService.create(order);
   this.router.navigate(['/admin/orders']);
    }
}
