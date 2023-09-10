<script setup>
// import axios from 'axios'
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
const value = ref('')
const value1 = ref('')
watch(value, () => {
  console.log(value.value)
})
watch(value1, () => {
  console.log(value1.value)
})
</script>

<template>
  <a-form
    layout="horizontal"
    style="max-width: 600px"
  >
  <a-space direction="vertical">
    <a-input v-model:value.lazy="value" autofocus placeholder="Cedula" />
    <a-input v-model:value.lazy="value1"  placeholder="Cargar familiar" />
    <a-input-number
      :min="0"
      :max="99999999"
    />
  </a-space>
  </a-form>
</template>

<style scoped>

</style>
