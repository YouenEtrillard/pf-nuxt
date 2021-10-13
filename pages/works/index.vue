<template>
  <main class="wrapper" :class="$style.root" appAppear>
    <!-- <section class="intro">
      <h1>Works</h1>
    </section> -->
    <ul :class="$style.list">
      <li
        v-for="(work, index) in works"
        :key="index"
        class="btn btn-smart"
        :class="$style.item"
      >
        <div :class="$style.contentWrapper">
          <div v-if="work.logo" :class="$style.imgWrapper">
            <img
              :class="$style.img"
              :src="work.logo.data.full_url"
              :alt="work.title"
            />
          </div>
          <!-- <h2 :class="$style.work-title" v-if="work.title">{{work.title}}</h2> -->
          <p :class="$style.tags">
            <span v-for="(tag, index) in work.tag_list" :key="index"
              >{{ index > 0 ? ', ' : '' }}{{ tag.tag_id.tag_name }}</span
            >
          </p>
          <!-- <ul v-if="work.types && work.types !== ''">
            <li v-for="let type of work.types">
              <p>{{type}}</p>
            </li>
          </ul> -->
        </div>
        <span class="btn-smart-border btn-smart-border--top"></span>
        <span class="btn-smart-border btn-smart-border--right"></span>
        <span class="btn-smart-border btn-smart-border--bottom"></span>
        <span class="btn-smart-border btn-smart-border--left"></span>
        <div class="content" :class="$style.linkWrapper">
          <div v-if="work.short_description" :class="$style.shortdescWrapper">
            <p :class="$style.shortdesc">{{ work.short_description }}</p>
          </div>
          <a
            v-if="work.details"
            :href="`works/${work.url}`"
            :class="$style.link"
            >More on this project</a
          >
          <template v-else>
            <a target="_blank" :href="work.url" :class="$style.link"
              >Go to website</a
            >
          </template>
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([`works`])
  },
  async fetch({ store }) {
    await store.dispatch(`fetchResource`, 'works');
  }
};
</script>

<style lang="scss" module>
.root {
  display: flex;
  align-items: center;
  justify-content: center;

  .list {
    padding: 0;
    display: grid;
    grid-gap: 1em;
    grid-auto-flow: row;
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
    width: 100%;

    @include breakpoint($smallPhone) {
      grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    }
  }

  .item {
    --thickness: 1px;
    --text-color: rgba(255, 255, 255, 0.5);
    --hover-color: white;
    --padding: 1.5em;
    list-style-type: none;
    display: block;
    padding: var(--padding);
    width: 100%;
    height: 100%;
    font-size: 1.6rem;
    transition: border-color 0.25s ease-out;

    &::before {
      z-index: 1;
    }

    &:hover,
    &:focus {
      border-color: white;

      .linkWrapper {
        opacity: 1;
      }
    }

    .tags {
      p {
        text-align: center;
      }
    }
  }

  .link {
    margin-bottom: 1em;
    color: var(--main-bg);
    padding: 0 0.2em;
    transition-property: color, background;

    &:hover {
      background: var(--hover-color);
      color: white;
    }

    &Wrapper {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      padding: var(--padding);
      display: flex;
      flex-direction: column;
      align-items: center;
      opacity: 0;
      z-index: 2;
      transition: opacity 0.25s ease-out;

      .shortdesc {
        color: var(--main-bg);

        &Wrapper {
          flex-grow: 1;
          display: flex;
          align-items: center;
        }
      }
    }
  }

  .contentWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .img {
    max-width: 75%;
    max-height: 20rem;

    &Wrapper {
      flex-grow: 1;
      width: 100%;
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
