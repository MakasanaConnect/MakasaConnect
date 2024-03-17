<template>
  <main class="flex-grow p-5 bg-cover bg-center animate-bg h-screen flex flex-col items-start justify-center font-fun relative">
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <!-- Call to action -->
    <section class="text-left w-1/2 bg-green-500 bg-opacity-50 p-5 rounded-lg mb-10 relative">
      <h1 class="text-4xl mb-4">Welcome to MakasanaConnect</h1>
      <p class="text-lg mb-4">
        Connecting communities and their respective municipalities.
      </p>
      <p class="text-lg mb-4">
        Join now and take advantage of our Zaka incentive!
      </p>
      <router-link :to="{ name: 'Register' }">
        <button class="py-2 px-4 bg-green-500 text-white rounded font-semibold">Register Now</button>
      </router-link>
    </section>
    <!-- Our Services -->
    <section class="text-left w-1/2 bg-green-500 bg-opacity-50 p-5 rounded-lg relative">
      <h2 class="text-3xl mb-4">Our Services</h2>
      <div class="grid grid-cols-3 gap-4">
        <!-- Replace with your actual services -->
        <div class="p-4 border rounded">
          <h3 class="text-xl mb-2">Job listing</h3>
          <p>Description of Service 1</p>
        </div>
        <div class="p-4 border rounded">
          <h3 class="text-xl mb-2">Skill listing</h3>
          <p>Description of Service 2</p>
        </div>
        <div class="p-4 border rounded">
          <h3 class="text-xl mb-2">Municipal/Community relationship</h3>
          <p>Description of Service 3</p>
        </div>
      </div>
    </section>
  </main>
</template>

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