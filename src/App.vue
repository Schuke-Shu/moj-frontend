<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<style>
#app {

}
</style>

<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

router.beforeEach((to, from, next) => {
  // 仅管理员可见，判断当前用户是否有权限
  if (to.meta?.access === "admin")
  {
    if (store.state.user?.user?.role !== "admin")
    {
      next("/noAuth");
      return;
    }
  }
  next();
});
</script>