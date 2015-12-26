import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {TargetStoresService} from './TargetStoresService.js';
import {ResistanceService} from './ResistanceService.js';
import {TargetStoreGoogleMapMarker} from './TargetStoreGoogleMapMarker.js';

import 'fetch';

@inject(EventAggregator, TargetStoresService, ResistanceService)
export class TargetStores {

  heading = 'Target Stores';
  targetStoreGoogleMapMarkers = [];
  selectedStore = {};
  selectedStoreResistances = [];
  isFormVisible = false;


  constructor(ea, targetStoresService, resistanceService) {
    this.ea = ea;
    this.targetStoresService = targetStoresService;
    this.resistanceService = resistanceService;
  }

  activate() {
    this.ea.subscribe('google-map.marker.clicked', marker => {
      this.isFormVisible = true;
      this.selectedStore = marker.storeData;
      this.resistanceService.findByStoreNumber(this.selectedStore.storeNumber)
        .then(resistances => this.selectedStoreResistances = resistances );
    });

    this.targetStoresService.findAll()
      .then(stores => {
        this.targetStoreGoogleMapMarkers = stores.map(store => {
          if (store.coordinates !== undefined) {
            return new TargetStoreGoogleMapMarker(store);
          }
        });
      });
  }

}
