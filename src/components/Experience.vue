<template>
    <section class="text-white mt-20 flex items-center" id="Experience">
        <div class="absolute z-0 top-[93rem] inset-x-0 h-64 flex items-start">
            <div class="h-24 w-64 bg-gradient-to-br from-primary via-secondary blur-2xl to-[#570cac] opacity-20"></div>
        </div>
        <div
            class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative flex flex-col justify-center h-full">
            <div class="text-left flex flex-col z-10 h-full" data-aos="flip-right">
                <h2 class="text-4xl font-bold text-white md:text-center mb-4">My
                    <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Experience</span>
                </h2>
                <div class="flex flex-wrap justify-between gap-4 mt-6 md:text-center relative">
                    <!-- Loop through the experience array -->
                    <div v-for="(job, index) in Experience" :key="index"
                        class="bg-[#111a3e] rounded-lg shadow-lg p-6 w-full md:w-1/3">
                        <div class="flex flex-col">
                            <h3
                                class="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                {{ job.title }}
                            </h3>
                            <p class="text-[#263658] bg-gradient-to-r from-secondary to-primary p-2 rounded mt-2">
                                {{ job.startDate }} - {{ job.endDate }}
                            </p>
                            <p class="text-white">{{ job.company }}</p>
                            <p class="text-white">{{ job.location }} · On-site</p>
                            <p class="text-gray-400 mt-2">{{ job.description }}</p>
                        </div>
                    </div>
                </div>
                <!-- Space for loading or additional content -->
                <div class="mt-8 h-16"></div> <!-- Adjust height as needed -->
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            Experience: [
                {
                    title: "Assistant Manager (IT Dep)",
                    company: "Hashem Foods Limited",
                    location: "Narayanganj District, Dhaka, Bangladesh",
                    startDate: "Jun 2023",
                    endDate: "Present",
                    description:
                        "Responsible for hardware and software troubleshooting, network security, vendor negotiations, and implementing IT projects. Leading biometric systems integration (ZKTeco's UFace800 and SpeedFace-V5L). Experienced in application development using Laravel, Vue.js, and Nuxt.",
                },
                {
                    title: "Deputy Assistant Manager (IT Dep)",
                    company: "Hashem Foods Limited",
                    location: "Narayanganj District, Dhaka, Bangladesh",
                    startDate: "Jan 2022",
                    endDate: "Jun 2023",
                    description: "Managed computer networking and hardware support.",
                },
                {
                    title: "Senior Officer (IT Dep)",
                    company: "Hashem Foods Limited",
                    location: "Narayanganj District, Dhaka, Bangladesh",
                    startDate: "Oct 2013",
                    endDate: "Dec 2021",
                    description:
                        "Installed and configured hardware and software, tracked system issues, and deployed Windows OS. Ensured network connectivity and performed troubleshooting tasks.",
                },
            ],
        };
    },
};
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>