<template>
  <main :class="$style.root">
    <section class="wrapper">
      <section :class="$style.introduction">
        <h1>Hi,<br>I'm Youen,<br>web developer</h1>
        <p :class="$style.introSub">Front End Developer / Ionic / Angular</p>
        <a routerLink="/about" class="btn btn-smart" title="But who am I ?">
          <span class="btn-iconWrapper">
            <CustomIcon icon="who-am-i"></CustomIcon>
          </span><!--
          --><span class="btn-text">But, who am I ?</span>
          <span class="btn-smart-border btn-smart-border--top"></span>
          <span class="btn-smart-border btn-smart-border--right"></span>
          <span class="btn-smart-border btn-smart-border--bottom"></span>
          <span class="btn-smart-border btn-smart-border--left"></span>
        </a>
      </section>
      <section :class="$style.logoShowcase">
        <div :class="$style.logoWrapper">
          <logo />
        </div>
      </section>
      <div :class="$style.logoBackground">
        <CustomIcon icon="logo"></CustomIcon>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
  import Vue from 'vue';
  import CustomIcon from '~/components/CustomIcon.vue';
  import Logo from '~/components/Logo.vue';

  export default Vue.extend({
    components: {
      CustomIcon,
      Logo,
    }
  })
</script>

<style lang="scss" module>
  .root {
    align-items: center;
    display: flex;
    height: 100vh;
    position: relative;
    z-index: 1;
    overflow: hidden;
  }

  .logoBackground {
    position: absolute;
    bottom: 30%;
    right: 25%;
    height: 150%;
    width: 100%;
    z-index: 0;
    transform: translateX(50%) translateY(50%);
    opacity: 0.2;
    pointer-events: none;
    transition: opacity .25s ease-out;

    @include breakpoint($smallTablet) {
      opacity: 0;
    }
  }

  .logoShowcase {
    width: 45rem;
    position: absolute;
    bottom: 50%;
    right: 25%;
    z-index: 1;
    transform: translateX(50%) translateY(50%);
    transition: opacity .25s ease-out;

    &::before {
      content: '';
      display: block;
      width: 100%;
      padding-top: calc(55%/45*100);
    }

    @include breakpoint($smallTablet, up) {
      fill: $main-color;
    }

    @include breakpoint($smallTablet) {
      opacity: 0.2;
    }

  }

  .logoWrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .introduction {
    color: var(--text-color-light);
    flex: 50% 0 0;
    z-index: 10;

    @include breakpoint($smallTablet) {
      flex-grow: 1;
    }
  }

  .introSub {
    font-size: 2.4rem;
    font-size: var(--fz-subtitle);
    opacity: 0.7;
  }
</style>
