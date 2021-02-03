<template>

  <img v-bind:src="pokemon['data']['sprites']['front_default']"/>
  <div>id: {{pokemon['data']['id']}}</div>
  <div>Nom: {{pokemon['data']['name']}}</div>

</template>

<script>
export default {
  name: "pokemon.vue",
  props: {
    pokemon: String
  }
}
</script>

<style scoped>

</style>