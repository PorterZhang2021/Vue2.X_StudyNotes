<template>
  <div>
    <h1>Parent</h1>
    <child v-bind:msg="'from Parent msg'" @showMsg="showMsg"></child>
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
import Child from "@/views/Child";
export default {
  name: "Parent",
  data() {
    return {
      msg: '',
    }
  },
  components: {
    Child,
  },
  methods: {
    showMsg(val){
      this.msg = val;
    }
  }
}
</script>

<style scoped>

</style>