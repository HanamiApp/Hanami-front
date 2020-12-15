import { createRouter, createWebHistory } from "vue-router";
import Login from "@/pages/Login.vue";
import Home from "@/pages/Home.vue";
import Plant from "@/views/Plant.vue";
import Adopt from "@/views/Adopt.vue";
import Trip from "@/views/Trip.vue";
import Challenges from "@/views/Challenges.vue";
import Tasks from "@/views/Tasks.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/plant",
        name: "Plant",
        component: Plant
      },
      {
        path: "/adopt",
        name: "Adopt",
        component: Adopt
      },
      {
        path: "/trip",
        name: "Trip",
        component: Trip
      },
      {
        path: "/challenges",
        name: "Challenges",
        component: Challenges
      },
      {
        path: "/tasks",
        name: "Tasks",
        component: Tasks
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
