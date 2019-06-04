export class Currency {
  name: string;
  exchangeRate = 1;

  constructor(name: string, exchangeRate?: number) {
    this.name = name.toLocaleUpperCase();
    this.exchangeRate = exchangeRate;
  }

  get flag(): string {
    return `currency-flag-${ this.name.toLocaleLowerCase() }`;
  }

  exchange(amount: number) {
    return amount * this.exchangeRate;
  }

}
