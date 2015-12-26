import {inject, bindable} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(Element, EventAggregator)
export class GoogleMap {
    @bindable zoom = 4;
    @bindable centerLat = 38.7225;
    @bindable centerLng = -90.4774;
    @bindable markers = [];

    constructor(element, ea){
        this.element = element;
        this.ea = ea;
        this.map = {};

        this.apikey = '';
    }

    attached() {
        var classRef = this;

        this.ea.subscribe('google.maps.ready', () => {
            this.map = new google.maps.Map(this.element,
                {
                    zoom: this.zoom,
                    center: {
                        lat: this.centerLat,
                        lng: this.centerLng
                    }
            });
        });

        window.myGoogleMapsCallback = function() {
            classRef.ea.publish('google.maps.ready');
        };

        this.loadApiScript();
    }

    loadApiScript() {
        if (window.google === undefined || window.google.maps === undefined) {
            let scriptEl = document.createElement('script');
            scriptEl.src = `https://maps.googleapis.com/maps/api/js?key=${this.apikey}&callback=myGoogleMapsCallback`;
            document.body.appendChild(scriptEl);
        }
    }

    markersChanged(newMarkers, oldMarkers) {
        this.setMapMarkers(newMarkers);
    }

    setMapMarkers(markers) {
        if(Array.isArray(markers)){
            markers.map(marker => this.addMarkerToMap(marker));
        } else if (typeof markers  === 'object') {
            this.addMarkerToMap(markers);
        }
    }

    addMarkerToMap(marker) {
        let gMarker = new google.maps.Marker(marker);
        gMarker.addListener('click', marker => {
            this.ea.publish('google-map.marker.clicked', gMarker);
        });
        gMarker.setMap(this.map);

    }

    getCurrentPosition() {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => resolve(position), evt => reject(evt));
            } else {
                reject('Browser Geolocation not supported or found.')
            }
        });
    }

    error() {
        console.log.apply(console, arguments);
    }
}