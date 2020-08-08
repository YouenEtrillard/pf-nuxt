<template>
  <ul :class="$style.contactMeans" class="content">
    <li>
      <p><a target="_blank" href="./cv-youen-etrillard.pdf">Resume</a></p>
    </li>
    <li>
      <p>contact (at) youen-etrillard.com</p>
    </li>
    <li>
      <p><a target="_blank" href="https://www.linkedin.com/in/youen-etrillard-12265883/">Linkedin</a></p>
    </li>
  </ul>
</template>

<script>
export default {

}
</script>

<style module lang="scss">
  .contactMeans {
    margin: 0;
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 80rem;
    flex-wrap: wrap;

    li {
      list-style-type: none;
      margin: 0.2em 1rem;
    }
  }
</style>