<script setup>
// import axios from 'axios'
// axios.post('http://localhost:3000/account-recovery', {
//   date: '03/12/1992',
//   code: '4019',X
//   unanswered: 'N',
//   familyLoad: '0',X
//   dni: '20855785'X
// })
//   .then(res => {
//     console.log(res)
//   })
//   .catch(error => {
//     console.log(error)
//   })

import { watch, ref } from 'vue'
const value = ref('')
const value1 = ref('')
watch(value, () => {
  console.log(value.value)
})
watch(value1, () => {
  console.log(value1.value)
})
const dateFormat = 'DD/MM/YYYY'
</script>

<template >
  <div>
    <div>

<h2 class="text-4xl font-bold dark:text-white mb-20 ">Dino Tool</h2>

<img class="h-auto max-w-lg rounded-lg mb-10 " src="https://fresh.deno.dev/illustration/lemon-squash.svg?__frsh_c=5b73c33e2a2b5a2dac54486291c6495550cf5c4f" alt="image description">
  </div>
  <a-form
    layout="horizontal"
    style="max-width: 600px"
  >
  <a-space direction="vertical">
    <!-- <a-input v-model:value.lazy="value1" autofocus placeholder="Cargar familiar" /> -->
    <a-input-number class="w-48 block mb-2 text- text-gray-900 font-bold"
    autofocus
      :min="0"
      :max="20"
      :maxlength="2"
      placeholder="Cargar familiar"
    />
    <a-input-number class="w-48 block mb-2 text- text-gray-900 font-bold"
      :min="0"
      :max="99999999"
      placeholder="Cedula"
      :maxlength="8"
    />
    <a-input-number class="w-48 block mb-2 text- text-gray-900 font-bold"
      :min="0"
      :max="9999"
      placeholder="Codigo Postal"
      :maxlength="4"
    />
    <a-date-picker class="w-48 block mb-2 text- text-gray-900 font-bold" v-model:value="value1" :format="dateFormat" />
  </a-space>
  </a-form>
</div>
</template>

<style scoped>

</style>
