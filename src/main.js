// this is the base-config for resource-finder
// the point of this file is that it will move outside the project
// (so that settings we put in it can be used by other projects)
// and be pulled in with an axios call or something
// (we might not need to use axios with new vue async tools)
// if that is not needed, we can move this info to main.js

// turn off console logging in production
const { hostname='' } = location;
if (hostname !== 'localhost' && !hostname.match(/(\d+\.){3}\d+/)) {
  console.log = console.info = console.debug = console.error = function () {};
}

// import pinboard
import pinboard from '@phila/pinboard/src/main.js';

// data-sources
import recycling from './data-sources/recycling';

import customGreeting from './components/customGreeting.vue';
const customComps = {
  'customGreeting': customGreeting,
};


pinboard({
  app: {
    title: 'Resources for recycling and donation',
    subtitle: 'Find out where to donate items or recycle in Philadelphia',
    logoAlt: 'City of Philadelphia',
    type: 'recycling',
  },
  gtag: {
    category: 'rf-recycling',
  },
  resetDataOnGeocode: true,
  addressInput: {
    placeholder: 'Search by address or keyword',
  },
  searchBar: {
    dropdown: [
      'keyword',
      'address',
    ],
    labelText:  {
      address: 'Search by address',
      keyword: 'Search by keyword',
    },
    placeholderText: {
      address: 'Search by address',
      keyword: 'Search by keyword',
    },
  },
  locationInfo: {
    siteName: 'organization_name',
  },
  customComps,
  hiddenRefine: {
    blank: function(item) {
      return item.organization_name !== null;
    },
  },
  refine: {
    type: 'categoryField_array',
    value: function(item) {
      return item.services_offered;
    },
  },
  alerts: {
    // header: {
    //   type: 'alertBanner',
    //   enabled: function() {
    //     return true;
    //   },
    // },
  },
  markerType: 'circle-marker',
  circleMarkers:{
    // color: '#FF9D14',
    weight: 0,
    radius: 8,
    mobileRadius: 12,
    size: 16,
    mobileSize: 20,
  },
  cyclomedia: {
    enabled: false,
    // measurementAllowed: false,
    // popoutAble: true,
    // recordingsUrl: 'https://atlas.cyclomedia.com/Recordings/wfs',
    // username: process.env.VUE_APP_CYCLOMEDIA_USERNAME,
    // password: process.env.VUE_APP_CYCLOMEDIA_PASSWORD,
    // apiKey: process.env.VUE_APP_CYCLOMEDIA_API_KEY,
  },
  dataSources: {
    recycling,
  },
  router: {
    enabled: false,
  },
  geocoder: {
    url(input) {
      const inputEncoded = encodeURIComponent(input);
      return `//api.phila.gov/ais/v1/search/${inputEncoded}`;
    },
    params: {
      gatekeeperKey: process.env.VUE_APP_GATEKEEPER_KEY,
      include_units: true,
    },
  },
  footer: [
    {
      type: "native",
      href: "https://www.phila.gov/",
      attrs: {
        target: "_blank",
      },
      text: "City of Philadelphia",
    },
    {
      type: "native",
      href: "/oia/resource-finder",
      text: "About",
    },
    {
      type: "native",
      href: "https://www.phila.gov/feedback/",
      attrs: {
        target: "_blank",
      },
      text: "Feedback",
    },
  ],
  infoCircles: {
    'Single-stream recycling': {
      'html': '\
      <div class="full-div">We accept the following items cleaned and dry curbside:</div>\
      <div class="grid-x">\
        <div class="half-div">\
          <ul>\
            <li>Plastic bottles and containers (#1, 2, & 5)</li>\
            <li>Metal Cans</li>\
            <li>Glass</li>\
          </ul>\
        </div>\
        <div class="half-div">\
          <ul>\
            <li>Paper</li>\
            <li>Cardboard</li>\
            <li>Cartons</li>\
          </ul>\
        </div>\
      </div>\
      ',
    },
  },
  map: {
    // type: 'leaflet',
    type: 'mapbox',
    // tiles: 'hosted',
    containerClass: 'map-container',
    defaultBasemap: 'pwd',
    center: [ -75.163471, 39.953338 ],
    // minZoom: 11,
    // maxZoom: 25,
    // shouldInitialize: true,
    zoom: 12,
    geocodeZoom: 15,
    imagery: {
      enabled: false,
    },
    basemaps: {
      pwd: {
        url: 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap/MapServer',
        tiledLayers: [
          'cityBasemapLabels',
        ],
        type: 'featuremap',
        attribution: 'Parcels: Philadelphia Water',
      },
    },
    tiledLayers: {
      cityBasemapLabels: {
        url: 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap_Labels/MapServer',
        zIndex: '3',
      },
    },
  },
  // mbStyle: 'mapbox://styles/mapbox/streets-v11',
  mbStyle: {
    version: 8,
    sources: {
      pwd: {
        tiles: [
          'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap/MapServer/tile/{z}/{y}/{x}',
        ],
        type: 'raster',
        tileSize: 256,
      },
    },
    layers: [
      {
        id: 'pwd',
        type: 'raster',
        source: 'pwd',
      },
    ],
  },
  basemapSources: {
    pwd: {
      source: {
        tiles: [
          'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap/MapServer/tile/{z}/{y}/{x}',
          // '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap_Labels/MapServer/tile/{z}/{y}/{x}'
        ],
        type: 'raster',
        tileSize: 256,
      },
      layer: {
        id: 'pwd',
        type: 'raster',
      },
    },
    imagery2019: {
      source: {
        tiles: [
          'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2019_3in/MapServer/tile/{z}/{y}/{x}',
          // '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap_Labels/MapServer/tile/{z}/{y}/{x}'
        ],
        type: 'raster',
        tileSize: 256,
      },
      layer: {
        id: 'imagery2019',
        type: 'raster',
      },
    },
  },
  basemapLabelSources:{
    cityBasemapLabels: {
      source: {
        tiles: [ 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap_Labels/MapServer/tile/{z}/{y}/{x}' ],
        type: 'raster',
        tileSize: 256,
      },
      layer: {
        id: 'cityBasemapLabels',
        type: 'raster',
      },
    },
    imageryBasemapLabels: {
      source: {
        tiles: [ 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_Labels/MapServer/tile/{z}/{y}/{x}' ],
        type: 'raster',
        tileSize: 256,
      },
      layer: {
        id: 'imageryBasemapLabels',
        type: 'raster',
      },
    },
  },
});
