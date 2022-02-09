<template>
  <div>
    <h3>Child</h3>
    <h5>{{msg}}</h5>
    <button @click="passMsg">走你</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: {
    msg: {
      type: String,
      default: '',
    }
  },
  methods: {
    passMsg() {
      this.$emit('showMsg', 'I am from Child');
    }
  }
}
</script>

<style scoped>

</style>