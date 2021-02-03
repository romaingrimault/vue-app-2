<template>
  <div class="about">
    <Testcomponent msg="Hello dear this is the component" />
    {{ info }}
  </div>
</template>

<script>
import Testcomponent from "@/components/Testcomponent.vue";
import axios from "axios";

export default {
  name: "Test",
  el:'#app',
  components: {
    Testcomponent
  },
  mounted () {
    axios
        .get('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(response => (this.info = response))
  },
  data() {
    return {
      info: null
    }
  },

};
</script>

<style scoped>

</style>