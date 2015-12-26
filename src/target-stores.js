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


	constructor(ea, TargetStoresService, ResistanceService) {
    this.ea = ea;
    this.targetStoresService = TargetStoresService;
    this.resistanceService = ResistanceService;
	}

  activate() {
    this.ea.subscribe('google-map.marker.clicked', marker => {
      this.isFormVisible = true;
      this.selectedStore = marker.storeData;
      this.resistanceService.findByStoreNumber(this.selectedStore.storeNumber)
        .then(resistances => {this.selectedStoreResistances = resistances});
    });



    this.targetStoresService.findAll()
      .then(stores => {
        this.targetStoreGoogleMapMarkers = stores.map(store => {
          if(store.coordinates != undefined) {
            return new TargetStoreGoogleMapMarker(store)
          }
        });
      });




    // new TargetStoreGoogleMapMarker(this.stores[0])
    // console.log(this.map);

    // this.ea.subscribe('google.maps.ready', () => {
    //         console.log('loaded in store js');
    //         let coords = { "latitude": 0, "longitude": 0 };

    //       this.map.getCurrentPosition().then(geoposition => {
    //         coords['latitude'] = geoposition.coords.latitude;
    //         coords['longitude'] = geoposition.coords.longitude;
    //       });

    //     });

  }

}
