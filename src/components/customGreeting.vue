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
        {{ $t('introPage.aboutTitle') }}
      </h3>
      <div
        class="mb-4"
        v-html="$t('introPage.p1')"
      />
      <div>{{ $t('introPage.p2') }}</div>
      <div class="intro-list">
        <ul>
          <li>{{ $t('introPage.ul1.li1') }}</li>
          <li>{{ $t('introPage.ul1.li2') }}</li>
          <li>{{ $t('introPage.ul1.li3') }}</li>
        </ul>
      </div>
      <div>{{ $t('introPage.p3') }}</div>
      <div class="intro-list">
        <ul>
          <li v-html="$t('introPage.ul2.li1')" />
          <li v-html="$t('introPage.ul2.li2')" />
        </ul>
      </div>
      <p>{{ $t('introPage.contactTitle') }}</p>
      <div class="intro-list">
        <ul>
          <li v-html="$t('introPage.contactPhone')" />
          <li v-html="$t('introPage.contactEmail')" />
        </ul>
      </div>
      <h3 class="title is-3">
        {{ $t('introPage.addOrgTitle') }}
      </h3>
      <p v-html="$t('introPage.addOrgText')" />
    </div>
  </div>
</template>
