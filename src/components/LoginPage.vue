<template>
  <div class="max-w-md mx-auto bg-green-500 shadow-md my-10 rounded-lg p-8 border">
    <h1 class="text-3xl text-white font-bold mb-6">Login</h1>
    <div class ="mb-4">
    <input type="text" v-model="id" placeholder="Enter ID: ">
  </div>
  <div class ="mb-4">
    <input type="text" v-model="id" placeholder="Password: ">
  </div>
    <button class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300" @click="login">Login</button>
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
