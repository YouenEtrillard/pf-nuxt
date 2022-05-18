<template>
  <section class="intro">
    <h1 id="who-am-i">Who am I ?</h1>
    <p class="subheading">
      That is a big question you're asking. <br />There are lots of ways to
      answer it, but I will leave aside all the metaphoricals and philosophals
      thinkings, and give you {{ facts.length }} fact{{
        facts.length > 0 ? 's' : ''
      }}
      about me so you can get an idea of what to expect if we meet.
    </p>
  </section>
</template>

<script>
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  computed: {
    ...mapGetters([`facts`])
  }
});
</script>
