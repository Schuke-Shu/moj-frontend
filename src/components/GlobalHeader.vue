<template>
  <a-row id="globalHeader" style="margin-bottom: 16px;" align="center">
    <a-col flex="100px"></a-col>
    <a-col flex="auto">
      <a-menu mode="horizontal"
              :selected-keys="defaultHome"
              :default-selected-keys="['1']"
              @menu-item-click="doMenuClick"
      >
        <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
          <div class="title-bar">
            <img class="logo" src="@/asserts/logo.png" alt="logo" title="logo" />
            <div class="title">枫兔 OJ</div>
          </div>
        </a-menu-item>
        <a-menu-item v-for="i in routes" :key="i.path">
          {{ i.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col flex="100px">
      <div>
        mabbit
      </div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { routes } from "@/router/routes";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

// 默认主页
const defaultHome = ref(['/']);

// 路由跳转后更新选中的菜单项
router.afterEach((to) => {
  defaultHome.value = [to.path];
});

const doMenuClick = (key: string) => {
  router.push({path: key});
}
</script>

<style scoped>
.title-bar
{
  display     : flex;
  align-items : center;
}

.title
{
  color       : #444;
  margin-left : 16px;
}

.logo
{
  height : 64px;
}
</style>
