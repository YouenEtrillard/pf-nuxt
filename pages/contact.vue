<template>
  <main :class="$style.root" class="wrapper">
    <div
      class="content"
      :class="$style.text"
      v-html="contact[0].markup_content"
    ></div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  async fetch() {
    await this.$store.dispatch(`fetchResource`, 'contact');
  },
  computed: {
    ...mapGetters([`contact`])
  }
};
</script>

<style module lang="scss">
.root {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: var(--fz-subtitle);
  text-align: center;
}

.text {
}
</style>
