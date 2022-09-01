<template>
  Login
  <button @click="goHome">go home</button>
</template>

<script setup lang="ts">

import {useRouter} from "vue-router";
import test from "@/api/test";
import {onMounted} from "vue";

const router = useRouter()

console.log('router:', router)

onMounted(() => {
  getInfo()
})

const getInfo = async () => {
  const data = await test();
  console.log(data)
}
const goHome = () => {
  router.push('/home')
}
</script>