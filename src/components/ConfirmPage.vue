<template>
    <div>
      <h1>Registration</h1>
      <form @submit.prevent="register">
        <div>
          <label for="Full Names: ">Full Names</label>
          <input type="text" id="name" v-model="registration.name" required>
        </div>
        <div>
          <label for="Birhtdate:"> Birhtdate</label>
          <input type="text" id="Birhtdate" v-model="registration.Birhtdate" required>
        </div>
        <div>
          <label for="Gender"> Birhtdate</label>
          <input type="text" id="Birhtdate" v-model="registration.Birhtdate" required>
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="registration.email" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="registration.password" required>
        </div>
        <div>
          <label for="idNumber">ID Number:</label>
          <input type="text" id="idNumber" v-model="registration.idNumber" required>
          <!-- Add validation messages here if needed -->
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
        console.log('Registration data:', this.registration);
        // You can also perform any additional validation before submitting the form
      }
    }
  };
  </script>
  