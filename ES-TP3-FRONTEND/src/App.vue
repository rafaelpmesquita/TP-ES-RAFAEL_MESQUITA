<template>
  <v-app>
      <component is="baseLayout"></component>
  </v-app>
</template>


<script lang="ts">
import BaseLayout from './layout/BaseLayout.vue'
import {Vue,Component} from 'vue-property-decorator'
@Component({
  components: {
    'baseLayout': BaseLayout,
  }
})
export default class App extends Vue{
    layout(){
      return 'baseLayout';
    }
};

</script>
