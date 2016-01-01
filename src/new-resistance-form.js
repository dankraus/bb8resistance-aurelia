import {inject, bindable} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {ResistanceService} from './ResistanceService.js';

@inject(EventAggregator, ResistanceService)
export class NewResistanceForm {
  @bindable selectedStore;

  agentName = '';
  photo = '';
  isSubmitting = false;

  constructor(ea, resistanceService) {
    this.ea = ea;
    this.resistanceService = resistanceService;
  }

  submit() {
    this.isSubmitting = true;
    this.resistanceService.create(this.selectedStore.storeNumber, this.agentName, this.photo)
      .then(newResistance => {
        this.isSubmitting = false;
        this.agentName = '';
        this.photo = '';
        this.ea.publish('resistance.created', newResistance);
      });
  }
}
