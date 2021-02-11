<template>
  <div class="app">
  <div class="home">
    <div class="history">
      <div class="history-title" ><h2>Historique</h2></div>
      <div class="history-content">
        <Historique v-bind:historiques="this.historiques"></Historique>
      </div>
    </div>
    <div v-if="$route.params.paramSearch && !this.historique_searched">
      {{setRecherche($route.params.paramSearch)}}
      {{ search(this.recherche)}}
        {{historique_searched=true}}
    </div>

    <img alt="Vue logo" src="../assets/pokemon_logo.jpg">
      <form class="form">
      <label title="Recherchez un Pokemon!" for="recherche"/>
        <input id="recherche" v-model="this.recherche" type="text" placeholder="nom(en anglais!) ou id">
        <button type="submit" v-on:click="search(this.recherche)">Rechercher</button>
      </form>
    <button type="submit" v-on:click="addToList(this.recherche)">Ajouter le pokémon à ma liste</button>

    <div>
    <div v-if="this.erreur!=null">{{this.erreur}}</div>
    <Pokemon v-else-if="json!=null" v-bind:pokemon="json" />
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import Pokemon from "@/components/Pokemon.vue";
import Historique from "@/components/Historique.vue";

export default {
  name: "Recherche",
  components: {Pokemon,Historique},
  el:'#app',
  data(){
    return {
      saveParam:null,
      recherche: null,
      json:null,
      erreur:null,
      historiques:[],
      historique_searched:false
    };

  },
  beforeRouteLeave(){

  },
  updated() {
    if(this.saveParam!==this.$route.params.paramSearch){
     this.search(this.$route.params.paramSearch);
      this.saveParam=this.$route.params.paramSearch;
      this.historiques.splice(this.historiques.indexOf(this.saveParam),1);
    }
  },
  created() {
    this.saveParam=this.$route.params.paramSearch;
  },
  methods:{
    search(paramRecherche){
      if (paramRecherche != null) {
        axios
            .get('https://pokeapi.co/api/v2/pokemon/' + paramRecherche)
            .then(
                response =>{
                  this.erreur=null;
                    this.historiques.unshift(paramRecherche);
                  (this.json = response)

                })
            .catch((e)=>{
              console.log(e);
              this.erreur=
                  "le pokémon n'existe pas"
            })
      }

    },
    setRecherche(param){
      this.recherche=param;
    },
    addToList(pokemon){
      let localTeam=JSON.parse(localStorage.getItem("team"));
      localTeam.push(pokemon)
      localStorage.setItem("team",JSON.stringify(localTeam))

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