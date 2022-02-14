<template>
  <div>
    <h1>Parent</h1>
     <child v-bind:msg="'from Parent msg'" @showMsg="showMsg" ref="child"></child>
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
  },
  mounted() {
    console.log(this.$children[0]);
    console.log('ref',this.$refs.child);
  }
}
</script>

<style scoped>

</style>