<template>
   <main class="flex-grow p-5 bg-cover bg-center animate-bg h-screen flex flex-col items-start justify-center font-fun relative">
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
</main>
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
<style scoped>
@keyframes bg {
  0% { background-image: url('../assets/image-1.jpg'); }
  33% { background-image: url('../assets/image-2.jpg'); }
  66% { background-image: url('../assets/image-3.jpg'); }
  100% { background-image: url('../assets/image-1.jpg'); }
}

.animate-bg {
  animation: bg 15s infinite;
}

.font-fun {
  font-family: 'Comic Sans MS', cursive, sans-serif; /* Replace with your actual fun font */
}

.rounded-lg {
  border-radius: 1rem;
}
</style>
