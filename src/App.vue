<template>
  <Home />
</template>
<script>
  import Home from './components/Home.vue'
  export default {
    name: 'App',
    components: {
      Home
    }
  }
</script>
<style>
  #app {
    font-family: Montserrat, Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #747779;
    background: url("./assets/img/background.png");
    background-size: contain;
    padding-top: 10%;
  }

  @media only screen and (max-width: 992px) {
    #app {
      background-size: cover;
    }
  }
</style>