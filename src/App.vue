<script setup>
import { ref } from 'vue'
import InputForm from './components/InputForm.vue'
const spinning = ref(false)
</script>

<template>
<a-spin size="large" :spinning="spinning">
    <div class="h-screen bg-zinc-800 flex items-center justify-center">
      <InputForm/>
    </div>
  </a-spin>
  </template>
<style scoped>

</style>
