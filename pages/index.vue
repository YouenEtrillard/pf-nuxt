<template>
  <main :class="$style.root">
    <section class="wrapper">
      <section :class="$style.introduction">
        <h1>Hi,<br />I'm Youen,<br />web developer</h1>
        <p :class="$style.introSub">Front End Developer / Vue / Angular</p>
        <NuxtLink to="/about" class="btn btn-smart" title="But who am I ?">
          <span class="btn-iconWrapper">
            <CustomIcon icon="who-am-i"></CustomIcon> </span
          ><!--
          --><span class="btn-text">But, <u>who</u> am I ?</span>
          <span class="btn-smart-border btn-smart-border--top"></span>
          <span class="btn-smart-border btn-smart-border--right"></span>
          <span class="btn-smart-border btn-smart-border--bottom"></span>
          <span class="btn-smart-border btn-smart-border--left"></span>
        </NuxtLink>
      </section>
      <section :class="$style.logoShowcase">
        <div :class="$style.logoWrapper">
          <LogoAnim />
        </div>
      </section>
      <div :class="$style.logoBackground">
        <CustomIcon icon="logo"></CustomIcon>
      </div>
    </section>
  </main>
</template>

<script>
import Vue from 'vue';
import CustomIcon from '~/components/CustomIcon.vue';
import LogoAnim from '~/components/LogoAnim.vue';

export default Vue.extend({
  components: {
    CustomIcon,
    LogoAnim
  }
});
</script>

<style lang="scss" module>
.root {
  align-items: center;
  display: flex;
  height: 100vh;
  position: relative;
  z-index: 1;
  overflow: hidden;
  width: 100%;
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
  transition: opacity 0.25s ease-out;

  @include breakpoint($smallTablet) {
    opacity: 0;
  }
}

.logoShowcase {
  bottom: 50%;
  pointer-events: none;
  position: absolute;
  right: 25%;
  transform: translateX(50%) translateY(50%);
  transition: opacity 0.25s ease-out;
  width: 45rem;
  z-index: 1;

  &::before {
    content: '';
    display: block;
    width: 100%;
    padding-top: calc(55% / 45 * 100);
  }

  @include breakpoint($smallTablet, up) {
    fill: var(--main-color);
  }

  // @include breakpoint($smallTablet) {
  //   opacity: 0.2;
  // }
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
  position: relative;
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
