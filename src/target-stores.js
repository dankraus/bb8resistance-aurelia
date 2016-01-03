import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {TargetStoresService} from './TargetStoresService.js';
import {ResistanceService} from './ResistanceService.js';
import {TargetStoreGoogleMapMarker} from './TargetStoreGoogleMapMarker.js';

import 'fetch';

@inject(EventAggregator, TargetStoresService, ResistanceService)
export class TargetStores {

  targetStoreGoogleMapMarkers = [];
  selectedStore = {};
  selectedStoreResistances = [];
  resistanceCount = 0;
  isLoading = true;
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

      // a hack to scroll the form into view. Needed for mobile because it shows under the map and it's not
      // clear that the form has been made visible. If I do isFormVisibleChanged(new, old) aurealia lifecycle
      // function, the DOM hasn't been updated yet to show the visible element. The scroll function has nothing
      // to scroll into view yet. The DOM changes quick so this timeout shouldn't be too much delay.
      setTimeout(time => document.getElementById('resistanceForm').scrollIntoView(), 750);

      this.resistanceService.findByStoreNumber(this.selectedStore.storeNumber)
        .then(resistances => this.selectedStoreResistances = resistances );
    });

    this.targetStoresService.findAll()
      .then(stores => {
        this.targetStoreGoogleMapMarkers = stores.map(store => {
          if (store.coordinates !== null && (store.coordinates.latitude !== null && store.coordinates.longitude !== null) ) {
            return new TargetStoreGoogleMapMarker(store);
          }
        });

        this.isLoading = false;
      });

    this.resistanceService.getStats()
      .then(stats => this.resistanceCount = stats.totalCount);
  }
}
