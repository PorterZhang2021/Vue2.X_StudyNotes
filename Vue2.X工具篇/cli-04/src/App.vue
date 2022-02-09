<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/list">List</router-link> |
      <router-link to="/about">About</router-link>

      <br>
      <router-link to="/user/5">user 5</router-link> |
      <router-link to="/user/6">user 6</router-link>

      <br>
      <router-link to="/user/5/profile">5号档案</router-link> |
      <router-link to="/user/5/posts">5号岗位</router-link>

      <br>
      <button @click="go(-1)">goUp</button>
      <button @click="go(1)">goDown</button>
      <button @click="goList">goList</button>
      <button @click="goUser(5)">goUser/5</button>
<!--      <button @click="goUser2(6)">goUser2/6</button>-->

    </div>
    <router-view/>
  </div>
</template>

<script>
export default  {
  methods : {
    // 第一种方法
    // goList() {
    //   this.$router.push('/list');
    // }

    // 第二种方法 键值对 name传参
    // goList() {
    //   this.$router.push({
    //     name : 'List',
    //   })

    // 第三种方法 键值对 path传参
    goList(){
      this.$router.push({
        path : '/list',
      })
    },

    // 第一种传参的方法 使用name 和 params配套
    goUser(id){
      this.$router.push({
        name : 'User',
        params : {
          id
        }
      })
    },

    // 第二种传参的方法 使用path
    // goUser2(id){
    //   this.$router.push({
    //     path: '/user',
    //     query : {
    //       id
    //     },
    //   })
    // }

    go(step) {
      this.$router.go(step);
    }
  },
  watch : {
    $route(to, from){
      // console.log(to);
      // console.log(from);
    }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
