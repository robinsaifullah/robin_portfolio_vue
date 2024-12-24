<template>
    <section class="text-white mt-20" id="AboutSection">
        <div class="absolute z-0 top-[93rem] inset-x-0 h-64 flex items-start">
            <div class="h-24 w-64 bg-gradient-to-br from-primary via-secondary blur-2xl to-[#570cac] opacity-20"></div>
        </div>
        <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <!-- Use grid for side-by-side layout -->
                <!-- Education Section -->
                <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full" data-aos="flip-right">
                    <h2 class="text-4xl font-bold text-white md:text-center mb-4">My
                        <span
                            class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Education</span>
                    </h2>
                    <div class="flex flex-col space-y-6 mt-6">
                        <div class="bg-[#111a3e] rounded-lg shadow-lg p-4 flex items-start">
                            <i class="fas fa-graduation-cap text-3xl text-primary mr-4"></i>
                            <div>
                                <h3
                                    class="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                    National University</h3>
                                <p class="text-white">Program: BBS(Pass)</p>
                                <p class="text-gray-400">Year: 2009</p>
                                <p class="text-gray-400">Major: Accounting, Management, Marketing, and Finance and
                                    Banking.</p>
                            </div>
                        </div>
                        <div class="bg-[#111a3e] rounded-lg shadow-lg p-4 flex items-start">
                            <i class="fas fa-graduation-cap text-3xl text-primary mr-4"></i>
                            <div>
                                <h3
                                    class="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                    Savar University College</h3>
                                <p class="text-white">Program: Higher Secondary Certificate(HSC)</p>
                                <p class="text-gray-400">Year: 2004</p>
                                <p class="text-gray-400">Group: Business Studies</p>
                            </div>
                        </div>
                        <div class="bg-[#111a3e] rounded-lg shadow-lg p-4 flex items-start">
                            <i class="fas fa-graduation-cap text-3xl text-primary mr-4"></i>
                            <div>
                                <h3
                                    class="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                    Radio Colony Model School And College</h3>
                                <p class="text-white">Program: Secondary School Certificate (SSC)</p>
                                <p class="text-gray-400">Year: 2002</p>
                                <p class="text-gray-400">Group: Science</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- More About Me Section -->
                <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full" data-aos="flip-right">
                    <h2 class="text-4xl font-bold text-white md:text-center mb-4">
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Why
                            Choose Me?</span>
                    </h2>
                    <p class="text-base lg:text-lg mt-2">
                        I am dedicated to providing exceptional IT support that empowers your business to thrive. With a
                        strong commitment to excellence, I utilize my extensive technical expertise to ensure your
                        systems operate seamlessly and efficiently.
                        Whether you require assistance with desktop services, email configuration, website
                        troubleshooting, or specialized recovery solutions, I am here to provide tailored support that
                        meets your unique needs.
                        Let’s work together to enhance your IT infrastructure and drive your success!

                    </p>

                </div>
            </div>
        </div>
    </Section>
</template>
<script setup>
import { ref } from "vue";
const education = ref([
    {
        id: 1,
        School: 'School1',
        Program: 'Software Engineer',
        year: 2002,
        Major: 'Accounting, Management, Marketing, and Finance and banking.'
    }
]);
</script>
