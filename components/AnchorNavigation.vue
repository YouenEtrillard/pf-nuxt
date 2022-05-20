<script>
export default {
  props: {
    anchors: {
      type: Array,
      required: true
    }
  }
};
</script>

<template>
  <nav :class="$style.anchorNav">
    <ul :class="$style.anchorList">
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
  </nav>
</template>

<style module lang="scss">
.anchorNav {
  --anchor-width: 3.6rem;
  --anchor-height: 4.2rem;

  position: absolute;

  @include breakpoint($tablet) {
    right: calc(var(--sidebar-height) / 2);
    bottom: calc((var(--sidebar-height) - var(--anchor-height)) / 2);
  }

  @include breakpoint($tablet, up) {
    left: calc(var(--sidebar-width) / 2);
    bottom: calc((var(--sidebar-width) - var(--anchor-height)) / 2);
    transform: translateX(-50%);
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

  @include breakpoint($tablet) {
    margin-left: 100%;
  }

  @include breakpoint($tablet, up) {
    margin-left: -100%;
  }
}

.anchorTextWrap {
  display: block;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  pointer-events: none;
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
}
</style>
