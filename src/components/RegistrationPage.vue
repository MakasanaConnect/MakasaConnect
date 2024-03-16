<template>
  <div>
    <h1>Registration</h1>
    <form @submit.prevent="register">        
      <div>
        <input type="text" id="idNumber" v-model="registration.idNumber" placeholder="Id number" required>

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
      this.$router.push('/confirm');

    }
  }
};
</script>
