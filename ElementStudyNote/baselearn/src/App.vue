<template>
  <div id="app">
    this is app
    <!--    <button @click="passMsg">传你</button>-->
    <!--    <parent :msg="a" :msgb="b" :msgc="c"></parent>-->
    <!--  router-link 跳转  -->
    <router-link to="/home">home</router-link>
    <button @click="toHome">home</button>
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
    },
    toHome() {
      // this.$router.push({
      //   path: '/home',
      //   query: {
      //     name:'Jack'
      //   },
      // })
      this.$router.push({
        name: 'home',
        params: {
          id:3
        },
      })
    }
  }
}
</script>

<style>


</style>
