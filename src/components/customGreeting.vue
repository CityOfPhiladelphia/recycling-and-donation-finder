<script setup>

// import $config from '../main.js';

// const props = defineProps({
//   'message': {
//     type: String,
//     default: function() {
//       return 'defaultMessage';
//     },
//   },
// });
  
// const sections = ref({});
// const subsections = ref({});

// computed
// const i18nEnabled = computed(() => {
//   if ($config.i18n) {
//     return true;
//   }
//   return false;
// });

// const calloutOptions = computed(() => {
//   return {};
// });

// const calloutSlots = computed(() => {
//   return {
//     text: 'test',
//   };
// });

// const hasError = computed(() => {
//   return this.$store.state.geocode.status === 'error';
// });

// const errorMessage = computed(() => {
//   const input = this.$store.state.geocode.input;
//   return `
//       <p>
//         We couldn't find
//         ${input ? '<strong>' + input + '</strong>' : 'that address'}.
//         Are you sure everything was spelled correctly?
//       </p>
//       <p>
//         Here are some examples of things you can search for:
//       </p>
//       <ul>
//         <li>1234 Market St</li>
//         <li>1001 Pine Street #201</li>
//         <li>12th & Market</li>
//         <li>883309050 (an OPA number with no hyphens or other characters)</li>
//       </ul>
//     `;
// });

</script>

<template>
  <div
    class="main-greeting"
  >
    <div class="half-data-section">
      <div class="has-text-centered container">
        <button
          class="button greeting-button"
          @click="$emit('view-list')"
          v-html="$t('app.viewList')"
        />
      </div>
    </div>

    <div class="half-data-section">

      <h1 class="title is-2 is-spaced">
        About this finder
      </h1>

      <div class="half-data-section">
        <p>This tool can help you find find places to donate or recycle items in Philadelphia. You can:</p>
      </div>

      <div class="half-data-section">
        <ul class="bullet-list">
          <li>Browse the list of drop-off locations.</li>
          <li>Search by address or keyword.</li>
          <li>Filter your results by type of donation or material.</li>
        </ul>
      </div>

      <div class="half-data-section">
        <h2 class="title is-3">
          Accepting donations or recyclables?
        </h2>
      </div>

      <div class="half-data-section">
        <p>To learn about adding your organization to the finder, contact <a href="mailto:RecyclingOffice@phila.gov">RecyclingOffice@phila.gov</a>.</p>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>

.app-list {
  margin-bottom: 2rem;
}

.main-greeting {
  padding: 1rem;
}

.greeting-button {
  background-color: #0f4d90 !important;
  border-color: #0f4d90 !important;
  font-size: 1rem;
  color: white;
  cursor: pointer;
}

.greeting-button:hover {
  border-color: #2176d2 !important;
}

.half-data-section {
  margin-bottom: 1rem;
}

</style>
