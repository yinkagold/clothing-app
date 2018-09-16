import { TestBed, inject } from '@angular/core/testing';

import { ProductQuantityService } from './product-quantity.service';

describe('ProductQuantityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductQuantityService]
    });
  });

  it('should be created', inject([ProductQuantityService], (service: ProductQuantityService) => {
    expect(service).toBeTruthy();
  }));
});
