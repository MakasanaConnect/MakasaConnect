<template>
  <div class="max-w-md mx-auto bg-green-600 shadow-md rounded-lg p-8 border">
>
    <h1>Registration Data </h1>
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

      <button type="submit" class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Confirm</button>
    </form>
  </div>
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
