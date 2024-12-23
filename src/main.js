import {
    createApp
} from 'vue';
import './style.css';
import App from './App.vue';
import {
    library
} from '@fortawesome/fontawesome-svg-core';
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';
import {
    faGlobe
} from '@fortawesome/free-solid-svg-icons'; // Import the icons you want to use

// Add the icons to the library
library.add(faGlobe); // Add more icons as needed

// Create the Vue app
const app = createApp(App);

// Register the FontAwesomeIcon component globally
app.component('font-awesome-icon', FontAwesomeIcon);

// Mount the app
app.mount('#app');