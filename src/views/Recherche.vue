<template>
  <div class="app">
  <div class="home">
    <img alt="Vue logo" src="../assets/pokemon_logo.jpg">
      <form class="form">
      <label title="Recherchez un Pokemon!" for="recherche"/>
        <input id="recherche" v-model="this.recherche" type="text" placeholder="nom(en anglais!) ou id">
      </form>
    {{ search }}

    <Pokemon v-if="json != 'Not Found' && json != null " v-bind:pokemon="json" />
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import Pokemon from "@/components/Pokemon.vue";

export default {
  name: "Recherche",
  components: {Pokemon},
  el:'#app',
  data(){
    return {
      recherche: null,
      json:null,
      action :{
        search: async()=>{
          if (this.recherche != null) {
            axios
                .get('https://pokeapi.co/api/v2/pokemon/' + this.recherche)
                .then(
                    response =>
                      (this.json = response)


                )

          }
        }
      }
    };

  },
  computed:{
      search:function (){
        this.action.search()
        return null;
      }
  }
};
</script>

<style>
.form{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>