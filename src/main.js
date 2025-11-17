// this is the base-config for resource-finder
// the point of this file is that it will move outside the project
// (so that settings we put in it can be used by other projects)
// and be pulled in with an axios call or something
// (we might not need to use axios with new vue async tools)
// if that is not needed, we can move this info to main.js

import isMac from './util/is-mac';
if (isMac()) {
  import('./assets/mac-style.scss')
}

// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown as farAngleDown } from '@fortawesome/pro-regular-svg-icons/faAngleDown';
import { faAngleUp as farAngleUp } from '@fortawesome/pro-regular-svg-icons/faAngleUp';
import { faTimes as farTimes } from '@fortawesome/pro-regular-svg-icons/faTimes';
import { faPlus as farPlus } from '@fortawesome/pro-regular-svg-icons/faPlus';
import { faMinus as farMinus } from '@fortawesome/pro-regular-svg-icons/faMinus';

library.add(farAngleDown, farAngleUp, farTimes, farPlus, farMinus);

import '../node_modules/@phila/pinboard/dist/index.css';
import pinboard from '@pinboard';

// data-sources
import recycling from './data-sources/recycling';

import customGreeting from './components/customGreeting.vue';
const customComps = markRaw({
  'customGreeting': customGreeting,
});

let $config = {
  i18n: {
    data: {
      messages: {
        'en-US': {}
      }
    }
  },
  publicPath: import.meta.env.VITE_PUBLICPATH,
  app: {
    title: 'Resources for recycling and donation',
    subtitle: 'Find out where to donate items or recycle in Philadelphia',
    logoAlt: 'City of Philadelphia',
    type: 'recycling',
  },
  gtag: {
    category: 'rf-recycling',
  },
  allowPrint: true,
  showBuffers: true,
  resetDataOnGeocode: true,
  retractableRefine: false,
  dropdownRefine: false,
  searchBar: {
    searchTypes: [
      'address',
      'keyword',
    ],
    labelText:  {
      all: 'Search by address or keyword',
    },
    fuseThreshold: 0.1
  },
  locationInfo: {
    siteNameField: 'organization_name',
    siteName: function(item) { return item.properties.organization_name },
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
      if (item && item.properties) {
        return item.properties.services_offered;
      }
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
  mapLayer: {
    id: 'resources',
    source: 'resources',
    type: 'circle',
    paint: {
      'circle-radius': 7,
      'circle-color': '#9400c6',
      'circle-stroke-width': 1,
      'circle-stroke-color': 'white',
    },
  },
  dataSources: {
    recycling,
  },
  infoCircles: {
    'Single-stream recycling': {
      tip: 'We accept the following items cleaned and dry curbside: plastic bottles \
      and containers (#1, 2, & 5), metal cans, glass, paper, cardboard, cartons',
      multiline: true,
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
      href: "/recycling-donation-finder/",
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
};

pinboard($config);
export default $config;