<template>
  <div class="bg-[#263658] min-h-screen">
    <NavBar />
    <Herosection />
    <Servicesection />
    <Aboutsection />
    <ExperianceSection />
    <Contact />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
//import component Asychronusly
const NavBar = defineAsyncComponent(() => import('@/components/Navbar.vue'));
const Herosection = defineAsyncComponent(() => import('@/components/HeroSection.vue'));
const Servicesection = defineAsyncComponent(() => import('@/components/ServiceSection.vue'));
const Aboutsection = defineAsyncComponent(() => import('@/components/AboutSection.vue'));
const ExperianceSection = defineAsyncComponent(() => import('@/components/experience.vue'));
const Contact = defineAsyncComponent(() => import('@/components/Contact.vue'));
</script>