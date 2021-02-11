<template>
  <div v-if="historiques.length>0">
    <div  class="historique_elem" v-bind:key="historique"  v-for="historique in historiques">
     <span @click="$router.push('/'+historique);">{{ historique }}</span>
    </div>

  </div>
</template>
<script>



export default {
  name: "Historique.vue",
  props:{
    historiques: []
  }
};
</script>
<style scoped>

.historique_elem{
  cursor:pointer
}
</style>