<script setup>
import axios from 'axios'
import { useMainStore } from '../stores/MainStore'
// axios.post('http://localhost:3000/account-recovery', {
//   date: '03/12/1992',
//   code: '4019',
//   unanswered: 'N',
//   familyLoad: '0',
//   dni: '20855785'
// })
//   .then(res => {
//     console.log(res)
//   })
//   .catch(error => {
//     console.log(error)
//   })

import { watch, ref } from 'vue'
const loader = useMainStore()
const familyLoad = ref('')
const dni = ref('')
const code = ref('')
const date = ref('')
const dateFormat = 'DD/MM/YYYY'
const unanswered = 'N'
const open = ref(false)
const base = 'data:image/png;base64,'
const img = ref('')

watch(familyLoad, () => {
  console.log(familyLoad.value.toString())
})
watch(dni, () => {
  console.log(dni.value.toString())
})
watch(code, () => {
  console.log(code.value.toString())
})
watch(date, () => {
  console.log(date.value)
})

const recoveryAccount = () => {
  loader.loaderTrue()
  loader.test()
  axios.post('http://localhost:3000/account-recovery', {
    date: date.value.toString(),
    code: code.value.toString(),
    unanswered,
    familyLoad: familyLoad.value.toString(),
    dni: dni.value.toString()

  })
    .then(res => {
      loader.loaderFalse()
      img.value = res.data.img
      open.value = true
      console.log(img)
    })
    .catch(error => {
      loader.loaderFalse()
      console.log(error)
    })
}

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
      v-model:value.lazy="familyLoad"
    />
    <a-input-number class="w-48 block mb-2 text- text-gray-900 font-bold"
      :min="0"
      :max="99999999"
      placeholder="Cedula"
      :maxlength="8"
      v-model:value.lazy="dni"
    />
    <a-input-number class="w-48 block mb-2 text- text-gray-900 font-bold"
      :min="0"
      :max="9999"
      placeholder="Codigo Postal"
      :maxlength="4"
      v-model:value.lazy="code"
    />
    <a-date-picker class="w-48 block mb-2 text- text-gray-900 font-bold" v-model:value="date" :valueFormat="dateFormat" :format="dateFormat"  />
    <a-button class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm text-center mr-2 mb-2" @click="recoveryAccount" type="primary">Recuperar Cuenta</a-button>
  </a-space>
  </a-form>
  <a-modal v-model:open="open" title="Basic Modal" >
    <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
  <a href="#">
    <img class="rounded-lg" :src="base + img" alt="image description">
  </a>
  <figcaption class="absolute px-4 text-lg text-white bottom-6">
      <p>Por favor rellene el Capchat</p>
  </figcaption>
</figure>
      <p>Some contents...</p>
    </a-modal>
  </div>
</template>

<style scoped>

</style>
