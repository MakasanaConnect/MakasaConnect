<template>
   <main class="flex-grow p-5 bg-cover bg-center animate-bg h-screen flex flex-col items-start justify-center font-fun relative">
<div class="flex-grow p-5 bg-cover bg-center animate-bg h-screen flex flex-col items-start justify-center font-fun relative">
  <div class="max-w-md mx-auto bg-green-500 shadow-md rounded-lg p-8 border">
    <h1 class="text-3xl text-white font-bold mb-6">Registration</h1>
    <form @submit.prevent="register">        
      <div class="mb-4">
        <input type="text" id="idNumber" v-model="registration.idNumber" placeholder="ID Number:" 
               class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
               required>
      </div>
      <div>
        <button type="submit" class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Register</button>
      </div>
      <button type="submit" class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Scan ID</button>
    </form>
  </div>
</div>
</main>
</template>

<script>
export default {
  data() {
    return {
      registration: {
        idNumber: ''
      }
    };
  },
  methods: {
    register() {
      // Here you can send the registration data to your backend server
      console.log('Registration data:', this.registration);
      this.$router.push('/confirmPage');

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