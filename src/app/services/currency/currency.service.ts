import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FixerResponseModel } from '../../models/fixer-response/fixer-response.model';

@Injectable()
export class CurrencyService {

  constructor(
    private http: HttpClient
  ) { }

  getCurrencyRate(currencyFrom: string, currencyTo: string): Observable<FixerResponseModel> {
    const fixerAddress = `//api.fixer.io/latest?base=${currencyFrom}&symbols=${currencyTo}`;
    return this.http.get(fixerAddress);
  }

  getAllRates(): Observable<FixerResponseModel> {
    const fixerAddress = `//api.fixer.io/latest`;
    return this.http.get(fixerAddress);
  }

  getCurrencies(): Observable<any> {
    return this.http.get('https://openexchangerates.org/api/currencies.json');
  }

}
