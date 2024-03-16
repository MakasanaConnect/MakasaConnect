<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h2 class="font-bold text-4xl">
      Welcome to MakasanaConnect
      
    </h2>
    <div class = "landing-buttons">
    <div class>
      <router-link to="/register"><button class="action-button bg-white text-black px-3 rounded-sm font-semibold my-5">Register</button></router-link>
    </div>
    <div class="login">
      <router-link to="/login"><button class="action-button action-button bg-green-500 text-black px-3 rounded-sm font-semibold">Login</button></router-link>
    </div>
    <!-- <div class="exit">
      <router-link to=""><button class="action-button">Exit</button></router-link>
    </div> -->
  </div>
  </div>
</template>
<!-- 
<style scoped>

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h2 {
  font-size: 1.2rem;
}
.landing-buttons{
  display: flex;
  justify-content: center;
  align-items: center;
}
.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style> -->
