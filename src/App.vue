<template>
  <div class="user-data">
    {{ userData.name }} @{{ userData.userName }}
  </div>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/posts">Posts</RouterLink>
    <RouterLink to="/modals">Modals</RouterLink>
  </nav>


  <RouterView />
</template>

<script setup>
// imports
import { RouterLink, RouterView } from 'vue-router';
import { reactive, provide } from 'vue';
// user data
const userData = reactive({
  name: 'Gihan',
  userName: 'gihanT',
})

provide('userData', userData); // provide user data to child components
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.user-data {
  color: black;
  position: absolute;
  background: beige;
  top: 0;
  right: 0;
  font-size: 12px;
  padding: 5px;
}
</style>
