<template>
    <div>
      <h1>Registration</h1>
      <form @submit.prevent="register">        
        <div>
          <label for="idNumber">ID Number:</label>
          <input type="text" id="idNumber" v-model="registration.idNumber" required>
          <!-- Add validation messages here if needed -->
        </div>
        <button type="submit">Register</button>
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
        // You can also perform any additional validation before submitting the form
      }
    }
  };
  </script>
  