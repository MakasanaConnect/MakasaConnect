<script setup>
    const props = defineProps(['user']);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        // Handle file upload logic here
    };

    const uploadQualification = () => {
        // Handle qualification submission logic here
    };
</script>

<template>
    <div class="user-profile p-8 bg-grey-500 shadow-md rounded-lg">
        <h1 class="text-3xl font-bold mb-6 px-10">Profile</h1>
        <div class="flex items-center">
            <div class="avatar w-32 h-32 overflow-hidden rounded-full mr-6">
                <img :src="user.avatar" alt="User Avatar" class="w-full h-full object-cover">
            </div>
            <div class="details">
                <h2 class="text-blue-500 text-xl font-semibold mb-2 mx-5">{{ user.name }}</h2>
                <p class="mb-2"><strong>Full names:</strong> {{ user.fullnames }}</p>
                <p class="mb-2"><strong>Birthdate:</strong> {{ user.birthdate }}</p>
                <p class="mb-2"><strong>Gender:</strong> {{ user.gender }}</p>
                <p class="mb-2"><strong>Email:</strong> {{ user.email }}</p>
                <p class="mb-2"><strong>Address:</strong> {{ user.address }}</p>
                <p class="mb-2"><strong>Employment status:</strong> {{ user.employment }}</p>
                <p class="mb-2"><strong>Family members:</strong> {{ user.familyMembers }}</p>
                <div class="qualification-upload mt-4 flex items-center">
                    <label for="qualification-file" class="mr-3">Upload Qualification:</label>
                    <div class="relative">
                        <input type="file" id="qualification-file" class="opacity-0 absolute inset-0 w-full h-full cursor-pointer" @change="handleFileUpload">
                        <button class="bg-blue-500 text-white px-4 py-2 rounded-md border border-blue-500 hover:bg-blue-600 transition duration-300">Choose File</button>
                    </div>
                </div>
                <div class="proof-of-residence mt-4 flex items-center">
                    <label for="proof-of-residence-file" class="mr-3">Upload Proof of Residence:</label>
                    <div class="relative">
                        <input type="file" id="proof-of-residence-file" class="opacity-0 absolute inset-0 w-full h-full cursor-pointer" @change="handleFileUpload">
                        <button class="bg-blue-500 text-white px-4 py-2 rounded-md border border-blue-500 hover:bg-blue-600 transition duration-300">Choose File</button>
                    </div>
                </div>
                <button class="mt-4 bg-green-500 text-black px-4 py-2 rounded-md hover:bg-green-600 transition duration-300" @click="uploadQualification">Upload</button>
            </div>
        </div>
    </div>
</template>
