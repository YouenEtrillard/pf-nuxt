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
          >{{ anchor.text }}</a
        >
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
}

.anchor {
  text-decoration: none;
  color: white;
  font-size: var(--fz-h2);
  text-shadow: 1px 1px 1px rgba(white, 0.5);
}
</style>
