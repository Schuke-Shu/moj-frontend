import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AdminView from "@/views/AdminView.vue";
import NoAuth from "@/views/NoAuth.vue";

export const routes: Array<RouteRecordRaw> =
  [
    {
      path: "/",
      name: "浏览题目",
      component: HomeView
    },
    {
      path: "/admin",
      name: "管理员页面",
      component: AdminView,
      meta: {
        access: "admin",
      }
    },
    {
      path: "/noAuth",
      name: "无权限",
      component: NoAuth
    }
  ];
