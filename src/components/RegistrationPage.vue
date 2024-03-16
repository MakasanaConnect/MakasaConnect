<template>
  <div>
    <h1>Welcome to Our Site</h1>
    <p>This site is designed to...</p>
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
    validateId() {
      // Replace this with actual validation logic
      this.userData = this.id === '123' ? 'User Data' : null;
    }
  }
};
</script>
