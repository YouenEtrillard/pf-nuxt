<template :class="[ $style.root ]">
  <section :class="[
      $style.u-wrapper,
      $style.landing
    ]"
    appAppear
  >
    <section :class="$style.introduction">
      <h1>Hi,<br>I'm Youen,<br>web developer</h1>
      <p :class="$style.introSub">Front End Developer / Ionic / Angular</p>
      <a routerLink="/about" :class="$style.btnSmart" title="But who am I ?">
        <span :class="[$style.btn-iconWrapper]">
          <app-custom-icon icon="who-am-i"></app-custom-icon>
        </span>
        <span :class="[$style.btn-text]">But, who am I ?</span>
        <span :class="[
            $style.btn-smart-border,
            $style.btn-smart-border-top,
          ]"
        ></span>
        <span :class="[
            $style.btn-smart-border,
            $style.btn-smart-border-right
          ]"
        ></span>
        <span :class="[
            $style.btn-smart-border,
            $style.btn-smart-border-bottom
          ]"
        ></span>
        <span :class="[
            $style.btn-smart-border,
            $style.btn-smart-border-left
          ]"
        ></span>
      </a>
    </section>
    <section :class="$style.logo-showcase">
      <div :class="$style.logo-wrapper">
        <logo />
        <app-custom-icon icon="logo"></app-custom-icon> <!-- composant à recréer -->
      </div>
    </section>
    <div :class="$style.logo-background">
      <app-custom-icon icon="logo"></app-custom-icon> <!-- composant à recréer -->
    </div>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Logo from '~/components/Logo.vue';

  export default Vue.extend({
    components: {
      Logo,
    }
  })
</script>

<style module>
  @import "@/assets/conf.scss";

  .root {
    width: 100%;
    overflow: hidden;
  }

  .landing {
    position: relative;
    height: 100vh;
    z-index: 1;
    display: flex;
    align-items: center;
  }

  .logo-background {
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

  .logo-showcase {
    width: 45rem;
    position: absolute;
    bottom: 50%;
    right: 25%;
    z-index: 1;
    transform: translateX(50%) translateY(50%);
    transition: opacity .25s ease-out;

    @include breakpoint($smallTablet, up) {
      fill: $main-color;
    }

    @include breakpoint($smallTablet) {
      opacity: 0.2;
    }

    &::before {
      content: '';
      display: block;
      width: 100%;
      padding-top: calc(55%/45*100);
    }
  }

  .logo-wrapper {
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
