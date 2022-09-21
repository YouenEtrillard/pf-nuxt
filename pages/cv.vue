<template>
  <div :class="$style.root">
    <header :class="$style.header">
      <div :class="$style.logoWrapper">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 439.43 531.84">
          <title>logo</title>
          <g id="Calque_2" data-name="Calque 2">
            <g id="logo">
              <g id="Calque_3" data-name="Calque 3">
                <polygon
                  :class="$style.cls1"
                  points="40.72 72.95 219.75 199.55 399.63 72.45 219.74 0.54 40.72 72.95"
                />
                <polygon
                  :class="$style.cls1"
                  points="1.22 108.95 190.72 244.54 190.41 529.5 1.22 108.95"
                />
                <polygon
                  :class="$style.cls1"
                  points="248.78 244.58 438.22 108.95 248.78 529.52 248.78 244.58"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div :class="$style.intro">
        <h1>Youen Etrillard</h1>
        <p :class="$style.subheading">Front End Developer / VueJs / Angular</p>
      </div>
      <div :class="$style.infos">
        <p>youen-etrillard.com</p>
        <p>contact@youen-etrillard.com</p>
      </div>
    </header>
    <main :class="$style.main">
      <section :class="$style.experience">
        <h2>Experience</h2>
        <ul>
          <li
            v-for="(xp, index) in experience"
            :key="index"
            :class="$style.experienceItem"
          >
            <aside :class="$style.experienceAside">
              <p v-if="xp.dates && xp.dates !== ''">{{ xp.dates }}</p>
              <p v-if="xp.location && xp.location !== ''">{{ xp.location }}</p>
              <span :class="$style.timepoint">du text</span>
            </aside>
            <div :class="$style.experienceContentWrapper">
              <h3 v-if="xp.role && xp.role !== ''">{{ xp.role }}</h3>
              <p v-if="xp.company && xp.company !== ''">{{ xp.company }}</p>
              <p
                v-if="xp.description && xp.description !== ''"
                :class="$style.experienceDesc"
              >
                {{ xp.description }}
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section :class="$style.skillEd">
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
        <section :class="$style.more">
          <div>
            <h2>Languages</h2>
            <ul>
              <li>
                <p><strong>French</strong> : native speaker</p>
              </li>
              <li>
                <p>
                  <strong>English</strong> : fluent with a strong french accent
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2>Currently learning</h2>
            <ul>
              <li>
                <p>React</p>
              </li>
              <li>
                <p>Apollo</p>
              </li>
              <li>
                <p>German</p>
              </li>
            </ul>
          </div>
        </section>
        <section :class="$style.education">
          <h2>Education</h2>
          <ul>
            <li
              v-for="(educ, index) in education"
              :key="index"
              :class="$style.educItem"
            >
              <div :class="$style.educContentWrapper">
                <p v-if="educ.dates && educ.dates !== ''">{{ educ.dates }}</p>
                <p v-if="educ.institute && educ.institute !== ''">
                  {{ educ.institute }}
                </p>
                <p
                  v-if="educ.degree && educ.degree !== ''"
                  :class="$style.educTitle"
                >
                  {{ educ.degree }}
                </p>
              </div>
            </li>
          </ul>
        </section>
      </section>
      <section :class="$style.about">
        <h2>About</h2>
        <p>
          As much as I want to be able to focus on my work without being
          interrupted when I need it, I enjoy learning from and with others and
          thrive in a team where you have opportunities to think and work
          together to resolve problems or come up with new ideas for the
          projects.
        </p>
        <!-- <p>If you want to know a bit more about me personnaly I invite you to visit <a href="https://www.youen-etrillard.com/about">youen.etrillard.com/about</a></p> -->
        <div :class="$style.facts">
          <p>A few rapide-fire facts about me :</p>
          <ul>
            <li
              v-for="(fact, index) in facts"
              :key="index"
              :class="$style.factItem"
            >
              <p v-if="fact.text && fact.text !== ''">{{ fact.title }}</p>
            </li>
          </ul>
        </div>
        <p>
          You can get more details and learn more about some of my works on
          <a href="https://www.youen-etrillard.com">youen.etrillard.com</a>
        </p>
      </section>
    </main>
    <footer></footer>
    <div :class="$style.logoBg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 439.43 531.84">
        <title>logo</title>
        <g id="Calque_2" data-name="Calque 2">
          <g id="logo">
            <g id="Calque_3" data-name="Calque 3">
              <polygon
                :class="$style.cls1"
                points="40.72 72.95 219.75 199.55 399.63 72.45 219.74 0.54 40.72 72.95"
              />
              <polygon
                :class="$style.cls1"
                points="1.22 108.95 190.72 244.54 190.41 529.5 1.22 108.95"
              />
              <polygon
                :class="$style.cls1"
                points="248.78 244.58 438.22 108.95 248.78 529.52 248.78 244.58"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Vue from 'vue';

export default Vue.extend({
  layout: 'print',
  async fetch() {
    await this.$store.dispatch(`fetchResource`, 'education');
    await this.$store.dispatch(`fetchResource`, 'experience');
    await this.$store.dispatch(`fetchResource`, 'facts');
    await this.$store.dispatch(`fetchResource`, 'skills');
  },
  computed: {
    ...mapGetters(['education', 'experience', 'facts', 'skills'])
  }
});
</script>

<style lang="scss">
body {
  --fz-h1: calc(4rem + 1.1vw);
  --fz-subtitle: calc(2.2rem + 0.1vw);
  display: block;
  width: 100%;
  background: initial;
  color: initial;
  margin: 0;
  font-family: var(--font-text);
  font-size: 1.8rem;
  font-size: calc(1.7rem + 0.1vw);
  padding: 15mm;
}

h2,
h3,
h4 {
  color: var(--main-color);
  font-weight: 500;
}

h2 {
  font-size: 2.6rem;
  font-size: var(--fz-subtitle);
  display: inline-block;
  width: 100%;
}

h3 {
  font-size: 2.4rem;
}

ul {
  margin: 0 0 0 2em;

  li {
    list-style-type: disc;
    margin: 0.2em 0;
  }
}

p {
  margin: 0;
  line-height: 1.6;
}

strong {
  font-weight: 500;
}

a {
  --hover-color: var(--third-color);
  --hover-color: var(--second-color);
  --hover-color: var(--main-color);
  color: inherit;
  border-bottom: 2px solid var(--hover-color);
  text-decoration: none;
  transition: background 0.25s ease-out;
  outline-offset: var(--outline-offset-content);
  outline-width: var(--outline-width-content);

  &:hover {
    background: var(--hover-color);
  }
}
</style>

<style lang="scss" module>
.root {
  display: block;
  width: 100%;
  height: 100%;
  border: 1px solid var(--main-color);
  padding: 10mm;
  position: relative;
  height: 161rem;
}

.cls1 {
  stroke: none;
  stroke-miterlimit: 10;
  fill: inherit;
}

.header {
  display: flex;
  align-items: center;
  // flex-direction: row;
  // justify-content: space-between;
}

.logoWrapper {
  svg {
    height: 20rem;
    fill: var(--main-color);
  }
}

.subheading {
  font-size: 2.5rem;
  font-size: var(--fz-subtitle);
  line-height: 1.4;
}

.intro {
  padding: 2rem;
}

.portrait {
  height: 15vh;

  img {
    max-width: 100%;
    max-height: 100%;
  }
}

.infos {
  text-align: right;
  flex-grow: 1;
  padding-top: 3.1rem;

  p {
    line-height: 2.1;
    font-weight: 500;
  }
}

.logoBg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  overflow: hidden;
  pointer-events: none;
  opacity: 0.05;

  svg {
    width: 100%;
    height: 100%;
    transform: translate3d(15vw, 15vh, 0);
  }
}

.main {
  > section {
    margin-top: 4.2rem;
  }
}

.experience {
  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
    display: flex;
    margin: 0;

    &:not(:last-of-type) {
      .experienceAside {
        &::after {
          content: '';
          position: absolute;
          right: -1px;
          top: 10px;
          // width: 2px;
          height: 100%;
          border-left: 2px solid var(--main-color);
          z-index: 0;
          opacity: 0.3;
        }

        p:last-of-type {
          margin-bottom: 2rem;
        }
      }
    }
  }
}

.experienceAside {
  flex-shrink: 0;
  margin: 0 4rem 0 0;
  padding: 0 4rem 0 0;
  position: relative;
  text-align: right;
  width: 22rem;

  .timepoint {
    font-size: 0;
    position: absolute;
    top: 6px;
    right: 0;
    border-radius: 50%;
    transform: translateX(50%);
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
}
.experienceContentWrapper {
  display: inline-block;
  height: 100%;

  h3 {
    margin: 0 0 0.2em 0;
    display: inline-block;

    + p {
      display: inline-block;
      // margin-left: 1rem;
      font-weight: 500;

      &::before {
        content: ' - ';
        display: inline-block;
        margin: 0 1rem;
      }
    }
  }
}

.experienceDesc {
  margin-bottom: 1.2em;
  white-space: pre-line;
}

.skillEd {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1.2fr 0.9fr 0.9fr;

  section {
    // width: calc(100%/3);
  }

  ul {
    margin: 0;
    padding: 0 0 0 1em;
  }
}

.skills {
  ul {
    column-gap: 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  p {
    display: inline-block;
  }
}

.more {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.about {
  ul {
    margin: 0;
    padding: 0.2rem 0 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0rem 1rem;
  }

  li {
    list-style-type: none;
    display: inline-block;
    position: relative;
    padding-left: 1.4rem;
    margin: 0;

    &::before {
      content: '';
      position: absolute;
      left: 0.6rem;
      top: 50%;
      // height: 4px;
      // width: 4px;
      border-radius: 50%;
      // background: black;
      border: 2px solid black;
      transform: translate3d(-50%, -50%, 0);
    }

    // p {
    //   position: relative;
    //   padding-left: .5rem;

    //   &::after {
    //     content:', ';
    //     display: inline-block;
    //     white-space: pre;
    //   }
    // }
  }
}

.facts {
  margin: 1rem 0;
}
</style>
