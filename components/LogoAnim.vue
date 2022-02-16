<template>
  <svg
    :class="[
      $style.logo,
      {
        [$style.animate]: addAnimate,
        [$style.synched]: syncAnimations
      }
    ]"
    viewBox="0 0 439.43 531.84"
  >
    <title>logo</title>
    <path
      :class="$style.shapeTop"
      d="M 40.72 72.95 l 179.03 126.6 179.88-127.1 L 219.74.54 40.72 72.95 z"
    ></path>
    <path
      :class="$style.shapeLeft"
      d="M 1.22 108.95 l 189.5 135.59-.31 284.96 L 1.22 108.95"
    ></path>
    <path
      :class="$style.shapeRight"
      d="M 248.78 244.58 l 189.44-135.63-189.44 420.57 V 244.58 z"
    ></path>
  </svg>
</template>

<script>
export default {
  data() {
    return {
      addAnimate: false,
      syncAnimations: true
    };
  },
  mounted() {
    this.addAnimate = true;
  }
};
</script>
<style module lang="scss">
.logo {
  /* max-width: 50vw;
  max-height: 50vh; */
  --bg: transparent;
  --leBlue: var(--main-color);
  fill: var(--leBlue);
}

@keyframes top {
  0% {
    fill: var(--bg);
    stroke: var(--leBlue);
    stroke-dasharray: 0 832;
    stroke-dashoffset: 198;
  }

  75% {
    fill: var(--bg);
    stroke: var(--leBlue);
    stroke-dasharray: 832 0;
    stroke-dashoffset: 612;
  }

  80% {
    fill: var(--bg);
    stroke: var(--leBlue);
  }

  100% {
    fill: var(--leBlue);
    stroke: var(--leBlue);
  }
}

@keyframes left {
  0% {
    fill: var(--bg);
    stroke: var(--leBlue);
    stroke-dasharray: 0 979;
  }

  75% {
    fill: var(--bg);
    stroke: var(--leBlue);
    stroke-dasharray: 979 0;
  }

  80% {
    fill: var(--bg);
    stroke: var(--leBlue);
  }

  100% {
    fill: var(--leBlue);
    stroke: var(--leBlue);
  }
}

@keyframes right {
  0% {
    fill: var(--bg);
    stroke: var(--leBlue);
    stroke-dashoffset: -979px;
  }

  75% {
    fill: var(--bg);
    stroke: var(--leBlue);
    stroke-dashoffset: 0;
  }

  80% {
    fill: var(--bg);
    stroke: var(--leBlue);
  }

  100% {
    fill: var(--leBlue);
    stroke: var(--leBlue);
  }
}

.animate {
  --duration: 2.5s;
  --delay: 0.35s;

  .shapeTop {
    animation: top var(--duration) linear;
    animation-fill-mode: forwards;
  }

  .shapeLeft {
    --self-delay: var(--delay);
    --self-duration: calc(var(--duration) - var(--self-delay));
    animation: left var(--self-duration) linear var(--self-delay);
    animation-fill-mode: both;
    stroke-dashoffset: -234px;
  }

  .shapeRight {
    --self-delay: calc(var(--delay) * 2);
    --self-duration: calc(var(--duration) - var(--self-delay));
    stroke-dasharray: 979px;
    animation: right var(--self-duration) linear var(--self-delay);
    animation-fill-mode: both;
  }
}

.synched {
  --delay: 0s;
}
</style>
