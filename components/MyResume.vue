<template>
  <section :class="$style.root">
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
            <p v-if="xp.details" class="content" v-html="xp.details"></p>
          </div>
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
  display: flex;
  flex-wrap: wrap;
  padding: var(--padding-top) 0;

  section:not(:last-child) {
    margin-bottom: 4rem;
  }

  h2 {
    text-transform: uppercase;
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

.education {
}

.experience {
  width: 100%;
}

.education {
  width: calc(100% / 3);

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
  width: calc(100% / 1.5);
  ul {
    columns: 2;
    column-gap: 4rem;
  }

  p {
    display: inline-block;
  }
}
</style>
