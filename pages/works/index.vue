<template>
  <main class="wrapper" :class="$style.root" appAppear>
    <!-- <section class="intro">
      <h1>Works</h1>
    </section> -->
    <p>
      This is a bit outdated content since all of it highlights things I did
      when I worked at Cognix Systems (+ the angular version of my portfolio).
      But I enjoyed using Nuxt asyncData and generate routes property to loop
      through the items from the "works" endpoint to then have each page
      generated on the server side, so I'm keeping it for now !
    </p>
    <ul :class="$style.list">
      <li
        v-for="(work, workIndex) in works"
        :key="workIndex"
        class="btn btn-smart"
        :class="$style.item"
      >
        <div :class="$style.contentWrapper">
          <div v-if="work.logo" :class="$style.imgWrapper">
            <nuxt-img
              :class="$style.img"
              :src="`unsplash${work.logo.data.url}`"
              :alt="work.title"
            />
          </div>
          <!-- <h2 :class="$style.work-title" v-if="work.title">{{work.title}}</h2> -->
          <p :class="$style.tags">
            <span v-for="(tag, tagIndex) in work.tag_list" :key="tagIndex"
              >{{ tagIndex > 0 ? ', ' : '' }}{{ tag.tag_id.tag_name }}</span
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

          <NuxtLink
            v-if="work.details"
            :to="`works/${work.url}`"
            :class="$style.link"
          >
            More on this project
          </NuxtLink>

          <a v-else target="_blank" :href="work.url" :class="$style.link"
            >Go to website</a
          >
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  async fetch() {
    await this.$store.dispatch(`fetchResource`, 'works');
  },
  computed: {
    ...mapGetters([`works`])
  }
};
</script>

<style lang="scss" module>
.root {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

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

  .linkWrapper {
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
  }

  .shortdescWrapper {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }

  .shortdesc {
    color: var(--main-bg);
  }

  .contentWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .imgWrapper {
    flex-grow: 1;
    width: 100%;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
  }

  .img {
    max-width: 75%;
    max-height: 20rem;
  }
}
</style>
