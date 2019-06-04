import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Currency } from 'src/app/shared/models';
import { environment } from 'src/environments/environment';

@Injectable()
export class CurrencyService {
  readonly baseCurrency = new Currency('EUR');
  readonly targetCurrencies = [
    new Currency('USD'),
    // Uncomment to enabled more currencies
    // new Currency('PEN'),
    // new Currency('ARS'),
  ];

  constructor(private http: HttpClient) { }

  getExchangeRate(symbol: string): Observable<number> {
    const params = {
      access_key: environment.fixerKey,
      base: this.baseCurrency.name,
      symbols: symbol,
    };

    return this.http
      .get<{ rates: object }>(`${ environment.baseUrl }/latest`, { params })
      .pipe(map(({ rates }) => rates[symbol]));
  }
}
