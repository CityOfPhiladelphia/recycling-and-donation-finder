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

    <div class="main-area">
      <h3 class="title is-3 is-spaced">
        About this finder
      </h3>
      <div class="mb-4">
        Philadelphia households get weekly trash and
        <a
          target="_blank"
          href="https://www.phila.gov/programs/recycling-program/what-to-recycle/"
        >single-stream recycling</a>
        collection. However, you may generate other materials that can be reused or recycled instead of going to a landfill.
        Recycling helps our communities stay clean and green by diverting waste away from landfills and waste-to-energy facilities.
      </div>
      <div>This tool can help you recycle more and recycle right in Philadelphia. You can</div>
      <div class="intro-list">
        <ul>
          <li>Browse the list of drop-off locations where you can donate or recycle household items.</li>
          <li>Search by address or keyword.</li>
          <li>Filter your results by type of donation or material.</li>
        </ul>
      </div>
      <div>
        You can also find location and contact information for the City’s Sanitation Convenience Centers. You can go to a Sanitation Convenience Center to:
      </div>
      <div class="intro-list">
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
      <div class="intro-list">
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
