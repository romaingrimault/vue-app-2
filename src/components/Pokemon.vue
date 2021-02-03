<template>

  <img v-bind:src="pokemon['data']['sprites']['front_default']"/>

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