<template>
    <section>
        <section class="bg-transparent dark:bg-transparent" id="Contact">
            <div class="container grid grid-cols-1 gap-10 px-6 py-12 mx-auto lg:grid-cols-3">
                <div>
                    <h2 class="text-4xl font-bold text-white md:text-center mb-4">
                        <span class="text-transparent bg-clip-text text-white">Contact
                        </span>
                        <hr>
                    </h2>
                </div>

                <div class="grid grid-cols-1 gap-12 lg:col-span-2 sm:grid-cols-2">
                    <div>
                        <h2 class="font-medium text-primary dark:text-white">E-mail</h2>
                        <p class="mt-2 text-gray-500 dark:text-gray-400">robin2222015@gmail.com
                        </p>
                    </div>

                    <div>
                        <h2 class="font-medium text-primary dark:text-white">Phone</h2>
                        <p class="mt-2 text-gray-500 dark:text-gray-400">+8801717553507 (Mobile) </p>
                    </div>

                    <div>
                        <h2 class="ffont-medium text-primary dark:text-white">Address</h2>
                        <p class="mt-2 text-gray-500 dark:text-gray-400">98,central Basabo
                        </p>
                    </div>

                    <div>
                        <h2 class="ffont-medium text-primary dark:text-white">IM</h2>
                        <p class="mt-2 text-gray-500 dark:text-gray-400"> robin2222015 (Skype)
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <footer class="bg-gray-800 text-white py-6">
            <div class="container mx-auto text-center">
                <p class="mb-2">© 2024 www.robinsaifullah.com All rights reserved.</p>
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
}
</script>

<style scoped>
/* Add any additional styles here */
footer {
    clear: both;
    /* Ensure footer is below all content */
}
</style>