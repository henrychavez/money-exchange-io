import { MdcMenuSelectedEvent } from '@angular-mdc/web';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Currency } from 'src/app/shared/models';

@Component({
  selector: 'app-currency-selector',
  templateUrl: 'currency-selector.component.html',
  styleUrls: ['currency-selector.component.scss'],
})
export class CurrencySelectorComponent implements OnInit {

  selectedItem: Currency;
  shouldOpen: boolean;
  @Input() defaultSelectedItem = 0;
  @Input() disabled: boolean;
  @Input() items: Currency[];
  @Output() selected = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.selectCurrency(this.defaultSelectedItem);
  }

  updateCurrency(args: MdcMenuSelectedEvent) {
    this.selectCurrency(args.index);
  }

  toggleMenu() {
    this.shouldOpen = !this.shouldOpen;
  }

  private selectCurrency(index: number) {
    if (!this.items) { return; }

    this.selectedItem = this.items[index];
    this.selected.emit(this.selectedItem.name);
  }
}
