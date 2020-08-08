<template>
  <section :class="$style.root">
    <section :class="$style.experience">
      <h2>Experience</h2>
      <ul>
        <li v-for="(xp, index) in experience" :key="index" :class="$style.xpItem">
          <div>
            <p v-if="xp.company && xp.company !== ''">{{xp.company}}</p>
            <p v-if="xp.dates && xp.dates !== ''">{{xp.dates}}</p>
            <p :class="$style.xpTitle" v-if="xp.role && xp.role !== ''">{{xp.role}}</p>
          </div>
        </li>
      </ul>
    </section>
    <section :class="$style.skills">
      <h2>Some skills</h2>
      <ul>
        <li v-for="(skill, index) in skills" :key="index" :class="$style.skillItem">
          <p>{{skill.skill_name}}</p>
        </li>
      </ul>
    </section>
    <section :class="$style.education">
      <h2>Education</h2>
      <ul>
        <li v-for="(educ, index) in education" :key="index" :class="$style.educItem">
          <div>
            <p v-if="educ.dates && educ.dates !== ''">{{educ.dates}}</p>
            <p v-if="educ.institute && educ.institute !== ''">{{educ.institute}}</p>
            <p :class="$style.educTitle" v-if="educ.degree && educ.degree !== ''">{{educ.degree}}</p>
          </div>
        </li>
      </ul>
    </section>
    <section>
      <ul :class="$style.contactMeans" class="content">
        <li>
          <p><a target="_blank" href="./cv-youen-etrillard.pdf">Resume</a></p>
        </li>
        <li>
          <p>contact@youen-etrillard.com</p>
        </li>
        <li>
          <p><a target="_blank" href="https://www.linkedin.com/in/youen-etrillard-12265883/">Linkedin</a></p>
        </li>
      </ul>
    </section>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    data: function() {
      return {
        education: [{"id":1,"institute":"Digital Campus Rennes","degree":"Bachelor multimedia project manager","dates":"2015-2016","order":1},{"id":2,"institute":"IUT Laval","degree":"DUT Multimedia and internet professions","dates":"2012-2014","order":2}],
        experience: [{"id":4,"company":"Check24","role":"Front-end Developer","dates":"06/2019 to Present","order":10,"description":null,"location":"Munich, Germany"},{"id":1,"company":"Cognix Systems","role":"Front-end Developer","dates":"08/2016 to 09/2018","order":20,"description":"Rich web app and hybrid mobile app development\nResponsive websites integration\nMaintenance and development of new modules for WebGazelle CMS\nRole in the improvement of the company's process and ressources\n\n","location":"Rennes, France"},{"id":2,"company":"Cognix Systems","role":"Front-end Developer (work-study contract)","dates":"10/2015 to 07/2016","order":30,"description":"Showcase websites and online stores integration using the company's custom CMS : WebGazelle.","location":"Rennes, France"},{"id":3,"company":"Ireland Website Design","role":"Web Integrator (internship)","dates":"04/2014 to 06/2014","order":40,"description":"Websites integration with joomla mainly for local shops and companies.","location":"Tramore, Ireland"}],
        skills: [{"id":1,"skill_name":"HTML","order":1},{"id":2,"skill_name":"CSS","order":2},{"id":3,"skill_name":"Sass","order":3},{"id":4,"skill_name":"Javascript","order":4},{"id":5,"skill_name":"Angular 2+","order":5},{"id":6,"skill_name":"VueJS","order":6},{"id":7,"skill_name":"Asking questions","order":7},{"id":8,"skill_name":"Ionic","order":8},{"id":9,"skill_name":"Typescript","order":9},{"id":10,"skill_name":"Git","order":10},{"id":11,"skill_name":"Webpack","order":11},{"id":12,"skill_name":"Adobe suite","order":12},{"id":13,"skill_name":"Gulp","order":13},{"id":14,"skill_name":"Smarty 2-3","order":14}],
      }
    }
  })
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
      margin: .4em 0;
    }

    ul {
      padding: 0;
    }

    li {
      list-style-type: none;
    }
  }

  .xp,
  .educ {
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