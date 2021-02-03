<template>
    <h1>Mes pokemons!</h1>
  {{team}}

</template>

<script>
//import Pokemon from "@/components/Pokemon";
import axios from "axios";

export default {
  name: "Team",
  //components: {Pokemon},
  methods:{
    search:function (id) {
      let ret=null
      axios
          .get('https://pokeapi.co/api/v2/pokemon/' + id)
          .then(response => ret=response)
      return ret
    }
  }
}
</script>

<style scoped>

</style>