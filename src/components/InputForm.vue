<script setup>
import axios from 'axios'
import { useMainStore } from '../stores/MainStore'
import { watch, ref } from 'vue'
const loader = useMainStore()
const familyLoad = ref(import.meta.env.VITE_FAMILYLOAD)
const dni = ref(import.meta.env.VITE_DNI)
const code = ref(import.meta.env.VITE_CODE)
const date = ref(import.meta.env.VITE_DATE)
const dateFormat = 'DD/MM/YYYY'
const keyLetter = ref('')
const unanswered = 'N'
const open = ref(false)
const base = 'data:image/png;base64,'
const img = ref('')
const captchaValue = ref('')

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
watch(keyLetter, () => {
  console.log(keyLetter.value)
})

// fetach to try to recover the account
const recoveryAccount = () => {
  loader.loaderTrue()
  loader.test()
  axios.post('http://localhost:3000/account-recovery', {
    date: date.value.toString(),
    code: code.value.toString(),
    familyLoad: familyLoad.value.toString(),
    dni: dni.value.toString(),
    unanswered: unanswered.toString()

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

// search to fill out the captcha
watch(captchaValue, () => {
  console.log(captchaValue.value)
  axios.post('http://localhost:3000/captcha', {
    captchaValue: captchaValue.value.toString()

  })
    .then(res => {
      console.log(res.data)
    })
    .catch(error => {
      console.log(error)
    })
})

</script>

<template>
  <div class="flex-col justify-center items-center">
    <div>
      <img class="h-auto max-w-lg rounded-lg mb-10 logo "
        src="https://fresh.deno.dev/illustration/lemon-squash.svg?__frsh_c=5b73c33e2a2b5a2dac54486291c6495550cf5c4f"
        alt="image description">
    </div>
    <h2 class="text-4xl font-bold dark:text-white mb-5 text-center">
      <span class="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-yellow-200">Dino Tool</span>
    </h2>
    <div class="flex flex-col justify-center items-center">

      <a-form layout="horizontal" style="max-width: 600px">
        <a-space direction="vertical">
          <!-- <a-input v-model:value.lazy="value1" autofocus placeholder="Cargar familiar" /> -->
          <div class="flex flex-col justify-center items-center">
            <div>
              <a-input-number class="w-48  mb-2 text- text-gray-900 font-bold" autofocus :min="0" :max="20" :maxlength="2"
                placeholder="Cargar familiar" v-model:value.lazy="familyLoad" />
            </div>
            <div>
              <a-input-number class="w-48  mb-2 text- text-gray-900 font-bold" :min="0" :max="99999999"
                placeholder="Cedula" :maxlength="8" v-model:value.lazy="dni" />
            </div>
            <div>
              <a-input-number class="w-48  mb-2 text- text-gray-900 font-bold" :min="0" :max="9999"
                placeholder="Codigo Postal" :maxlength="4" v-model:value.lazy="code" />
            </div>
            <div>
              <a-input class="w-48  mb-2 text- text-gray-900 font-bold" v-model:value.lazy="keyLetter"
                placeholder='Letra inicial ejemplo "v"' :maxlength="1" />
            </div>
            <div>
              <a-date-picker class="w-48 mb-2 text- text-gray-900 font-bold" v-model:value="date"
                :valueFormat="dateFormat" :format="dateFormat" />
            </div>
            <div>
              <a-button
                class="text-cyan-950 bg-gradient-to-br from-green-400 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm text-center "
                @click="recoveryAccount" type="primary">Recuperar Cuenta</a-button>
            </div>
          </div>
        </a-space>
      </a-form>
    </div>
    <a-modal v-model:open="open" okType="primary">
      <a-space direction="vertical" class="flex justify-center items-center ">
        <p class="text-lg font-bold">Eres un robot, bí-bú? </p>
        <a href="#">
          <img class="rounded-lg" :src="base + img" alt="image description">
        </a>
        <a-input v-model:value.lazy="captchaValue" autofocus placeholder="Escriba el captcha" />
      </a-space>
    </a-modal>
  </div>
</template>

<style scoped>
.ant-modal-content {
  background-color: #77dd77 !important;
}

.logo {
  filter: drop-shadow(0 0 6em hsla(56, 93%, 52%, 0.904));
}
</style>
