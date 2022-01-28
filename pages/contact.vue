<template>
  <ul :class="$style.contactMeans" class="content">
    <li>
      <p><a target="_blank" href="./cv-youen-etrillard.pdf">Resume</a></p>
    </li>
    <li>
      <p>contact (at) youen-etrillard.com</p>
    </li>
    <li>
      <p>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/youen-etrillard-12265883/"
          >Linkedin</a
        >
      </p>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style module lang="scss">
.contactMeans {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 80rem;
  width: 100%;

  li {
    list-style-type: none;
    margin: 0.2em 1rem;
  }
}
</style>
