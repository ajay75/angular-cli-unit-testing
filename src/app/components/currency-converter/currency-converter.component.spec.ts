import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyConverterComponent } from './currency-converter.component';
import {CurrencyService} from "../../services/currency/currency.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

describe('CurrencyConverterComponent', () => {
  let component: CurrencyConverterComponent;
  let fixture: ComponentFixture<CurrencyConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyConverterComponent ],
      imports: [
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
      ],
      providers: [
        CurrencyService
      ]
    })
    .compileComponents();
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
});
