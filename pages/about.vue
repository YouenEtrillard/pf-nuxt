<template>
  <main :class="$style.root">
    <Cover />
    <div class="wrapper">
      <Resume 
        :education="education"
        :experience="experience"
        :skills="skills"
       />
      <Intro />
      <Facts />
    </div>
  </main>
</template>


<script lang="ts">
  import Vue from 'vue';
  import Contact from '~/components/Contact.vue';
  import Cover from '~/components/Cover.vue';
  import Facts from '~/components/Facts.vue';
  import Intro from '~/components/Intro.vue';
  import Resume from '~/components/Resume.vue';

  export default Vue.extend({
    components: {
      Contact,
      Cover,
      Facts,
      Intro,
      Resume,
    },
    data() {
      return {
        education: [{"id":1,"institute":"Digital Campus Rennes","degree":"Bachelor multimedia project manager","dates":"2015-2016","order":1},{"id":2,"institute":"IUT Laval","degree":"DUT Multimedia and internet professions","dates":"2012-2014","order":2}],
        experience: [{"id":4,"company":"Check24","role":"Front-end Developer","dates":"06/2019 to Present","order":10,"description":null,"location":"Munich, Germany"},{"id":1,"company":"Cognix Systems","role":"Front-end Developer","dates":"08/2016 to 09/2018","order":20,"description":"Rich web app and hybrid mobile app development\nResponsive websites integration\nMaintenance and development of new modules for WebGazelle CMS\nRole in the improvement of the company's process and ressources\n\n","location":"Rennes, France"},{"id":2,"company":"Cognix Systems","role":"Front-end Developer (work-study contract)","dates":"10/2015 to 07/2016","order":30,"description":"Showcase websites and online stores integration using the company's custom CMS : WebGazelle.","location":"Rennes, France"},{"id":3,"company":"Ireland Website Design","role":"Web Integrator (internship)","dates":"04/2014 to 06/2014","order":40,"description":"Websites integration with joomla mainly for local shops and companies.","location":"Tramore, Ireland"}],
        skills: [{"id":1,"skill_name":"HTML","order":1},{"id":2,"skill_name":"CSS","order":2},{"id":3,"skill_name":"Sass","order":3},{"id":4,"skill_name":"Javascript","order":4},{"id":5,"skill_name":"Angular 2+","order":5},{"id":6,"skill_name":"VueJS","order":6},{"id":7,"skill_name":"Asking questions","order":7},{"id":8,"skill_name":"Ionic","order":8},{"id":9,"skill_name":"Typescript","order":9},{"id":10,"skill_name":"Git","order":10},{"id":11,"skill_name":"Webpack","order":11},{"id":12,"skill_name":"Adobe suite","order":12},{"id":13,"skill_name":"Gulp","order":13},{"id":14,"skill_name":"Smarty 2-3","order":14}],
      }
    },
  })
</script>

<style lang="scss" module>
  .root {
    max-width: 100%;
  }
</style>