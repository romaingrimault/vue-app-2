<template v-cloak>
    <h1>Mes pokemons!</h1>
      <div v-for="i in json.length" :key="i">
        <Pokemon  v-bind:pokemon="json[i-1]"  />

      </div>

</template>

<script>
import Pokemon from "@/components/Pokemon";
import axios from "axios";



export default {
  name: "Team",
  components: {Pokemon},
  data(){
    return {
      team:null,
      json: [],

    };
},
  created() {
    this.setTeam()
  },
  methods:{
     async search(paramRecherche) {

       if (paramRecherche != null) {
         await axios
             .get('https://pokeapi.co/api/v2/pokemon/' + paramRecherche)
             .then(response =>{
                 this.json.push(response)
             }
             )
       }
     },
    async setTeam() {
      this.team = JSON.parse(localStorage.getItem('team'));

      for (const value of this.team) {
        await this.search(value)
      }

    }
  }
}
</script>

<style scoped>
[v-cloak] {
  display: none;
}
</style>