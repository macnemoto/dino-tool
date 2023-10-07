<script setup>
// import { ref } from 'vue'
import InputForm from './components/InputForm.vue'
import { useMainStore } from './stores/MainStore'
const { loader } = useMainStore()
const spinning = loader
</script>

<template>
<a-spin size="large" :spinning="spinning">
    <div class="h-screen bg-zinc-800 flex items-center justify-center">
      <InputForm/>
    </div>
  </a-spin>
  </template>
<style scoped>
body {
  background-color: blue;
}
</style>
