<template>
    <section class="text-white mt-20" id="ServiceSection">
        <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
            <div class="px-4 xl:pl-16">
                <h2 class="text-4xl font-bold text-white mb-4">My <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Service</span>
                </h2>
            </div>
            <div
                class="py-8 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
                <div v-for="service in services" :key="service.id" data-aos="fade-up"
                    class="px-8 py-12 rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641]">
                    <div class="mx-auto h-24 text-center xl:h-28 xl:w-28">
                        <div>
                            <font-awesome-icon v-if="service.iconType" :icon="service.icon" class="fa-4x" />
                            <img v-else :src="service.icon" alt="service" />
                        </div>
                    </div>
                    <div class="text-center">
                        <h3
                            class="pt-8 text-lg font-semibold uppercase text-transparent bg-blend-color-dodge bg-clip-text bg-gradient-to-r from-primary to-secondary lg:text-xl">
                            {{ service.name }}
                        </h3>
                        <div class="text-gray pt-4 text-sm group-hover:text-white md:text-base">
                            <p v-for="(line, index) in service.descriptionLines" :key="index" class="flex items-center">
                                <font-awesome-icon :icon="['fas', 'arrow-right']" class="mr-2" /> <!-- Arrow icon -->
                                {{ line }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

import { faGlobe, faSnowflake, faEnvelope, faCode, faDesktop, faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import the icons you want to use

import { library } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


// Add icons to the library

library.add(faGlobe, faSnowflake, faEnvelope, faCode, faCheck, faDesktop, faArrowRight);


const services = ref([
    {
        id: 1,
        icon: ['fas', 'desktop'], // Font Awesome icon
        iconType: true, // Indicates this is a Font Awesome icon
        name: 'Desktop Services',
        descriptionLines: [
            'Install and configure computer hardware operating systems and applications',
            'Monitor and maintain computer systems and networks',
            'Set up new users accounts and profiles and deal with password issues',
            'Troubleshooting network and software issues',
            'Troubleshoot windows - 7, windows - 10, windows - 11 errors',
            'Install USB or Network(LAN or Wireless) Printer on PC, Laptop, Server',
            'Install any driver which is compatible with your device.',
            'Fix the Printer / Scanner.',
            'Configure routers, switches, routers / API, bridges, etc'
        ]
    },
    {
        id: 2,
        icon: ['fas', 'envelope'], // Font Awesome icon
        iconType: true,
        name: 'Email Services',
        descriptionLines: [
            'Configuring new Outlook',
            'Old outlook to new outlook setup',
            'Send Receive Error Solution',
            'Deleted Mail Recovery',
            'User requirement - wise Outlook rules creation.',
        ]
    },
    {
        id: 3,
        icon: ['fas', 'globe'], // Image icon
        iconType: true,
        name: 'Web Site Realted Service',
        descriptionLines: [
            'Fix any HTML errors',
            'Fix any CSS issues',
            'Fix bootstrap bugs',
            'Domain or hosting purchases',
            'JS related Issues'
        ]
    },
    {
        id: 4,
        icon: ['fas', 'code'], // Font Awesome icon
        iconType: true,
        name: 'Others Service',
        descriptionLines: [
            'PDF, EXCEL, or any type of file protected by a password recovery service',
            'Subsystem setup VMware setup in a windows environment, or any type of most critical issue u can knock me'
        ]
    },

]);
</script>