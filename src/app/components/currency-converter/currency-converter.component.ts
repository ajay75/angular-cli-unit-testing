import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CurrencyService} from '../../services/currency/currency.service';
import {CurrencyModel} from "../../models/currency/currency.model";
import {Observable} from "rxjs/Rx";

declare let accounting;

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {

  currencyForm: FormGroup;
  conversionRate = 1;
  currencies: CurrencyModel[] = [];

  constructor(private currencyService: CurrencyService) {
  }

  ngOnInit() {
    this.getCurrencies();
    this.initForm();
  }

  getCurrencies() {
    Observable.forkJoin([this.currencyService.getCurrencies(), this.currencyService.getAllRates()]).subscribe((data) => {
      Object.keys(data[0]).map(key => {
        if (data[1].rates[key] > 0) {
          this.currencies.push(new CurrencyModel(data[0][key], key));
        }
      });
    });
  }

  getRate() {
    const from = this.currencyForm.get('sourceCurrency').value;
    const to = this.currencyForm.get('resultCurrency').value;

    if (from && to) {
      this.currencyService.getCurrencyRate(from, to).subscribe(res => {
        const currentConvertedValue = this.currencyForm.get('result').value;
        this.conversionRate = res.rates[to];
        this.currencyForm.get('result').setValue(
          accounting.formatNumber(accounting.unformat(currentConvertedValue) * this.conversionRate)
        );
      });
    }
  }

  formatNumber(target: number): string {
    return accounting.formatNumber(target);
  }

  initForm() {
    this.currencyForm = new FormGroup({
      'source': new FormControl(0),
      'sourceCurrency': new FormControl(''),
      'result': new FormControl(0),
      'resultCurrency': new FormControl('')
    });

    this.currencyForm.get('source').valueChanges.subscribe(data => {
      this.currencyForm.get('source').setValue(this.formatNumber(data), {'emitEvent': false});
      const result = accounting.unformat(data) * this.conversionRate;
      this.currencyForm.get('result').setValue(accounting.formatNumber(result));
    });

    this.currencyForm.get('sourceCurrency').valueChanges.subscribe((data) => {
      this.getRate();
    });

    this.currencyForm.get('resultCurrency').valueChanges.subscribe((data) => {
      this.getRate();
    });
  }

}
