<template>
  <div
    id="app"
    class="font-serif antialiased text-center text-gray-800"
  >

    <nav
      class="py-8"
    >
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>

    <router-view/>

  </div>
</template>

<style>

  nav a {
    @apply font-bold text-gray-600;
  }

  nav a.router-link-exact-active {
    @apply text-green-600;
  }

</style>
