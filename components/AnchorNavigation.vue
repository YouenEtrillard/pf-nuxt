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
  position: fixed;
  bottom: 50px;
  left: 50px;

  @include breakpoint($tablet, up) {
    left: calc(var(--sidebar-width) + 50px);
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
  width: 2.6rem;
  height: 2.6rem;
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
  border-radius: 50%;
  transform: translateX(-50%);
  border: 8px solid white;
  box-shadow: 0 0 0 1px var(--main-color);
  background: var(--main-color);
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
  transition: margin 0.25s ease-out;
  margin-left: -100%;
  background: hsl(0deg, 0%, 0%);
  padding: 0 0.2rem;
}

.anchorTextWrap {
  display: block;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  pointer-events: none;
  left: 2.6rem;
}
</style>
