// this is the base-config for resource-finder
// the point of this file is that it will move outside the project
// (so that settings we put in it can be used by other projects)
// and be pulled in with an axios call or something
// (we might not need to use axios with new vue async tools)
// if that is not needed, we can move this info to main.js

// import pinboard
import pinboard from '@phila/pinboard/src/main.js';

// data-sources
import recycling from './data-sources/recycling';
var BASE_CONFIG_URL = 'https://cdn.jsdelivr.net/gh/cityofphiladelphia/mapboard-default-base-config@6126861722cee9384694742363d1661e771493b9/config.js';

pinboard({
  // baseConfig: null,
  locationSlots: {
    title: function(state, item) {
      return item.organization_name;
    },
  },
  baseConfig: BASE_CONFIG_URL,
  cyclomedia: {
    enabled: false,
    measurementAllowed: false,
    popoutAble: true,
    recordingsUrl: 'https://atlas.cyclomedia.com/Recordings/wfs',
    username: process.env.VUE_APP_CYCLOMEDIA_USERNAME,
    password: process.env.VUE_APP_CYCLOMEDIA_PASSWORD,
    apiKey: process.env.VUE_APP_CYCLOMEDIA_API_KEY,
  },
  dataSources: {
    recycling,
  },
  router: {
    enabled: false,
  },
  app: {
    title: 'Resources for recycling and donation',
    tagLine: 'Find out where to donate items or recycle in Philadelphia',
    logoAlt: 'City of Philadelphia',
    type: 'recycling',
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
      '
    },
    'Source-separated recycling': {
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
      '
    }
  },
  map: {
    defaultBasemap: 'pwd',
    center: [ -75.163471, 39.953338 ],
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
});
