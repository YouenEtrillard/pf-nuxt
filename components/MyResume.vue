<template>
  <section :class="$style.root">
    <section :class="$style.experience">
      <h2>Experience</h2>
      <ul>
        <li
          v-for="(xp, index) in experience"
          :key="index"
          :class="$style.experienceItem"
        >
          <div>
            <p v-if="xp.company && xp.company !== ''">{{ xp.company }}</p>
            <p v-if="xp.dates && xp.dates !== ''">{{ xp.dates }}</p>
            <p v-if="xp.role && xp.role !== ''" :class="$style.experienceTitle">
              {{ xp.role }}
            </p>
          </div>
        </li>
      </ul>
    </section>
    <section :class="$style.skills">
      <h2>Some skills</h2>
      <ul>
        <li
          v-for="(skill, index) in skills"
          :key="index"
          :class="$style.skillItem"
        >
          <p>{{ skill.skill_name }}</p>
        </li>
      </ul>
    </section>
    <section :class="$style.education">
      <h2>Education</h2>
      <ul>
        <li
          v-for="(educ, index) in education"
          :key="index"
          :class="$style.educationItem"
        >
          <div>
            <p v-if="educ.dates && educ.dates !== ''">{{ educ.dates }}</p>
            <p v-if="educ.institute && educ.institute !== ''">
              {{ educ.institute }}
            </p>
            <p
              v-if="educ.degree && educ.degree !== ''"
              :class="$style.educationTitle"
            >
              {{ educ.degree }}
            </p>
          </div>
        </li>
      </ul>
    </section>
    <section>
      <ul :class="$style.contactMeans" class="content">
        <li>
          <p>
            <a
              target="_blank"
              href="./cv-youen-etrillard.pdf"
              title="Link to my résumé"
              >Résumé</a
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
    </section>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    education: {
      type: Array,
      required: true
    },
    experience: {
      type: Array,
      required: true
    },
    skills: {
      type: Array,
      required: true
    }
  }
});
</script>

<style lang="scss" module>
.root {
  padding: var(--padding-top) 0;
  display: grid;
  grid-gap: 2vw;
  grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));

  section {
    margin-bottom: 4rem;
  }

  h2 {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
  }

  p {
    // font-size: 1.6rem;
    margin: 0.4em 0;
  }

  ul {
    padding: 0;
  }

  li {
    list-style-type: none;
  }
}

.experience {
  grid-row-start: span 2;
}

.experience,
.education {
  &Item {
    &:not(:first-child) {
      margin-top: 3.5rem;
    }
  }

  &Title {
    font-style: italic;
    font-family: var(--font-family-title);
  }
}

.skills {
  ul {
    columns: 2;
    column-gap: 4rem;
  }

  p {
    display: inline-block;
  }
}

.contactMeans {
  li {
    list-style-type: none;
    margin: 0.2em 1rem;
  }
}
</style>
