import {inject, bindable} from 'aurelia-framework';
import {ResistanceService} from './ResistanceService.js';

@inject(ResistanceService)
export class NewResistanceForm {
  @bindable selectedStore;

  agentName = '';
  photo = '';

  constructor(resistanceService) {
    this.resistanceService = resistanceService;
  }

  submit() {
    this.resistanceService.create(this.selectedStore.storeNumber, this.agentName, this.photo);
  }
}
