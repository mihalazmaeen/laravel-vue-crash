import "./bootstrap";
import { createApp } from "vue";
import store from "./store/index"; // Import the store

const app = createApp({});

import ExampleComponent from "./components/ExampleComponent.vue";
import StudentCreateComponent from "./components/student/create.vue";

// Use the store
app.use(store);

// Register components
app.component("example-component", ExampleComponent);
app.component("student-create-component", StudentCreateComponent);

// Mount the app
app.mount("#vue-app");
