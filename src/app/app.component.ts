import {
  Component,
  OnInit,
} from '@angular/core';
import { Currency } from 'src/app/shared/models';
import { CurrencyService } from 'src/app/shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  targetCurrency: Currency;
  amountToExchange = 1;
  exchangedAmount: number;

  constructor(public currencyService: CurrencyService) {}

  ngOnInit(): void {
  }

  setTargetCurrency(currency) {
    this.currencyService
      .getExchangeRate(currency)
      .subscribe((rate) => {
        this.targetCurrency = new Currency(currency, rate);
        this.exchange();
      });
  }

  updateAmount(amount) {
    this.amountToExchange = amount;
  }

  exchange() {
    this.exchangedAmount = this.targetCurrency.exchange(this.amountToExchange);
  }

  clearAmountToExchange() {
    this.amountToExchange = null;
  }
}
