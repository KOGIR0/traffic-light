<template>
  <div id="app">
    <router-view :direction="this.direction"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function()
  {
      return {
          direction: 'down'
      }
  },
  updated()
  {
      if(this.$route.path === '/green')
      {
          this.direction = 'up';
      } else if(this.$route.path == '/red') {
          this.direction = 'down';
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
