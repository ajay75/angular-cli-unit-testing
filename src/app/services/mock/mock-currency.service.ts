import { Observable } from 'rxjs/Observable';
import { FixerResponseModel } from '../../models/fixer-response/fixer-response.model';

export class MockCurrencyService {

  mockResult: FixerResponseModel;

  constructor() {
    this.mockResult = new FixerResponseModel();
    this.mockResult.setBase('USD');
    this.mockResult.setDate(new Date());
    this.mockResult.setRates({
      IDR : 1000
    });
  }

  getCurrencyRate(currencyFrom: string, currencyTo: string): Observable<FixerResponseModel> {
    return Observable.of(this.mockResult);
  }

  getAllRates(): Observable<FixerResponseModel> {
    return Observable.of(this.mockResult);
  }

  getCurrencies(): Observable<any> {
    const mockResult = {
      'USD': 'United States Dollar',
      'IDR': 'Indonesia Rupiah',
      'EUR': 'Euro'
    };
    return Observable.of(mockResult);
  }
}
