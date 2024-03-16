<template>
  <nav class="p-5 bg-green-700 text-white flex justify-between items-center">
    <!-- Logo -->
    <h1 class="text-4xl">MakasanaConnect</h1>
    <!-- Action buttons -->
    <div class="flex gap-5">
      <router-link to="/register">
        <button class="py-2 px-4 bg-white text-green-700 rounded font-semibold">Register</button>
      </router-link>
      <router-link to="/login">
        <button class="py-2 px-4 bg-green-500 text-white rounded font-semibold">Login</button>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
</style>