<template>
  <main class="flex-grow p-5 bg-cover bg-center animate-bg h-screen flex flex-col items-start justify-center font-fun relative">
  <div class="max-w-md mx-auto bg-green-500 shadow-md rounded-lg p-8 border">
    <h1 class="text-3xl text-white font-bold mb-6">Registration Data </h1>
    <form @submit.prevent="ConfirmPage">
      <div class ="mb-4">
        <input type="text" id="name" v-model="registration.name" placeholder="Full Names: " required >
      </div>
      <div class ="mb-4">
        <input type="text" id="Birhtdate" v-model="registration.Birhtdate" placeholder="Birhtdate:" required>
      </div>
      <div class ="mb-4">
        <input type="text" id="Birhtdate" v-model="registration.Gender" placeholder="Gender: " required>
      </div>
      <div class ="mb-4">
        <input type="email" id="email" v-model="registration.email" placeholder="Email: ">
      </div>
      <div class ="mb-4">
        <input type="password" id="password" v-model="registration.Residential" placeholder="Residential Address: " required>
      </div>
      <div class ="mb-4">
        <input type="password" id="password" v-model="registration.password" placeholder="Password: ">
      </div>
      <div class ="mb-4">
        <input type="password" id="password" v-model="registration.ConfirmPassword" placeholder="Confirm password" required>
      </div>

        <router-link to="/Profile">
        <button class="py-2 px-4 bg-green-500 text-white rounded font-semibold">Confirm</button>
      </router-link>
    </form>
  </div>
</main>
</template>

<script>
export default {
  data() {
    return {
      registration: {
        name: '',
        email: '',
        password: '',
        idNumber: ''
      }
    };
  },
  methods: {
    ConfirmPage() {
      // Here you can send the registration data to your backend server
      console.log('Confirmation data:', this.ConfirmPage);
      this.$router.push('/Profile');
      // You can also perform any additional validation before submitting the form
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