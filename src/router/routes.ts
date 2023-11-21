import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";

export const routes: Array<RouteRecordRaw> =
    [
        {
            path: "/",
            name: "浏览题目",
            component: HomeView
        },
    ];
