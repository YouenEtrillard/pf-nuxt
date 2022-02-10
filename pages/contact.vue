<template>
  <main :class="$style.root">
    <h2>If you want to get in touch !</h2>

    <ul :class="$style.contactMeans" class="content">
      <li>
        <p>
          <a
            target="_blank"
            title="Link to my resume"
            href="./cv-youen-etrillard.pdf"
            >Resume</a
          >
        </p>
      </li>
      <li>
        <p>contact@youen-etrillard.com</p>
      </li>
      <li>
        <p>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/youen-etrillard-12265883/"
            title="Link to my linkedin profile"
            >Linkedin</a
          >
        </p>
      </li>
    </ul>
  </main>
</template>

<script>
export default {};
</script>

<style module lang="scss">
.root {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  min-height: 100vh;
  padding: 0;
  width: 100%;
}

.contactMeans {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  font-size: var(--fz-subtitle);
  justify-content: space-around;
  margin: 2rem auto 0;
  max-width: 80rem;
  width: 100%;

  li {
    list-style-type: none;
    margin: 0.2em 1rem;
  }
}
</style>
