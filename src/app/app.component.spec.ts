import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {CurrencyConverterComponent} from './components/currency-converter/currency-converter.component';
import {ShoppingListComponent} from './components/shopping-list/shopping-list.component';
import {CurrencyService} from './services/currency/currency.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ShoppingListComponent,
        CurrencyConverterComponent
      ],
      imports: [
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
      ],
      providers: [
        CurrencyService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have a title`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Shopping List');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(app.titleEl.nativeElement.innerText).toContain(`${app.title}`);
  }));
});
