import { TestBed, inject } from '@angular/core/testing';
import { CurrencyService } from './currency.service';
import {HttpClientModule} from '@angular/common/http';

describe('CurrencyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CurrencyService],
    });
  });

  it('should be created', inject([CurrencyService], (service: CurrencyService) => {
    expect(service).toBeTruthy();
  }));
});
