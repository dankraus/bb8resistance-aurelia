"bundle";!function(){var a=System.get("@@amd-helpers").createDefine();define("target-stores.html!github:systemjs/plugin-text@0.0.3",[],function(){return'<template>\n  <require from=\'./google-map\'></require>\n  <require from=\'./new-resistance-form\'></require>\n  <require from=\'./resistances\'></require>\n\n  <section class="au-animate">\n    <h2>The BB-8 Resistance</h2>\n    <p>Click a Target store map marker and upload your resistance photo. Touch the BB-8 display! Join the other ${resistanceCount} agents!</p>\n\n    <div class="row">\n      <div class="col-md-6">\n        <google-map markers.bind="targetStoreGoogleMapMarkers"></google-map>\n      </div>\n\n      <div class="col-md-6">\n        <h2 if.bind="isLoading">Loading...</h2>\n        <new-resistance-form if.bind="isFormVisible" selected-store.bind="selectedStore"></new-resistance-form>\n      </div>\n    </div>\n\n    <div class="row">\n      <resistances resistances.bind="selectedStoreResistances"></resistances>\n    </div>\n  </section>\n</template>\n'}),a()}(),System.register("TargetStoreGoogleMapMarker",[],function(a){"use strict";function b(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var c;return{setters:[],execute:function(){c=function d(){var a=arguments.length<=0||void 0===arguments[0]?{coordinates:{longitude:longitude,latitude:latitude},storeNumber:storeNumber,legalStoreNumber:legalStoreNumber,storeName:storeName,formattedStoreName:formattedStoreName,street:street,state:state,city:city,country:country,market:market,phoneNumber:phoneNumber,county:county,intersectionDescription:intersectionDescription,zipCode:zipCode,formattedAddress:formattedAddress}:arguments[0];b(this,d),this.id=a.storeNumber,this.position={lat:parseFloat(a.coordinates.latitude),lng:parseFloat(a.coordinates.longitude)},this.icon={url:"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"},this.storeData=a},a("TargetStoreGoogleMapMarker",c)}}}),System.register("TargetStoresService",["npm:aurelia-framework@1.0.0-beta.1.0.6","npm:aurelia-fetch-client@1.0.0-beta.1.0.2"],function(a){"use strict";function b(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var c,d,e,f=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();return{setters:[function(a){c=a.inject},function(a){d=a.HttpClient}],execute:function(){e=function(){function a(a){b(this,e),a.configure(function(a){a.useStandardConfiguration().withBaseUrl("http://bb8-resistance-api.azurewebsites.net/api/")}),this.http=a}f(a,[{key:"findAll",value:function(){return this.http.fetch("TargetStores").then(function(a){return a.json()})}}]);var e=a;return a=c(d)(a)||a}(),a("TargetStoresService",e)}}}),System.register("target-stores",["npm:aurelia-framework@1.0.0-beta.1.0.6","aurelia-event-aggregator","TargetStoresService","ResistanceService","TargetStoreGoogleMapMarker","github:github/fetch@0.10.1"],function(a){"use strict";function b(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var c,d,e,f,g,h,i=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();return{setters:[function(a){c=a.inject},function(a){d=a.EventAggregator},function(a){e=a.TargetStoresService},function(a){f=a.ResistanceService},function(a){g=a.TargetStoreGoogleMapMarker},function(a){}],execute:function(){h=function(){function a(a,c,d){b(this,h),this.targetStoreGoogleMapMarkers=[],this.selectedStore={},this.selectedStoreResistances=[],this.resistanceCount=0,this.isLoading=!0,this.isFormVisible=!1,this.ea=a,this.targetStoresService=c,this.resistanceService=d}i(a,[{key:"activate",value:function(){var a=this;this.ea.subscribe("google-map.marker.clicked",function(b){a.isFormVisible=!0,a.selectedStore=b.storeData,a.resistanceService.findByStoreNumber(a.selectedStore.storeNumber).then(function(b){return a.selectedStoreResistances=b})}),this.targetStoresService.findAll().then(function(b){a.targetStoreGoogleMapMarkers=b.map(function(a){return null!==a.coordinates&&null!==a.coordinates.latitude&&null!==a.coordinates.longitude?new g(a):void 0}),a.isLoading=!1}),this.resistanceService.getStats().then(function(b){return a.resistanceCount=b.totalCount})}}]);var h=a;return a=c(d,e,f)(a)||a}(),a("TargetStores",h)}}}),function(){var a=System.get("@@amd-helpers").createDefine();define("resistances.html!github:systemjs/plugin-text@0.0.3",[],function(){return'<template>\n	<div class="resistance col-sm-6 col-md-3 card-container au-animate" repeat.for="resistance of resistances">\n		<div class="card">\n          <div class="content">\n          	<img class="thumbnail" src="${resistance.url}" alt="${resistance.agentName}">\n            <p class="name">${resistance.agentName}</p>\n          </div>\n        </div>\n	</div>\n</template>'}),a()}(),System.register("resistances",["npm:aurelia-framework@1.0.0-beta.1.0.6","aurelia-event-aggregator"],function(a){"use strict";function b(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function c(a,b,c){var d=c[b];if(d){var e={};for(var f in d)e[f]=d[f];e.value=e.initializer?e.initializer.call(a):void 0,Object.defineProperty(a,b,e)}}var d,e,f,g,h=function(){function a(a,b,c){for(var d=0;d<b.length;d++){var e=b[d],f=e.decorators,g=e.key;if(delete e.key,delete e.decorators,e.enumerable=e.enumerable||!1,e.configurable=!0,("value"in e||e.initializer)&&(e.writable=!0),f){for(var h=0;h<f.length;h++){var i=f[h];if("function"!=typeof i)throw new TypeError("The decorator for method "+e.key+" is of the invalid type "+typeof i);e=i(a,g,e)||e}if(void 0!==e.initializer){c[g]=e;continue}}Object.defineProperty(a,g,e)}}return function(b,c,d,e,f){return c&&a(b.prototype,c,e),d&&a(b,d,f),b}}();return{setters:[function(a){d=a.inject,e=a.bindable},function(a){f=a.EventAggregator}],execute:function(){g=function(){function a(a){b(this,i),c(this,"resistances",g),this.ea=a}var g={},g={};h(a,[{key:"resistances",decorators:[e],initializer:null,enumerable:!0}],null,g),h(a,[{key:"attached",value:function(){var a=this;this.ea.subscribe("resistance.created",function(b){return a.resistances.push(b)})}}],null,g);var i=a;return a=d(f)(a)||a}(),a("Resistances",g)}}}),function(){var a=System.get("@@amd-helpers").createDefine();define("resistance-gallery.html!github:systemjs/plugin-text@0.0.3",[],function(){return'<template>\n	<section class="au-animate">\n	    <h2>Resistance Gallery</h2>\n\n	    <div class="resistance col-sm-6 col-md-3 card-container" repeat.for="resistance of resistances">\n			<div class="card">\n	          <div class="content">\n	          	<img if.bind="resistance.url" src="${resistance.url}" alt="${resistance.agentName}">\n	            <p class="name">${resistance.agentName}</p>\n	            <p class="name">Store #${resistance.storeNumber}</p>\n	            <p class="name">${resistance.store.state}</p>\n	            <p class="name">${resistance.store.city}</p>\n	          </div>\n	        </div>\n		</div>\n	</section>\n</template>'}),a()}(),System.register("resistance-gallery",["npm:aurelia-framework@1.0.0-beta.1.0.6","ResistanceService"],function(a){"use strict";function b(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var c,d,e,f=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();return{setters:[function(a){c=a.inject},function(a){d=a.ResistanceService}],execute:function(){e=function(){function a(a){b(this,e),this.resistances=[],this.resistanceService=a}f(a,[{key:"attached",value:function(){var a=this;this.resistanceService.findAll().then(function(b){return a.resistances=b})}}]);var e=a;return a=c(d)(a)||a}(),a("ResistanceGallery",e)}}}),function(){var a=System.get("@@amd-helpers").createDefine();define("new-resistance-form.html!github:systemjs/plugin-text@0.0.3",[],function(){return'<template>\n	<div class="well">\n		<h3>${selectedStore.storeName}<br><small>${selectedStore.formattedAddress}</small></h3>\n		<form submit.trigger="submit()">\n			<div class="form-group">\n				<label for="resistanceAgentName">Your Agent Name</label>\n				<input type="text" class="form-control" name="resistanceAgentName" value.bind="agentName">\n			</div>\n			<div class="form-group">\n				<label for="resistancePhotoUpload">Photo</label>\n				<input type="file" name="resistancePhotoUpload" accept="image/*" files.bind="photo">\n			</div>\n			<button show.bind="!isSubmitting" type="submit" class="btn btn-success">Join the Resistance!</button>\n			<p show.bind="isSubmitting">Submitting...</p>\n		</form>\n	</div>\n</template>'}),a()}(),System.register("ResistanceService",["npm:aurelia-framework@1.0.0-beta.1.0.6","npm:aurelia-fetch-client@1.0.0-beta.1.0.2","npm:aurelia-http-client@1.0.0-beta.1"],function(a){"use strict";function b(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var c,d,e,f,g=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();return{setters:[function(a){c=a.inject},function(a){d=a},function(a){e=a}],execute:function(){f=function(){function a(a,c){b(this,f),this.fetchClient=new a.HttpClient,this.Json=a.json,this.httpClient=new c.HttpClient,this.fetchClient.configure(function(a){a.useStandardConfiguration().withBaseUrl("http://bb8-resistance-api.azurewebsites.net/api/")}),this.httpClient.configure(function(a){return a.withBaseUrl("http://bb8-resistance-api.azurewebsites.net/api/")})}g(a,[{key:"findAll",value:function(){return this.fetchClient.fetch("Resistances").then(function(a){return a.json()})}},{key:"findByStoreNumber",value:function(a){return this.fetchClient.fetch("TargetStores/"+a+"/Resistances").then(function(a){return a.json()})}},{key:"getStats",value:function(){return this.fetchClient.fetch("Resistances/Stats").then(function(a){return a.json()})}},{key:"create",value:function(a,b,c){var d=this;return this.uploadImage(c).then(function(a){return a.content.url}).then(function(c){return d.createResistance(a,b,c)}).then(function(a){return a.json()})}},{key:"uploadImage",value:function(a){var b=new FormData;return b.append("image",a[0]),this.httpClient.createRequest("Images").asPost().withContent(b).send()}},{key:"createResistance",value:function(a,b,c){var d=new this.Json({storeNumber:a,agentName:b,url:c});return this.fetchClient.fetch("Resistances",{method:"post",body:d})}}]);var f=a;return a=c(d,e)(a)||a}(),a("ResistanceService",f)}}}),System.register("new-resistance-form",["npm:aurelia-framework@1.0.0-beta.1.0.6","aurelia-event-aggregator","ResistanceService"],function(a){"use strict";function b(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function c(a,b,c){var d=c[b];if(d){var e={};for(var f in d)e[f]=d[f];e.value=e.initializer?e.initializer.call(a):void 0,Object.defineProperty(a,b,e)}}var d,e,f,g,h,i=function(){function a(a,b,c){for(var d=0;d<b.length;d++){var e=b[d],f=e.decorators,g=e.key;if(delete e.key,delete e.decorators,e.enumerable=e.enumerable||!1,e.configurable=!0,("value"in e||e.initializer)&&(e.writable=!0),f){for(var h=0;h<f.length;h++){var i=f[h];if("function"!=typeof i)throw new TypeError("The decorator for method "+e.key+" is of the invalid type "+typeof i);e=i(a,g,e)||e}if(void 0!==e.initializer){c[g]=e;continue}}Object.defineProperty(a,g,e)}}return function(b,c,d,e,f){return c&&a(b.prototype,c,e),d&&a(b,d,f),b}}();return{setters:[function(a){d=a.inject,e=a.bindable},function(a){f=a.EventAggregator},function(a){g=a.ResistanceService}],execute:function(){h=function(){function a(a,d){b(this,j),c(this,"selectedStore",h),this.agentName="",this.photo="",this.isSubmitting=!1,this.ea=a,this.resistanceService=d}var h={},h={};i(a,[{key:"selectedStore",decorators:[e],initializer:null,enumerable:!0}],null,h),i(a,[{key:"submit",value:function(){var a=this;this.isSubmitting=!0,this.resistanceService.create(this.selectedStore.storeNumber,this.agentName,this.photo).then(function(b){a.isSubmitting=!1,a.agentName="",a.photo="",a.ea.publish("resistance.created",b)})}}],null,h);var j=a;return a=d(f,g)(a)||a}(),a("NewResistanceForm",h)}}}),function(){var a=System.get("@@amd-helpers").createDefine();define("nav-bar.html!github:systemjs/plugin-text@0.0.3",[],function(){return'<template bindable="router">\n  <nav class="navbar navbar-default navbar-fixed-top" role="navigation">\n    <div class="navbar-header">\n      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#skeleton-navigation-navbar-collapse">\n        <span class="sr-only">Toggle Navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n      <a class="navbar-brand" href="#">\n        <i class="fa fa-home"></i>\n        <span>${router.title}</span>\n      </a>\n    </div>\n\n    <div class="collapse navbar-collapse" id="skeleton-navigation-navbar-collapse">\n      <ul class="nav navbar-nav">\n        <li repeat.for="row of router.navigation" class="${row.isActive ? \'active\' : \'\'}">\n          <a data-toggle="collapse" data-target="#skeleton-navigation-navbar-collapse.in" href.bind="row.href">${row.title}</a>\n        </li>\n      </ul>\n\n      <ul class="nav navbar-nav navbar-right">\n        <li class="loader" if.bind="router.isNavigating">\n          <i class="fa fa-spinner fa-spin fa-2x"></i>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</template>\n'}),a()}(),System.register("main",["github:twbs/bootstrap@3.3.6"],function(a){"use strict";function b(a){a.use.standardConfiguration().developmentLogging(),a.start().then(function(a){return a.setRoot()})}return a("configure",b),{setters:[function(a){}],execute:function(){}}}),function(){var a=System.get("@@amd-helpers").createDefine();define("google-map.html!github:systemjs/plugin-text@0.0.3",[],function(){return'<template>\n    <require from="google-map.css"></require>\n</template>'}),a()}(),function(){var a=System.get("@@amd-helpers").createDefine();define("google-map.css!github:systemjs/plugin-text@0.0.3",[],function(){return"google-map {\n    display: block;\n    height: 350px;\n}"}),a()}(),System.register("google-map",["npm:aurelia-framework@1.0.0-beta.1.0.6","aurelia-event-aggregator"],function(a){"use strict";function b(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function c(a,b,c){var d=c[b];if(d){var e={};for(var f in d)e[f]=d[f];e.value=e.initializer?e.initializer.call(a):void 0,Object.defineProperty(a,b,e)}}var d,e,f,g,h=function(){function a(a,b,c){for(var d=0;d<b.length;d++){var e=b[d],f=e.decorators,g=e.key;if(delete e.key,delete e.decorators,e.enumerable=e.enumerable||!1,e.configurable=!0,("value"in e||e.initializer)&&(e.writable=!0),f){for(var h=0;h<f.length;h++){var i=f[h];if("function"!=typeof i)throw new TypeError("The decorator for method "+e.key+" is of the invalid type "+typeof i);e=i(a,g,e)||e}if(void 0!==e.initializer){c[g]=e;continue}}Object.defineProperty(a,g,e)}}return function(b,c,d,e,f){return c&&a(b.prototype,c,e),d&&a(b,d,f),b}}();return{setters:[function(a){d=a.inject,e=a.bindable},function(a){f=a.EventAggregator}],execute:function(){g=function(){function a(a,d){b(this,i),c(this,"zoom",g),c(this,"centerLat",g),c(this,"centerLng",g),c(this,"markers",g),this.element=a,this.ea=d,this.map={},this.apikey=""}var g={},g={};h(a,[{key:"zoom",decorators:[e],initializer:function(){return 4},enumerable:!0},{key:"centerLat",decorators:[e],initializer:function(){return 38.7225},enumerable:!0},{key:"centerLng",decorators:[e],initializer:function(){return-90.4774},enumerable:!0},{key:"markers",decorators:[e],initializer:function(){return[]},enumerable:!0}],null,g),h(a,[{key:"attached",value:function(){var a=this,b=this;this.ea.subscribe("google.maps.ready",function(){a.map=new google.maps.Map(a.element,{zoom:a.zoom,center:{lat:a.centerLat,lng:a.centerLng}})}),window.myGoogleMapsCallback=function(){b.ea.publish("google.maps.ready")},this.loadApiScript()}},{key:"loadApiScript",value:function(){if(void 0===window.google||void 0===window.google.maps){var a=document.createElement("script");a.src="https://maps.googleapis.com/maps/api/js?key="+this.apikey+"&callback=myGoogleMapsCallback",document.body.appendChild(a)}}},{key:"markersChanged",value:function(a,b){this.setMapMarkers(a)}},{key:"setMapMarkers",value:function(a){var b=this;Array.isArray(a)?a.map(function(a){return b.addMarkerToMap(a)}):"object"==typeof a&&this.addMarkerToMap(a)}},{key:"addMarkerToMap",value:function(a){var b=this,c=new google.maps.Marker(a);c.addListener("click",function(a){b.ea.publish("google-map.marker.clicked",c)}),c.setMap(this.map)}},{key:"getCurrentPosition",value:function(){return new Promise(function(a,b){navigator.geolocation?navigator.geolocation.getCurrentPosition(function(b){return a(b)},function(a){return b(a)}):b("Browser Geolocation not supported or found.")})}},{key:"error",value:function(){console.log.apply(console,arguments)}}],null,g);var i=a;return a=d(Element,f)(a)||a}(),a("GoogleMap",g)}}}),function(){var a=System.get("@@amd-helpers").createDefine();define("app.html!github:systemjs/plugin-text@0.0.3",[],function(){return'<template>\n  <require from="nav-bar.html"></require>\n  <require from="bootstrap/css/bootstrap.css"></require>\n\n  <nav-bar router.bind="router"></nav-bar>\n\n  <div class="page-host">\n    <router-view></router-view>\n  </div>\n\n  <footer>&copy; <a href="http://dskraus.com" target="_main">Dan Kraus</a>. This year and all years.</footer>\n</template>\n'}),a()}(),System.register("app",[],function(a){"use strict";function b(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var c,d=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();return{setters:[],execute:function(){c=function(){function a(){b(this,a)}return d(a,[{key:"configureRouter",value:function(a,b){a.title="The BB-8 Resistance",a.map([{route:["","target-stores"],name:"target-stores",moduleId:"target-stores",nav:!0,title:"Resistance Target Store Map"},{route:"resistance-gallery",name:"resistance-gallery",moduleId:"resistance-gallery",nav:!0,title:"Resistance Gallery"},{route:"about",name:"about",moduleId:"about",nav:!0,title:"About"}]),this.router=b}}]),a}(),a("App",c)}}}),function(){var a=System.get("@@amd-helpers").createDefine();define("about.html!github:systemjs/plugin-text@0.0.3",[],function(){return'<template>\n	<section class="au-animate">\n		<div class="col-md-8">\n			<h2>About</h2>\n			<p>Resist! Do touch the BB-8 Display! Unfortuantely Target will be tearing down and destroying these awesome displays. Wouldn\'t it be awesome if they did a contest or something to give them away?</p>\n\n			<p>This page was inspired by all the BB-8 selfies on the <a href="https://www.facebook.com/groups/everythingbb8/" target="_blank">Everything BB-8 Facebook Group</a>. I thought it would be fun to match them up with the Target stores they were taken at and see how far the Resistance has spread.</p>\n\n			<h3>Technical Stuff</h3>\n			<p>This site was also an excuse to play around with Aurelia, a JavaScript framework, C# WebAPI 2 backend, and Azure. The JavaScript site is open source on <a href="https://github.com/dankraus/bb8resistance-aurelia" target="_blank">GitHub @ BB-8 Resistance Client</a>. There is also a <a href="https://github.com/dankraus/target-store-scraper-socrata-pusher" target="_blank">Target store scraper</a> scheduled job that pulls Target stores from their website and process sends the data to the Socrata Open Data service.</p>\n\n			<h3>Donate</h3>\n			<p>Websites don\'t run on magical fairy dust, even virtual ones ;). Feel free to make a donation via PayPal to help with server fees.</p>\n			<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">\n				<input type="hidden" name="cmd" value="_s-xclick">\n				<input type="hidden" name="hosted_button_id" value="EFQYD4U652LC6">\n				<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">\n				<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">\n			</form>\n		</div>\n	</section>\n</template>\n'}),a()}(),System.register("about",[],function(a){"use strict";function b(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var c;return{setters:[],execute:function(){c=function d(){b(this,d)},a("About",c)}}});