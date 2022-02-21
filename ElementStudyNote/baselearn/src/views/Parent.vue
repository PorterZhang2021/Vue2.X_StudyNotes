<template>
  <div>
    <h1>Parent</h1>
     <child v-bind:msg="'from Parent msg'" @showMsg="showMsg" ref="child" v-bind="$attrs"></child>
    <h3>{{msg}}</h3>
    <h5>vuex <span style="color: red">{{count}}</span></h5>
    <h5>getters <span style="color: red">{{doubleCount}}</span></h5>
    <button @click="add">增加</button>
  </div>
</template>

<script>
import Child from "@/views/Child";
import {mapState, mapGetters} from "vuex"
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
    },
    add() {
      // this.$store.commit('add');
      this.$store.dispatch('delayAdd');
    },
  },
  mounted() {
    console.log(this.$children[0]);
    console.log('ref',this.$refs.child);
  },
  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   }
  // }
  computed: {
    ...mapState({
      count: state => state.text.count,
    }),
    ...mapGetters([
      'doubleCount',
    ]),
  },
}
</script>

<style scoped>

</style>