import {inject, bindable} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Resistances {
  @bindable resistances;

  constructor(ea) {
    this.ea = ea;
  }

  attached() {
    this.ea.subscribe('resistance.created', resistance => this.resistances.push(resistance));
  }
}
