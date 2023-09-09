<script setup>
import axios from 'axios'
axios.post('http://localhost:3000/account-recovery',{
  date: '03/12/1992',
  code: '4019',
  unanswered: 'N',
  familyLoad: '0',
  dni: '20855785'
})
.then(res => {
    console.log(res);
  })
.catch(error => {
  console.log(error)
})
</script>

<template>

<h1>Hola Funciono</h1>
<a-button type="primary">Primary Button</a-button>

</template>

<style scoped>

</style>
