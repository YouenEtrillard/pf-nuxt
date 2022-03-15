<template>
  <aside appAppear :class="$style.root">
    <div :class="$style.logoWrapper">
      <NuxtLink to="/" title="Go to Home page" :class="$style.navLink">
        <CustomIcon icon="logo" alt="Logo Youen Etrillard" />
      </NuxtLink>
    </div>
    <nav :class="$style.nav">
      <ul>
        <li>
          <NuxtLink
            to="/about"
            title="Go to About page"
            :class="$style.navLink"
          >
            <div :class="$style.iconWrapper">
              <CustomIcon icon="who-am-i" />
            </div>
            <span>About</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/works"
            title="Go to Works page"
            :class="$style.navLink"
          >
            <div :class="$style.iconWrapper">
              <CustomIcon icon="works" />
            </div>
            <span>Works</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/contact"
            title="Go to Contact page"
            :class="$style.navLink"
          >
            <div :class="$style.iconWrapper">
              <CustomIcon icon="speech-bubbles" />
            </div>
            <span>Contact</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <div :class="$style.bottomWrapper"></div>
  </aside>
</template>

<script>
import Vue from 'vue';
import CustomIcon from '~/components/CustomIcon.vue';

export default Vue.extend({
  components: {
    CustomIcon
  }
});
</script>

<style module lang="scss">
.root {
  background: var(--sidebar-bg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;
  position: fixed;
  left: 0;
  width: 10rem;
  width: var(--sidebar-width);
  height: 100vh;
  z-index: 101;

  > * {
    flex-grow: 0;
  }

  @include breakpoint($tablet, up) {
    flex-direction: column;
    top: 0;
  }

  @include breakpoint($tablet) {
    bottom: 0;
    height: var(--sidebar-height);
    width: 100vw;
  }
}

.logoWrapper {
  padding: calc(0.2vh + 0.3rem) calc(1 / 6 * var(--sidebar-width));
  flex-shrink: 0;

  > a {
    fill: var(--main-color);
    display: block;
    width: 100%;
    height: 100%;
    transition: opacity 0.25s ease-out;

    &:hover {
      opacity: 0.7;
    }
  }

  @include breakpoint($tablet, up) {
    height: 10rem;
    height: var(--sidebar-width);
    width: 100%;
  }

  @include breakpoint($tablet) {
    height: 100%;
    width: 10rem;
    width: var(--sidebar-width);
  }

  @include breakpoint($bigPhone) {
    width: 25%;
    max-width: var(--sidebar-width);
  }
}

.bottomWrapper {
  height: 10rem;
  width: 10rem;
  height: var(--sidebar-width);
  width: var(--sidebar-width);

  @include breakpoint($phone) {
    display: none;
  }
}

.nav {
  width: 100%;
  font-family: var(--font-title);

  @include breakpoint($tablet) {
    height: 100%;
  }

  @include breakpoint($bigPhone) {
    width: 75%;
  }

  ul,
  li {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  ul {
    @include breakpoint($tablet) {
      width: 100%;
      height: 100%;
      text-align: center;
    }

    @include breakpoint($phone) {
      display: flex;
      justify-content: space-between;
      padding-right: calc(1 / 6 * var(--sidebar-width));
    }
  }

  li {
    width: 10rem;
    height: 10rem;
    display: inline-block;

    @include breakpoint($tablet) {
      width: var(--sidebar-height);
      height: var(--sidebar-height);
    }
  }

  svg {
    max-width: 5rem;
    max-height: 5rem;
  }

  span {
    margin-top: 0.3em;
    font-weight: 300;
  }
}

.navLink {
  align-items: center;
  color: white;
  display: flex;
  fill: currentColor;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  opacity: 0.7;
  outline-offset: -2px;
  position: relative;
  text-decoration: none;
  transition: all 0.25s ease-out;
  transition-property: color, opacity;
  width: 100%;
  will-change: opacity;

  &:hover {
    opacity: 1;
  }
}

.iconWrapper {
  width: 5rem;
  height: 5rem;

  @include breakpoint($tablet) {
    width: calc(var(--sidebar-height) / 2.2);
    height: calc(var(--sidebar-height) / 2.2);
  }
}
</style>

<style>
nav .nuxt-link-active {
  opacity: 1;
  color: var(--main-color);
}
</style>
