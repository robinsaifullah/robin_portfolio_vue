<template>
    <header class="flex justify-between items-center p-6 bg-opacity-50 relative z-20">
        <div class="text-white text-3xl font-bold"></div>
        <!-- Mobile Toggle Button -->
        <div class="md:hidden z-30">
            <button type="button" class="block focus:outline-none" @click="isMenuOpen = !isMenuOpen">
                <span v-if="isMenuOpen" class="text-5xl">
                    <img src="https://img.icons8.com/ios-filled/100/ffffff/delete-sign.png" alt="close" width="50"
                        height="50">
                </span>
                <span v-else class="text-5xl">
                    <img src="https://img.icons8.com/ios-filled/100/ffffff/menu--v6.png" alt="menu" width="50"
                        height="50">
                </span>
            </button>
        </div>
        <!-- Navbar Links -->
        <nav
            :class="['fixed inset-0 z-20 flex flex-col items-center justify-center bg-[#111827] md:relative md:bg-transparent md:flex md:justify-between md:flex-row', isMenuOpen ? 'block' : 'hidden']">
            <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">
                <li v-for="item in Menu" :key="item.name">
                    <a :href="item.href"
                        class="block text-white transition hover:text-primary ease-linear text-2xl md:text-lg shadow-lg "
                        @click.prevent="scrollSection(item.href)">
                        {{ item.name }}
                    </a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import { ref } from 'vue';
const Menu = ref([
    { name: 'About Me', href: '#AboutSection' },
    { name: 'Services', href: '#ServiceSection' },
    { name: 'Experience', href: '#Experience' },
    { name: 'Contact', href: '#Contact' },
]);

const isMenuOpen = ref(false);

const scrollSection = (href) => {
    isMenuOpen.value = false; // Close the menu after clicking
    const section = document.querySelector(href);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
    }
};
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>