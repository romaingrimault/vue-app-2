<template>
  <div class="about">
    <Testcomponent msg="Hello dear this is the component" />
  </div>
</template>

<script>
import Testcomponent from "@/components/Testcomponent.vue";

export default {
  name: "Test",
  components: {
    Testcomponent
  }
};
</script>

<style scoped>

</style>