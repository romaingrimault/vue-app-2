<template>
  <div v-if="typeof(pokemon)==='string'">

  <img v-bind:src="pokemon['data']['sprites']['front_default']"/>
  <div>id: {{pokemon['data']['id']}}</div>
  <div>Nom: {{pokemon['data']['name']}}</div>
  </div>
  <div v-else-if="typeof(pokemon)==='object'">

    <img v-bind:src="pokemon.data['sprites']['front_default']"/>
    <div>id: {{pokemon.data['id']}}</div>
    <div>Nom: {{pokemon.data['name']}}</div>
  </div>

</template>

<script>
export default {
  name: "pokemon.vue",
  props: {
    pokemon: Object||String,
  }
}
</script>

<style scoped>

</style>