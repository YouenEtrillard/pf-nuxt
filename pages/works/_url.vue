<template>
  <main :class="$style.root" class="wrapper">
    <template v-if="work">
      <h1 v-if="work.title" :class="$style.title">
        {{ work.title }}
      </h1>

      <div
        :class="[
          $style.banner,
          {
            [$style.hasBanner]: work.banner
          }
        ]"
      >
        <div v-if="work.logo" :class="$style.logoWrapper">
          <nuxt-img
            :class="$style.img"
            :src="`unsplash${work.logo.data.url}`"
            :alt="work.title"
          />
        </div>
        <div v-if="work.banner" :class="$style.bannerWrapper">
          <nuxt-img
            :class="$style.img"
            :src="`unsplash${work.banner.data.url}`"
            :alt="work.title"
          />
        </div>
        <div v-else :class="$style.bannerText">
          <p :class="$style.tags">
            <span v-for="(tag, tagIndex) in work.tag_list" :key="tagIndex">
              {{ tagIndex > 0 ? ', ' : '' }}{{ tag.tag_id.tag_name }}
            </span>
          </p>

          <p v-if="work.short_description">
            {{ work.short_description }}
          </p>
        </div>
      </div>

      <div v-if="work.details" class="content" v-html="work.details"></div>

      <div v-if="work.pictures" :class="$style.gallery">
        <nuxt-img
          v-for="(picture, imgIndex) in work.pictures"
          :key="imgIndex"
          :src="`unsplash${picture.picture_id.data.url}`"
        />
      </div>
    </template>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  async asyncData({ params, payload, store }) {
    let work;
    const url = params.url;
    const workByUrl = store.getters.workByUrl(url);

    if (payload) {
      work = payload;
    } else if (workByUrl) {
      work = workByUrl;
    } else {
      await store.dispatch(`fetchResource`, 'works');
      work = store.getters.workByUrl(url);
    }
    return { work };
  },
  data() {
    return {
      url: this.$route.params.url
    };
  },
  computed: {
    ...mapGetters([`workByUrl`]),
    workByUrl() {
      return this.workByUrl(this.url);
    }
  }
};
</script>

<style lang="scss" module>
.root {
  padding: 5vh 0;
}

.banner {
  border: 1px solid rgba(white, 0.5);
  margin: 2rem 0;
  --gap: 2rem;
  display: grid;
  // padding: var(--gap);
  // grid-gap: var(--gap);
  // min-height: 30.2rem;
  grid-auto-flow: row;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 3fr;

  &:not(.hasBanner) {
    @include breakpoint($smallTablet) {
      display: flex;
      flex-direction: column;
      padding: 2rem;
    }
  }

  img {
    display: block;
    max-width: 100%;
  }
}

.logoWrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-height: 90%;
    max-width: 90%;
  }
}

.bannerText {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 2rem;
  align-items: center;
}

.tags {
  font-size: 2.4rem;
  text-transform: capitalize;
  color: var(--main-color);
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  justify-content: center;
  align-items: center;
  margin-top: 2.4rem;

  img {
    max-height: 100%;
    max-width: 100%;
  }
}
</style>
