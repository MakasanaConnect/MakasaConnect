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
    <h2>
      Welcome to MakasanaConnect
      
    </h2>
    <div class="register">
      <router-link to="/register"><button class="action-button">Register</button></router-link>
    </div>
    <div class="login">
      <router-link to="/login"><button class="action-button">Login</button></router-link>
    </div>
    <div class="exit">
      <router-link to=""><button class="action-button">Exit</button></router-link>
    </div>
    
  </div>
</template>

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
</style>
