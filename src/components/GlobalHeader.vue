<template>
  <div id="globalHeader">
    <a-menu mode="horizontal" :default-selected-keys="['1']">
      <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
        <div class="title-bar">
          <!--suppress CheckImageSize -->
          <img class="logo" src="@/asserts/logo.png" alt="logo" title="logo" height="64" />
          <div class="title">枫兔 OJ</div>
        </div>
      </a-menu-item>
      <a-menu-item v-for="i in routes" :key="i.path">
        {{ i.name }}
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script setup lang="ts">
import { routes } from "@/router/routes";
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

}
</style>
