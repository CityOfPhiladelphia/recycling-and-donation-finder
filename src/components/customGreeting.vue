<template>
  <div
    class="content"
  >
    <div class="section has-text-centered">
      <button
        class="button open-list-button"
        @click="$emit('view-list')"
        v-html="$t('app.viewList')"
      />
    </div>

    <div class="section pt-0">
      <h3 class="title is-3 is-spaced">
        About this finder
      </h3>
      <p>
        Philadelphia households get weekly trash and
        <a
          target="_blank"
          href="https://www.phila.gov/programs/recycling-program/what-to-recycle/"
        >single-stream recycling</a>
        collection. However, you may generate other materials that can be reused or recycled instead of going to a landfill.
        Recycling helps our communities stay clean and green by diverting waste away from landfills and waste-to-energy facilities.
      </p>
      <p>This tool can help you recycle more and recycle right in Philadelphia. You can</p>
      <div class="app-list">
        <ul>
          <li>Browse the list of drop-off locations where you can donate or recycle household items.</li>
          <li>Search by address or keyword.</li>
          <li>Filter your results by type of donation or material.</li>
        </ul>
      </div>
      <p>
        You can also find location and contact information for the City’s Sanitation Convenience Centers. You can go to a Sanitation Convenience Center to:
      </p>
      <div class="app-list">
        <ul>
          <li>
            <a
              target="_blank"
              href="https://www.phila.gov/services/trash-recycling-city-upkeep/find-a-sanitation-convenience-center-to-drop-off-trash-or-recycling"
            >Drop off trash or recycling</a>.
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.phila.gov/services/trash-recycling-city-upkeep/get-a-recycling-bin/"
            >Get a recycling bin</a>.
          </li>
        </ul>
      </div>
      <p>
        If you have any questions, contact the Recycling Office:
      </p>
      <div class="app-list">
        <ul>
          <li>
            By phone: <a
              target="_blank"
              href="tel:2156865444"
            >(215) 686-5444</a>.
          </li>
          <li>
            Be email: <a
              target="_blank"
              href="mailto:recyclingoffice@phila.gov"
            >recyclingoffice@phila.gov</a>.
          </li>
        </ul>
      </div>
      <h3 class="title is-3">
        Accepting donations or recyclables?
      </h3>
      <p>To learn about adding your organization to the finder, contact <a href="mailto:RecyclingOffice@phila.gov">recyclingoffice@phila.gov</a>.</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CustomGreeting',
  props: {
    'message': {
      type: String,
      default: function() {
        return 'defaultMessage';
      },
    },
  },
  data() {
    let data = {
      sections: {},
      subsections: {},
    };
    return data;
  },
  computed: {
    i18nEnabled() {
      if (this.$config.i18n) {
        return true;
      }
      return false;

    },
    calloutOptions() {
      return {};
    },
    calloutSlots() {
      return {
        text: 'test',
      };
    },
    database() {
      if (this.$store.state.sources[this.$appType].data) {
        return this.$store.state.sources[this.$appType].data.rows || this.$store.state.sources[this.$appType].data.features || this.$store.state.sources[this.$appType].data;
      }
      return [];
    },
    hasError() {
      return this.$store.state.geocode.status === 'error';
    },
    errorMessage() {
      const input = this.$store.state.geocode.input;
      return `
          <p>
            We couldn't find
            ${input ? '<strong>' + input + '</strong>' : 'that address'}.
            Are you sure everything was spelled correctly?
          </p>
          <p>
            Here are some examples of things you can search for:
          </p>
          <ul>
            <li>1234 Market St</li>
            <li>1001 Pine Street #201</li>
            <li>12th & Market</li>
            <li>883309050 (an OPA number with no hyphens or other characters)</li>
          </ul>
        `;
    },
  },
};
</script>

<style lang="scss" scoped>

@import "../../node_modules/@phila/pinboard/src/assets/scss/customGreeting.scss";

  .section {
    padding: 1.5rem;
  }

  .app-list {
    margin-bottom: 2rem;
  }

  // .open-list-button {
  //   text-transform: uppercase;
  //   background-color: #0f4d90;
  //   color: #ffffff;
  //   padding-left: 32px;
  //   padding-right: 32px;
  //   padding-top: 17px;
  //   padding-bottom: 17px;
  // }

</style>
