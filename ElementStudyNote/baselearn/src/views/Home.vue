<template>
  <div>
    this is home
<!-- $route 获取参数 $router 操作参数   -->
    <h1>{{ $route.params.id }}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>