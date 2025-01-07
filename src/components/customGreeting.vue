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

    <div>

      <h3>
        About this finder
      </h3>

      <div>
        <p>This tool can help you find find places to donate or recycle items in Philadelphia. You can:</p>
      </div>

      <div class="intro-list">
        <ul>
          <li>Browse the list of drop-off locations.</li>
          <li>Search by address or keyword.</li>
          <li>Filter your results by type of donation or material.</li>
        </ul>
      </div>

      <div>
        <h3>
          Accepting donations or recyclables?
        </h3>
      </div>

      <div>
        <p>To learn about adding your organization to the finder, contact <a href="mailto:RecyclingOffice@phila.gov">RecyclingOffice@phila.gov</a>.</p>
      </div>

    </div>
  </div>
</template>
