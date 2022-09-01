<template>
  <router-link to="/home/info">info</router-link>
  <router-link to="/home/about">about</router-link>
  <router-view/>
</template>

<script setup lang="ts">
import Info from "@/views/Info.vue";
import About from "@/views/About.vue";
</script>
