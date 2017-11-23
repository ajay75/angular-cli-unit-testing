export class FixerResponseModel {
  base  : string;
  date  : string;
  rates : any;

  constructor() {}

  setBase(base: string) {
    this.base = base;
  };

  setDate(date: Date) {
    this.date = date.toISOString();
  };

  setRates(rates: any) {
    this.rates = JSON.parse(JSON.stringify(rates));
  };
}
