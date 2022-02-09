<template>
  <div id="app">
    <parent></parent>
    <router-view/>
  </div>
</template>

<script>
import Parent from "@/views/Parent";

export default {
  components: {
    Parent,
  }
}
</script>

<style>


</style>
