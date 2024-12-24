<template>
    <section class=" text-white mt-20" id=" Contact">
        <div class="container mx-auto px-6 py-12">
            <div class="text-center mb-10">
                <h2 class="text-4xl font-bold mb-4">
                    <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Contact</span>
                </h2>
                <hr class="border-t-2 border-primary w-1/4 mx-auto mb-4" />
            </div>

            <div class="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
                <div class="flex flex-col items-center">
                    <div class="bg-[#111a3e] p-6 rounded-lg shadow-lg text-center">
                        <h3 class="font-medium text-primary">E-mail</h3>
                        <p class="mt-2 text-gray-300">robin2222015@gmail.com</p>
                    </div>
                </div>

                <div class="flex flex-col items-center">
                    <div class="bg-[#111a3e] p-6 rounded-lg shadow-lg text-center">
                        <h3 class="font-medium text-primary">Phone</h3>
                        <p class="mt-2 text-gray-300">+8801717553507 (Mobile)</p>
                    </div>
                </div>

                <div class="flex flex-col items-center">
                    <div class="bg-[#111a3e] p-6 rounded-lg shadow-lg text-center">
                        <h3 class="font-medium text-primary">Address</h3>
                        <p class="mt-2 text-gray-300">98, Central Basabo</p>
                    </div>
                </div>

                <div class="flex flex-col items-center">
                    <div class="bg-[#111a3e] p-6 rounded-lg shadow-lg text-center">
                        <h3 class="font-medium text-primary">IM</h3>
                        <p class="mt-2 text-gray-300">robin2222015 (Skype)</p>
                    </div>
                </div>
            </div>
        </div>

        <footer class="bg-gray-800 text-white py-6">
            <div class="container mx-auto text-center">
                <p class="mb-2">© 2024 robinsaifullah. Showcasing my journey in IT and design. All rights reserved.</p>
                <div class="flex justify-center space-x-4">
                    <a href="https://www.facebook.com/Robin.saifullah" class="hover:text-blue-400">Facebook</a>
                    <a href="#" class="hover:text-blue-400">Twitter</a>
                    <a href="https://www.instagram.com/saifrobin5" class="hover:text-blue-400">Instagram</a>
                    <a href="https://www.linkedin.com/in/saifullahrobin/" class="hover:text-blue-400">LinkedIn</a>
                </div>
            </div>
        </footer>
    </section>
</template>

<script>
import emailjs from "emailjs-com";

export default {
    // Add any methods or data properties if needed
}
</script>

<style scoped>
/* Add any additional styles here */
footer {
    clear: both;
    /* Ensure footer is below all content */
}
</style>