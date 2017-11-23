import {TestBed, inject} from '@angular/core/testing';
import {CurrencyService} from './currency.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {FixerResponseModel} from '../../models/fixer-response/fixer-response.model';

describe('CurrencyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CurrencyService],
    });
  });

  it('should be created', inject([CurrencyService], (service: CurrencyService) => {
    expect(service).toBeTruthy();
  }));

  it('should retrieve the currency rate', inject([CurrencyService, HttpTestingController],
    (service: CurrencyService, httpMock: HttpTestingController) => {
      const source = 'USD';
      const result = 'IDR';

      const mockResponse = new FixerResponseModel();
      mockResponse.setBase('USD');
      mockResponse.setDate(new Date());
      mockResponse.setRates({
        'IDR': 1
      });

      service.getCurrencyRate(source, result).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const request = httpMock.expectOne(`//api.fixer.io/latest?base=USD&symbols=IDR`);

      expect(request.request.method).toEqual('GET');
      request.flush(mockResponse);

      httpMock.verify();
    }));
});
