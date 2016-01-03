import {inject} from 'aurelia-framework';
import {ResistanceService} from './ResistanceService.js';

@inject(ResistanceService)
export class ResistanceGallery {

  resistances = [];

  constructor(resistanceService) {
    this.resistanceService = resistanceService;
  }

  attached() {
    this.resistanceService.findAll()
      .then(resistances => this.resistances = resistances);
  }
}
