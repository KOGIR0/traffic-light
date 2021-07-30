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
  methods:
  {
      updateDirection()
      {
        if(this.$route.path === '/green')
        {
            console.log("up");
            this.direction = 'up';
        } else if(this.$route.path === '/red') {
            this.direction = 'down';
        }
      }
  },
  mounted()
  {
      this.updateDirection();
  },
  updated()
  {
      this.updateDirection();
  },
  beforeUpdate()
  {
      console.log("update");
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
