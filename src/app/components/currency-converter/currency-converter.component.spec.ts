import {async, ComponentFixture, fakeAsync, inject, TestBed} from '@angular/core/testing';

import {CurrencyConverterComponent} from './currency-converter.component';
import {CurrencyService} from '../../services/currency/currency.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FixerResponseModel} from '../../models/fixer-response/fixer-response.model';
import {MockCurrencyService} from '../../services/mock/mock-currency.service';
import {Observable} from 'rxjs/Observable';
import {Mock} from 'protractor/built/driverProviders';

describe('CurrencyConverterComponent', () => {
  let component: CurrencyConverterComponent;
  let fixture: ComponentFixture<CurrencyConverterComponent>;
  let mockService: MockCurrencyService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyConverterComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        MockCurrencyService
      ]
    })
      .overrideComponent(CurrencyConverterComponent, {
      set: {
        providers: [
          { provide: CurrencyService, useClass: MockCurrencyService },
        ]
      }
    })
      .compileComponents()
      .then(() => {
        mockService = TestBed.createComponent(CurrencyConverterComponent).debugElement.injector.get(MockCurrencyService);
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return formatted number', () => {
    const result = 2500;
    expect(component.formatNumber(result)).toBe('2,500');
  });

  it('should convert source amount according to set rates', () => {
    component.conversionRate = 100;
    component.currencyForm.get('source').setValue(25);

    expect(component.currencyForm.get('result').value).toBe('2,500');
  });

  it('should get rate when source and result currencies are selected', fakeAsync(() => {
    const source = 'USD';
    const result = 'IDR';

    component.currencyForm.get('source').setValue(1);
    component.currencyForm.get('sourceCurrency').setValue(source);
    component.currencyForm.get('resultCurrency').setValue(result);

    fixture.detectChanges();

    expect(component.conversionRate).toBe(1000);
    expect(component.currencyForm.get('result').value).toEqual('1,000');
  }));
});
