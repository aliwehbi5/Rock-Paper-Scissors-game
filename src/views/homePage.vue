<script setup>
import chooseMove from '../components/chooseMove.vue'
import footerComponent from '@/components/footerComponent.vue'
</script>

<template>
  <div>
    <chooseMove></chooseMove>
    <footerComponent></footerComponent>
  </div>
</template>

<script>
export default {
  name: 'homePage'
}
</script>
