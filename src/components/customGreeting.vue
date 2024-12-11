<script setup>

const props = defineProps({
  database: {
    type: Array,
  },
  isMobile: {
    type: Boolean,
    default: false,
  },
});
  
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
        <button
          v-if="isMobile"
          class="button greeting-button"
          @click="$emit('view-map')"
          v-html="$t('app.viewMap')"
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
  margin: 1rem;
}

.greeting-button:hover {
  background-color: #444444 !important;
}

.half-data-section {
  margin-bottom: 1rem;
}

</style>
