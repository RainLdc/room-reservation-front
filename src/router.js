import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import notFound from "./components/notFound.vue";
import Chambres from "./views/Chambres.vue";
import Clients from "./views/Clients.vue";
import DetailsChambres from "./views/DetailsChambres.vue";
import DetailsClients from "./views/DetailsClients.vue";

Vue.use(Router);

export const router = new Router({
         mode: "history",
         routes: [
           {
             path: "/",
             name: "home",
             component: Home,
           },
           {
             path: "*",
             component: notFound,
           },

           {
             path: "/chambres",
             component: Chambres,
           },

           {
             path: "/detailschambres",
             component: DetailsChambres,
           },
           {
             path: "/clients",
             component: Clients,
           },
           {
             path: "/detailsclients",
             component: DetailsClients,
           },
         ],
       });
