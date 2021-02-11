<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Rechercher</router-link> |
      <router-link to="/team">Mes pokemons</router-link>
    </div>

  </div>
  <router-view/>
</template>
<script>

export default {

created() {

  localStorage.setItem("team",JSON.stringify(["1","2"]))
}


}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.history{
  position: absolute;
  border: 1px solid black;
  width: 300px;
  height: 300px;
}
.history-title{
  border-bottom: 1px solid black;
  margin: 5px;
}

</style>
