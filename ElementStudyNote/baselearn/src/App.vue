<template>
  <div id="app">
    <button @click="passMsg">传你</button>
    <parent :msg="a" :msgb="b" :msgc="c"></parent>
    <router-view/>
  </div>
</template>

<script>
import Parent from "@/views/Parent";
import bus from "@/util/bus";

export default {
  data(){
    return {
      a : 'msga',
      b : 'msga',
      c : 'msga',
    }
  },
  components: {
    Parent,
  },
  methods: {
    passMsg() {
      bus.$emit('msg', 'I am from app');
    }
  }
}
</script>

<style>


</style>
