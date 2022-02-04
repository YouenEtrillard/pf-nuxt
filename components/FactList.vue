<template>
  <section>
    <ul v-if="facts.length" :class="$style.factList">
      <li v-for="(fact, index) in facts" :key="index" :class="$style.factItem">
        <div :class="$style.factImgWrapper">
          <a
            v-if="fact.image_link && fact.image_link !== ''"
            target="_blank"
            :href="fact.image_link"
          >
            <nuxt-img
              v-if="fact.image.data.full_url && fact.image.data.full_url !== ''"
              :class="$style.factImg"
              :src="`unsplash${fact.image.data.url}`"
              :alt="fact.picture_alt"
              :title="fact.picture_alt"
            />
          </a>
          <template v-else>
            <nuxt-img
              v-if="fact.image.data.full_url && fact.image.data.full_url !== ''"
              :class="$style.factImg"
              :src="`unsplash${fact.image.data.url}`"
              :alt="fact.picture_alt"
              :title="fact.picture_alt"
            />
          </template>
          <p v-if="fact.credit && fact.credit !== ''" :class="$style.credit">
            {{ fact.credit }}
          </p>
        </div>
        <div :class="$style.factContentWrapper">
          <h2 v-if="fact.title && fact.title !== ''">
            N°{{ index + 1 }} - {{ fact.title }}
          </h2>
          <p v-if="fact.text && fact.text !== ''">{{ fact.text }}</p>
        </div>
      </li>
    </ul>
    <p v-else>
      ☕ Facts are loading, please take this moment to stretch your back or do
      whatever you wish. 🧘‍♀️
    </p>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  async fetch() {
    await this.$store.dispatch(`fetchResource`, 'facts');
  },
  computed: {
    ...mapGetters([`facts`])
  }
};
</script>

<style module lang="scss">
.fact {
  &List {
    padding: 0;
    margin: 0;
  }

  &Item {
    list-style-type: none;
    min-height: 100vh;
    padding: 5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &Img {
    max-height: 50vh;
    max-width: 90vw;
    display: inline-block;
    // margin: 0 auto;

    &[src$='.svg'] {
      width: 100%;
      height: 100%;
    }

    &Wrapper {
      display: block;
      width: 100%;
      height: 100%;
      text-align: center;

      > a {
        display: block;
        height: auto;
        outline-offset: var(--outline-offset-content);
        outline-width: var(--outline-width-content);
      }
    }
  }

  &ContentWrapper {
    text-align: center;
  }
}

.credit {
  text-align: right;
  font-size: 1.2rem;
  opacity: 0.3;
}
</style>
