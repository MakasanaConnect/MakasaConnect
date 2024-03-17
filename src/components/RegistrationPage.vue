<template>
  <div class ="font-bold text-4xl my-10">
    Makasana Connect
  </div>

  <div class="max-w-md mx-auto bg-gray-600 shadow-md rounded-lg p-8 border">
    <h1 class="text-3xl text-white font-bold mb-6">Registration</h1>
    <form @submit.prevent="register">        
      <div class="mb-4">
        <input type="text" id="idNumber" v-model="registration.idNumber" placeholder="ID Number:" 
               class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
               required>
      </div>
      <button type="submit" class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Register</button>
    </form>
  </div>
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
