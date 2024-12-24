<template>
    <section class="bg-gray-900 text-white mt-20" id="ServiceSection">
        <div class="container mx-auto px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-xl">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold mb-4">
                    My
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                        Services
                    </span>
                </h2>
                <p class="text-lg text-gray-400">Providing top-notch IT support tailored to your needs.</p>
            </div>

            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-10 lg:grid-cols-3">
                <div v-for="(category, index) in services" :key="index" data-aos="fade-up"
                    class="bg-[#111a3e] rounded-xl shadow-lg border border-[#1f1641] transition-transform transform hover:scale-105">
                    <div class="flex flex-col items-center p-8">
                        <div class="mb-4">
                            <font-awesome-icon v-if="category.iconType" :icon="category.icon"
                                class="fa-4x text-primary" />
                        </div>
                        <h3
                            class="text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary lg:text-xl mb-4">
                            {{ category.name }}
                        </h3>

                        <div class="text-gray-300 text-sm md:text-base">
                            <p v-for="(service, index) in category.services" :key="index"
                                class="flex items-center mb-2">
                                <font-awesome-icon :icon="['fas', 'check-circle']" class="mr-2 text-secondary" />
                                {{ service }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
    faCheckCircle,
    faGlobe,
    faSnowflake,
    faEnvelope,
    faCode,
    faDesktop,
} from '@fortawesome/free-solid-svg-icons';

// Add icons to the library
library.add(faCheckCircle, faGlobe, faSnowflake, faEnvelope, faCode, faDesktop);

export default {
    components: {
        FontAwesomeIcon,
    },
    data() {
        return {
            services: [
                {
                    name: "Desktop Services",
                    icon: ['fas', 'desktop'], // Icon from the first component
                    iconType: true,
                    services: [
                        "Installation and Configuration: Set up and configure computer hardware, operating systems, and applications to ensure optimal performance.",
                        "System Monitoring and Maintenance: Continuously monitor and maintain computer systems and networks to prevent downtime and ensure reliability.",
                        "User Account Management: Create and manage new user accounts and profiles, including handling password-related issues.",
                        "Troubleshooting: Diagnose and resolve network and software issues efficiently.",
                        "Windows Support: Provide troubleshooting assistance for Windows 7, Windows 10, and Windows 11 errors.",
                        "Printer Installation: Install USB or network (LAN or wireless) printers on PCs, laptops, and servers.",
                        "Driver Installation: Install compatible drivers for various devices to ensure proper functionality.",
                        "Printer/Scanner Repair: Diagnose and fix issues with printers and scanners.",
                        "Network Configuration: Configure routers, switches, bridges, and other networking devices to optimize connectivity.",
                    ],
                },
                {
                    name: "Email Services",
                    icon: ['fas', 'envelope'], // Icon from the first component
                    iconType: true,
                    services: [
                        "Outlook Configuration: Set up new Outlook accounts and assist with the transition from old Outlook to new Outlook.",
                        "Error Resolution: Troubleshoot and resolve send/receive errors in Outlook.",
                        "Email Recovery: Provide solutions for recovering deleted emails.",
                        "Outlook Rules Creation: Create customized Outlook rules based on user requirements to enhance email management.",
                    ],
                },
                {
                    name: "Website-Related Services",
                    icon: ['fas', 'globe'], // Icon from the first component
                    iconType: true,
                    services: [
                        "HTML and CSS Fixes: Identify and resolve HTML errors and CSS issues to ensure website functionality and aesthetics.",
                        "Bootstrap Bug Fixes: Troubleshoot and fix bugs related to Bootstrap frameworks.",
                        "Domain and Hosting Services: Assist with domain registration and hosting purchases.",
                        "JavaScript Support: Address and resolve JavaScript-related issues on websites.",
                    ],
                },
                {
                    name: "Additional Services",
                    icon: ['fas', 'code'], // Icon from the first component
                    iconType: true,
                    services: [
                        "File Recovery: Provide password recovery services for PDF, Excel, and other file types protected by passwords.",
                        "Virtualization Setup: Set up VMware in a Windows environment and address critical issues as needed.",
                    ],
                },
            ],
        };
    },
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
