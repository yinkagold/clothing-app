import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from './../../../shared/services/order.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { AdminOrderDetailsComponent } from './admin-order-details.component';
import { Observable } from 'rxjs';
class RouterStub {
  navigate(params) {

  }
}

class ActivatedRouteStub {
  params: Observable<any>;
}

describe('AdminOrderDetailsComponent', () => {
  let component: AdminOrderDetailsComponent;
  let fixture: ComponentFixture<AdminOrderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOrderDetailsComponent ],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should redirect users back to dashboard after delete', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    component.onDelete();

    expect(spy).toHaveBeenCalledWith([ '/admin/orders' ]);
  });
});
