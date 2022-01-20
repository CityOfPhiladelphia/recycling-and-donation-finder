<template>
  <div
    class="content"
  >
    <div class="section has-text-centered">
      <button
        class="button open-list-button is-primary"
        @click="$emit('view-list')"
        v-html="$t('app.viewList')"
      />
    </div>

    <div class="section">
      <h1 class="title is-2 is-spaced">
        About this finder
      </h1>
      <p>This tool can help you find find places to donate or recycle items in Philadelphia. You can:</p>
      <div class="app-list">
        <ul>
          <li>Browse the list of drop-off locations.</li>
          <li>Search by address or keyword.</li>
          <li>Filter your results by type of donation or material.</li>
        </ul>
      </div>
      <h2 class="title is-3">
        Accepting donations or recyclables?
      </h2>
      <p>To learn about adding your organization to the finder, contact <a href="mailto:RecyclingOffice@phila.gov">RecyclingOffice@phila.gov</a>.</p>
    </div>

    <div class="section">
      <h1 class="title is-2">
        Our partners
      </h1>
      <h2 class="title is-3">
        Green Philly
      </h2>
      <p>
        Founded in 2008, Green Philly connects Philadelphians to sustainable solutions through their website, events, and podcast. <a
          href="https://www.thegreencities.com/about/"
          target="_blank"
        >Learn more about Green Philly.</a>
      </p>
      <h2 class="title is-3">
        The Resource Exchange
      </h2>
      <p>
        The Resource Exchange diverts valuable materials from the waste stream and redirects them to artists, builders, educators, and the public through their nonprofit reuse center. <a
          href="https://theresourceexchange.org/about/"
          target="_blank"
        >Learn more about The Resource Exchange</a>.
      </p>
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

<style scoped>

  .section {
    padding: 1.5rem;
  }

  .app-list {
    margin-bottom: 2rem;
  }

  .open-list-button {
    text-transform: uppercase;
  }

</style>
