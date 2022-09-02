<template>
  <router-view/>
</template>

<script setup lang="ts">
import useCountStore from "store/count";

const countStore = useCountStore();
</script>

