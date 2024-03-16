<template>
  <div>
    <h1>Login</h1>
    <input type="text" v-model="id" placeholder="Enter ID">
    <button @click="login">Login</button>
    <div v-if="userData">
      <h2>User Data:</h2>
      <p>{{ userData }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      userData: null
    };
  },
  methods: {
    login() {
      // Replace this with actual login logic
      this.userData = this.id === '123' ? 'User Data' : null;
    }
  }
};
</script>
