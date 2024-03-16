<template>
    <div>
      <h1>Registration</h1>
      <form @submit.prevent="ConfirmPage">
        <div>
          <input type="text" id="name" v-model="registration.name" placeholder="Full Names: " required >
        </div>
        <div>
          <input type="text" id="Birhtdate" v-model="registration.Birhtdate" placeholder="Birhtdate:" required>
        </div>
        <div>
          <input type="text" id="Birhtdate" v-model="registration.Gender" placeholder="Gender: " required>
        </div>
        <div>
          <input type="email" id="email" v-model="registration.email" placeholder="Email: ">
        </div>
        <div>
          <input type="password" id="password" v-model="registration.Residential" placeholder="Residential Address: " required>
        </div>
        <div>
          <input type="password" id="password" v-model="registration.password" placeholder="Password: ">
        </div>
        <div>
          <input type="password" id="password" v-model="registration.ConfirmPassword" placeholder="Confirm password" required>
        </div>

        <button type="submit">Confirm</button>
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
      register() {
        // Here you can send the registration data to your backend server
        console.log('Confirmation data:', this.ConfirmPage);
        // You can also perform any additional validation before submitting the form
      }
    }
  };
  </script>
  