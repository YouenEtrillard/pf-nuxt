<template>
  <main :class="$style.root" appAppear>
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
          <img
            :class="$style.img"
            :src="work.logo.data.full_url"
            :alt="work.title"
          />
        </div>
        <div v-if="work.banner" :class="$style.bannerWrapper">
          <img
            :class="$style.img"
            :src="work.banner.data.full_url"
            :alt="work.title"
          />
        </div>
        <div v-else :class="$style.bannerText">
          <p :class="$style.tags">
            <span v-for="(tag, index) in work.tag_list" :key="index">
              {{ index > 0 ? ', ' : '' }}{{ tag.tag_id.tag_name }}
            </span>
          </p>

          <p v-if="work.short_description">
            {{ work.short_description }}
          </p>
        </div>
      </div>

      <div
        v-if="work.details"
        v-html="work.details"
        :class="$style.content"
      ></div>

      <!-- <div v-if="gallery" :class="$style.gallery"> -->
        <img
          v-for="(picture, index) in gallery"
          :key="index"
          :src="picture"
        ></img>
      <!-- </div> -->
    </template>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      url: this.$route.params.url,
    };
  },
  computed: {
    ...mapGetters([`workByUrl`]),
    workByUrl() {
      return this.workByUrl(this.url);
    },
  },
  async asyncData({ params, $axios, payload, store }) {
    let work;
    const url = params.url;
    const workByUrl = store.getters.workByUrl(url);
  
    if (payload) {
      console.log('getting work', payload.url, 'from payload');
      work = payload;
    } else if (workByUrl) {
      console.log('getting work', url, 'from store');
      work = workByUrl;
    } else {
      console.log('hitting the API for the work', url);
      work = (await $axios
        .$get(
          `https://api.youen-etrillard.com/directus/public/_/items/works?fields=*.*.*`
        )).data.find((work) => work.url === params.url);
    }
    return { work };
  },
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

.text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 2rem;
  align-items: center;
  justify-content: center;
}

.tags {
  font-size: 2.4rem;
  text-transform: capitalize;
  color: var(--main-color);
}
</style>
