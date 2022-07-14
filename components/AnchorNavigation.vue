<script>
export default {
  props: {
    anchors: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isOpen: true
    };
  }
};
</script>

<template>
  <div :class="$style.root">
    <button
      :class="[
        $style.navButton,
        {
          [$style.navButtonIsOpen]: isOpen
        }
      ]"
      @click="isOpen = !isOpen"
    >
      <div :class="$style.navButtonWrapper">
        <span :class="[$style.navButtonElem, $style.navButtonElem1]"></span>
        <span :class="[$style.navButtonElem, $style.navButtonElem2]"></span>
        <span :class="[$style.navButtonElem, $style.navButtonElem3]"></span>
      </div>
      <span class="visually-hidden">Show section navigation</span>
    </button>
    <nav :class="$style.anchorNav">
      <transition name="slide-in" appear>
        <ul v-show="isOpen" :class="$style.anchorList">
          <li
            v-for="anchor in anchors"
            :key="anchor.id"
            :class="$style.anchorWrapper"
          >
            <a
              :class="$style.anchor"
              :href="`#${anchor.id}`"
              :title="`Scroll to ${anchor.text} section`"
            >
              <span :class="$style.anchorButton"></span>
              <span :class="$style.anchorTextWrap">
                <span :class="$style.anchorText">
                  {{ anchor.text }}
                </span>
              </span>
            </a>
          </li>
        </ul>
      </transition>
    </nav>
  </div>
</template>

<style module lang="scss">
.root {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navButton {
  cursor: pointer;
  position: relative;
  background: none;
  border: none;
  width: 4.8rem;
  height: 4.8rem;
  padding: 0;
  margin: 0;
}

.navButtonWrapper {
  --wrapperSize: 32px;
  width: var(--wrapperSize);
  height: var(--wrapperSize);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);

  @include breakpoint($phone) {
    border-radius: 3px;
    box-shadow: 0 0 2px 2px var(--main-bg);
    background: white;
  }
}

.navButtonElem {
  --elemHeight: 6px;
  --elemSize: 6px;
  width: var(--elemSize);
  height: var(--elemSize);
  background: var(--main-color);
  border-radius: 3px;
  position: absolute;
}

.navButtonElem2 {
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}

.navButtonElem1,
.navButtonElem3 {
  bottom: 4px;
  height: var(--elemHeight);
  transition: height 0.25s ease-out;
  will-change: height;
}

.navButtonElem1 {
  transform: rotateZ(45deg);
  transform-origin: bottom left;
  left: 0;
}

.navButtonElem3 {
  transform: rotateZ(-45deg);
  transform-origin: bottom right;
  right: 0;
}

.navButtonIsOpen {
  .navButtonElem1,
  .navButtonElem3 {
    --elemHeight: 38px;
  }
}

.anchorNav {
  --anchor-width: 3.6rem;
  --anchor-height: 4.2rem;

  position: absolute;
  transform: translateX(-50%);

  @include breakpoint($tablet) {
    left: 50%;
    bottom: 100%;
  }

  @include breakpoint($tablet, up) {
    left: calc(var(--sidebar-width) / 2);
    bottom: calc((var(--sidebar-width) - var(--anchor-height)) / 2);
    bottom: 75%;
  }
}

.anchorList {
  margin: 0;
}

.anchorWrapper {
  list-style: none;
  &:not(:last-of-type) {
    .anchor {
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 10px;
        transform: translateX(-50%);
        height: 100%;
        border-left: 2px solid var(--main-color);
        z-index: 0;
        opacity: 0.3;
      }
    }
  }
}

.anchor {
  text-decoration: none;
  color: white;
  font-size: var(--fz-h2);
  text-shadow: 1px 1px 1px rgba(white, 0.5);
  position: relative;
  width: var(--anchor-width);
  height: var(--anchor-height);
  display: block;

  &:hover,
  &:focus {
    .anchorTextWrap {
      pointer-events: initial;
    }

    .anchorText {
      margin: 0;
    }
  }
}

.anchorButton {
  font-size: 0;
  position: absolute;
  top: 6px;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  transform: translate3d(-50%, -50%, 0);
  border: 10px solid var(--sidebar-bg);
  box-shadow: 0px 0px 3px 1px white;
  /* background: var(--main-color); */
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    border: 4px solid var(--main-color);
    border-radius: 50%;
  }
}

.anchorText {
  display: inline-block;
  transition: margin 0.25s ease-out;
  background: hsl(0deg, 0%, 0%);
  background: var(--sidebar-bg);
  padding: 0.2rem 0.7rem 0.2rem 0.5rem;

  /* @include breakpoint($tablet) {
    margin-left: 100%;
  } */

  @include breakpoint($tablet, up) {
    margin-left: -100%;
  }
}

.anchorTextWrap {
  display: block;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  top: 50%;
  transform: translateY(-50%);

  @include breakpoint($tablet) {
    right: var(--anchor-width);
    border-right: 4px solid transparent;
  }

  @include breakpoint($tablet, up) {
    left: var(--anchor-width);
    border-left: 4px solid transparent;
  }

  @include breakpoint($phone, up) {
    pointer-events: none;
  }
}
</style>

<style>
.slide-in-enter-active,
.slide-in-leave-active {
  transition: all 0.25s ease-out;
  transition-property: opacity, transform;
  transform: translateY(0);
  opacity: 1;
  pointer-events: none;
}

.slide-in-enter,
.slide-in-leave-to {
  opacity: 0;
  transform: translateY(2.4rem);
  pointer-events: none;
}
</style>
