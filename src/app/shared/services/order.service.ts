import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

import { Order } from './../models/order';

@Injectable()
export class OrderService {

  orders: FirebaseListObservable<any[]>;
  order: FirebaseObjectObservable<any>;


  constructor(private db: AngularFireDatabase, private shoppingCartService: ShoppingCartService) {
    this.orders = this.db.list('/orders') as FirebaseListObservable<Order[]>;
  }

  async placeOrder(order) {
    const result = await this.db.list('/orders').push(order);
    this.shoppingCartService.clearCart();
    return result;
  }

  getOrders() {
    // return this.db.list('/orders');
    return this.orders;
  }

  getOrdersById (id: string) {
    this.order = this.db.object('/orders/' + id) as FirebaseObjectObservable<Order>;
    return this.order;
  }

  getOrdersByUser(userId: string) {
    return this.db.list('/orders', {
      query: {
        orderByChild: 'userId',
        equalTo: userId
      }
    });
  }

  getUserOrderDetails(userId: string) {
    this.order = this.db.object('/orders/' + userId) as FirebaseObjectObservable<Order>;
    return this.order;
  }

    deleteOrder(id: string) {
      return this.orders.remove(id);
    }
    create(order) {
      return this.db.list('/orders').push(order);
    }
    get(id: string) {
      return this.db.object('/orders/' + id);
    }
    updateOrder(id: string, order: Order) {
      return this.orders.update(id, order);
    }
}
