<template>
  <div id="basicLayout">
    <a-layout style="height: 400px;">
      <a-layout-header class="header">
        <global-header />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="http://mabbit.cn" target="_blank">枫兔家园</a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style>
#basicLayout .header
{
  background-color : red;
  margin-bottom    : 16px;
}

#basicLayout .content
{
  background    : linear-gradient(to right, #bbb, #fff);
  margin-bottom : 16px;
}

#basicLayout .footer
{
  background-color : #efefef;
  padding          : 16px;
  position         : absolute;
  bottom           : 0;
  left             : 0;
  right            : 0;
  text-align       : center;
}
</style>
<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>
