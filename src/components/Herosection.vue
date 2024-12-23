<template>
    <section class="relative w-full" data-aos="zoom-in-up" id="Herosection ">
        <div class="absolute top-e inset-x-0 h-64 flex items-start">
            <div
                class="h-24 w-2/3 lg:bg-gradient-to-br sm:bg-gradient-to-r from-[#570cac] blur-2xl invisible opacity-40">
            </div>
            <div
                class="h-24 w-3/5 lg:bg-gradient-to-br sm:bg-gradient-to-r from-[#570cac] blur-2x invisible opacity-40 blur-2xl">
            </div>
            <div />
        </div>
        <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
            <div
                class="grid lg:grid-cols-2 gap-10 x1:gap-14 relative pt-24 1g:max-w-none max-w-2x1 md:max-w-3x1 mx-auto">
                <!-- grid -->
                <div class="lg:py-6">
                    <div class="text-center lg:text-left">
                        <h1 class="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl font-dreaming">

                            Hi,

                            <span style="font-family: 'Playwrite NL Guides', serif; font-weight: 400;"
                                class="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                                Welcome
                            </span>

                        </h1>
                        <p class="text-gray-300 pt-8 text-center lg:text-left mx-auto"></p>
                    </div>
                    <p
                        class="text-gray-300 pt-4 text-center lg:text-left mx-auto max-w-xl text-base leading-relaxed font-normal">
                        I am Saifullah Robin. I'm thrilled to have you here! This platform is my way of sharing my
                        journey, expertise, and passion for technology with you. With over 13 years of experience in the
                        tech industry, I've honed my skills in IT support and web development, helping businesses and
                        individuals thrive in the digital world.
                        From troubleshooting technical issues to creating intuitive, user-friendly websites, my goal is
                        to bring innovative solutions that empower others. Through this website, I invite you to explore
                        my work, learn about my experiences, and connect with me as we venture into the ever-evolving
                        world of tech together.
                        <span
                            class="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary font-bold">Let’s
                            create something Amazing!</span>
                    </p>

                    <div class="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:mx-auto lg:max-0">
                        <a href="https://www.fiverr.com/users/saifullahrobin/seller_dashboard" target="_blank"
                            class="px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center">
                            <span
                                class="absolute inset-0 rounded-3xl group-hover:scale-105 origin-center transition-all ease-in-out bg-primary border-2 border-transparent"></span>
                            <span class="relative flex items-center justify-center font-bold text-[#263658]">Hire
                                Me</span>
                        </a>
                        <button
                            class="border border-primary px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center">
                            <div
                                class="hover:scale-105 transition-all ease-in-out flex justify-center items-center relative">
                                <div class="svg-container">
                                    <svg class="download-icon" width="18" height="22" viewBox="0 0 18 22" fill="none"
                                        xmlns="https://www.w3.org/TR/SVG/">
                                        <path class="download-arrow" d="M13 9L9 13M9 13L5 9M9 13V1" stroke="#f59e0b"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129 20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213 20.1213C16.6839 19.5587 17 18.7956 17 18V17"
                                            stroke="#f59e0b" stroke-width="2" stroke-linecap="round" />
                                    </svg>
                                    <div class="download-loader text-white hidden"></div>
                                </div>
                                <a href="http://robinsaifullah.com/assets/RobinSaifullah.pdf"
                                    download="RobinSaifullah.pdf" class="pl-2 font-bold text-primary">Download
                                    Resume</a>
                            </div>
                        </button>
                    </div>
                </div>
                <div class="lg:h-full md:flex">
                    <div
                        class="flex w-full h-96 min-h-[30rem] lg:min-h-[none] lg:w-full lg:h-full items-center relative">
                        <div
                            class="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] bg-gradient-to-tr opacity-25 to-primary blur-2xl">
                        </div>
                        <div
                            class="absolute z-10 p-2 -translate-y-1/2 top-1/2 overflow-hidden lg:right-3 md:right-42 sm:right-21 rounded-full shadow-lg border border-primary w-96 h-96">
                            <img src="@/assets/robin.jpg" width="400" height="400" loading="lazy"
                                class="w-full h-full object-cover rounded-full">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


</template>
<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
</script>