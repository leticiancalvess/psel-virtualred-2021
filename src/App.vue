<template>
  <div id="app">
    <Navbar />
    <Menu />  
    <router-view path='$router.key'></router-view>
   
   </div> 
</template>

<script>
import Navbar from './paginas/navbar.vue';
import Menu from './paginas/menu-vertical.vue'
export default {
  name: 'app',
components: {
  Navbar, 
  Menu, 
}
}
</script>

<style>

</style>
