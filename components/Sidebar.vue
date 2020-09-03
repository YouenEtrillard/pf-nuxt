<template>
  <aside
    appAppear
    :class="$style.root"
  >
    <div :class="$style.logoWrapper">
      <a href="/" routerLinkActive="is-active" title="Go to Home page">
        <CustomIcon icon="logo" alt="Logo Youen Etrillard" />
      </a>
    </div>
    <nav :class="$style.nav">
      <ul>
        <li>
          <a href="/about" routerLinkActive="is-active" title="Go to About page">
            <div class="iconWrapper">
              <CustomIcon icon="who-am-i" />
            </div>
            <span>About</span>
          </a>
        </li>
        <li>
          <a href="/works" routerLinkActive="is-active" title="Go to Works page">
            <div class="iconWrapper">
              <CustomIcon icon="works" />
            </div>
            <span>Works</span>
          </a>
        </li>
        <li>
          <a href="/about" fragment="contact" title="Go to Contact section of about page">
            <div class="iconWrapper">
              <CustomIcon icon="speech-bubbles" />
            </div>
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
    <div :class="$style.bottomWrapper">
    </div>
</aside>
</template>

<script lang="ts">
import Vue from 'vue';
  import CustomIcon from '~/components/CustomIcon.vue';

  export default Vue.extend({
    components: {
      CustomIcon,
    }
  })
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
    padding: calc(0.2vh + .3rem) calc(1 / 6 * var(--sidebar-width));
    flex-shrink: 0;
    
    > a {
      fill: var(--main-color);
      display: block;
      width: 100%;
      height: 100%;
      transition: opacity .25s ease-out;

      &:hover {
        opacity: .7;
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
    
    ul, li {
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


    a {
      display: block;
      color: white;
      fill: currentColor;
      opacity: .7;
      position: relative;
      transition: all .25s ease-out;
      transition-property: color, opacity;
      width: 100%;
      height: 100%;
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      transition: all .25s ease-out;
      transition-property: color, opacity;
      will-change: opacity;
      outline-offset: -2px;

      .iconWrapper {
        width: 5rem;
        height: 5rem;

        @include breakpoint($tablet) {
          width: calc(var(--sidebar-height) / 2.2);
          height: calc(var(--sidebar-height) / 2.2);
        }
      }
      
      &:hover {
        opacity: 1;
      }
      
      &.is-active {
        opacity: 1;
        color: var(--main-color);
      }
    }

    svg {
      max-width: 5rem;
      max-height: 5rem;
    }

    span {
      margin-top: .3em;
      font-weight: 300;
    }
  }

</style>