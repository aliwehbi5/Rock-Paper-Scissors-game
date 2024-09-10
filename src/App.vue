<script setup>
import { RouterView } from 'vue-router'
import EventBus from './EventBus'
</script>
<script>
export default {
  data() {
    return {
      score: 0
    }
  },
  created() {
    if (localStorage.getItem('score')) {
      EventBus.emit('score', localStorage.getItem('score'))
      this.score = localStorage.getItem('score')
    }
    EventBus.on('score', (data) => {
      console.log(data)

      this.score = data
    })
  }
}
</script>
<template>
  <main class="container">
    <header>
      <div class="logo">
        <img src="https://nityagulati.github.io/rock-paper-scissors/images/logo.svg" alt="" />
      </div>
      <div class="score-div">
        <h3>Score</h3>
        <p class="score">{{ score }}</p>
      </div>
    </header>

    <RouterView></RouterView>
  </main>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border: 2px solid var(--color-border);
  border-radius: 8px;
  .logo img {
    @media (max-width: 768px) {
      width: 120px;
    }
  }
  .score-div {
    text-align: center;
    padding: 0 32px;
    background-color: #f0f2f4;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h3 {
      color: var(--color-blue);
      font-weight: bold;
    }
    .score {
      color: var(--color-navy);
      font-weight: bold;
      font-size: 35px;
    }
  }
}
</style>
