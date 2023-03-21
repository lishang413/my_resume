<template>
  <full-page>
    <div class="section">
      <home/>
    </div>
    <div class="section">
      <skill />
    </div>
    <div class="section">
      <workExperience/>
    </div>
    <div class="section">
      <contactMe/>
    </div>
  </full-page>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import home from './components/home.vue';
import skill from "@/components/skill.vue";
import workExperience from "@/components/workExperience.vue";
import ContactMe from "@/components/contactMe.vue";

export default defineComponent({
  name: 'App',
  components: {
    ContactMe,
    home,
    skill,
    workExperience,
  },
  data () {
    return {
      // options: {
      //   licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      //   // afterLoad: this.afterLoad,
      //   scrollOverflow: true,
      //   navigation: true,
      // }
    }
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
