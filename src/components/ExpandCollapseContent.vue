<script setup>

import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const props = defineProps({
  item: {
    type: Object,
    default: function(){
      return {};
    },
  },
  isMobile: {
    type: Boolean,
    default: false,
  },
});

const parseAddress = (address) => {
  const formattedAddress = address.replace(/(Phila.+)/g, city => `<div>${city}</div>`).replace(/^\d+\s[A-z]+\s[A-z]+/g, lineOne => `<div>${lineOne}</div>`).replace(/,/, '');
  return formattedAddress;
};

const parseServiceList = (list) => {
  let formattedService = [];
  for (let i = 0; i < list.length; i++) {
    formattedService.push(t(list[i]));
  }
  return formattedService;
};

const makeValidUrl = (url) => {
  let newUrl = window.decodeURIComponent(url);
  newUrl = newUrl
    .trim()
    .replace(/\s/g, '');
  if (/^(:\/\/)/.test(newUrl)) {
    return `http${newUrl}`;
  }
  if (!/^(f|ht)tps?:\/\//i.test(newUrl)) {
    return `http://${newUrl}`;
  }
  return newUrl;
};

const parseTagsList = (list) => {
  let formattedTags = list.slice();
  let finalTags = [];
  for (let tag of formattedTags) {
    finalTags.push(t(tag));
  }
  return finalTags.sort().join(", ");
};

</script>

<template>
  <div class='main-ec-content'>
    <div class="columns top-section">
      <div class="column is-6">
        <div
          v-if="item.properties.street_address"
          class="columns is-mobile"
        >
          <div class="column is-1">
            <font-awesome-icon icon="map-marker-alt" />
          </div>
          <div
            class="column is-11"
            v-html="parseAddress(item.properties.street_address)"
          />
        </div>
      </div>

      <div class="column is-6">
        <div
          v-if="item.properties.phone_number"
          class="columns is-mobile"
        >
          <div
            class="column is-1"
          >
            <font-awesome-icon icon="phone" />
          </div>
          <div class="column is-11">
            {{ item.properties.phone_number }}
          </div>
        </div>

        <div
          v-if="item.properties.email"
          class="columns is-mobile"
        >
          <div
            class="column is-1"
          >
            <font-awesome-icon icon="envelope" />
          </div>
          <div class="column is-11">
            <a :href="`mailto:${item.properties.email}`">{{ item.properties.email }}</a>
          </div>
        </div>

        <div
          v-if="item.properties.website"
          class="columns is-mobile website-div"
        >
          <div
            class="column is-1"
          >
            <font-awesome-icon icon="globe" />
          </div>
          <div class="column is-11">
            <a
              target="_blank"
              :href="makeValidUrl(item.properties.website)"
            >
              {{ item.properties.website }}
              <font-awesome-icon icon="external-link-alt" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="item.properties.services_offered"
    >
      <h3>
        {{ t('servicesOffered') }}
      </h3>
      <div class="columns is-multiline is-gapless">
        <div
          v-for="service in parseServiceList(item.properties.services_offered)"
          :key="service"
          class="column is-half"
        >
          {{ service }}
        </div>
      </div>
    </div>

    <div
      v-if="item.properties.tags && item.properties.tags.length"
    >
      <h3>
        {{ t('Tags') }}
      </h3>
      <div>
        {{ parseTagsList(item.properties.tags) }}
      </div>
    </div>
  </div>
</template>
