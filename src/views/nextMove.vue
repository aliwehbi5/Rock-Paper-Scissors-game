<script setup>
import footerComponent from '@/components/footerComponent.vue'
import EventBus from '@/EventBus'
</script>
<template>
  <main>
    <div class="main-div">
      <div class="your-picked">
        <h2>You Picked</h2>
        <div class="btn">
          <button :class="move + '-btn move'" :type="move"></button>
        </div>
      </div>
      <div class="result" v-if="showResult">
        <h1>{{ resultText }}</h1>
        <router-link to="/">
          <button class="play-again">Play Again</button>
        </router-link>
      </div>
      <div class="house-picked">
        <h2>House Picked</h2>
        <div class="btn" v-if="showHousePickedBtn">
          <button :class="houseMove + '-btn move'" :type="houseMove"></button>
        </div>
        <div class="loading-btn" v-if="showLoadingBtn"></div>
      </div>
    </div>
    <footerComponent></footerComponent>
  </main>
</template>

<script>
export default {
  name: 'nextMove',
  data() {
    return {
      move: null,
      houseMove: null,
      showHousePickedBtn: false,
      showLoadingBtn: true,
      showResult: false,
      resultText: '',
      score: 0
    }
  },
  created() {
    this.move = this.$route.params.move
  },
  mounted() {
    this.choiceMove()
    setTimeout(() => {
      this.showHousePickedBtn = true
      this.showLoadingBtn = false
      this.showTheResult()
    }, 2000)
  },
  methods: {
    choiceMove() {
      const moves = ['paper', 'rock', 'scissors']
      const index = Math.floor(Math.random() * 3)
      this.houseMove = moves[index]
    },
    showTheResult() {
      if (localStorage.getItem('score')) {
        EventBus.emit('score', localStorage.getItem('score'))
        this.score = localStorage.getItem('score')
      } else {
        EventBus.emit('score', 0)
      }
      if (this.move === this.houseMove) {
        this.resultText = "It's a draw"
      } else if (
        (this.move === 'rock' && this.houseMove === 'scissors') ||
        (this.move === 'paper' && this.houseMove === 'rock') ||
        (this.move === 'scissors' && this.houseMove === 'paper')
      ) {
        this.resultText = 'You win!'
        this.score++
        console.log(this.score)

        localStorage.setItem('score', this.score)
        EventBus.emit('score', this.score)
      } else {
        this.resultText = 'House wins!'
        this.score--
        console.log(this.score)

        localStorage.setItem('score', this.score)
        EventBus.emit('score', this.score)
      }
      this.showResult = true
    }
  }
}
</script>

<style scoped>
.main-div {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  height: 75vh;
}
.main-div > div {
  text-align: center;
}
@media (min-width: 992px) {
  button.move {
    width: 250px;
    height: 250px;
  }
  .house-picked {
    grid-area: 1 / 3 / 1 / 3;
  }
}
h2 {
  font-weight: 500;
  margin-bottom: 50px;
  text-transform: uppercase;
}
h1 {
  font-size: 3rem;
  text-transform: uppercase;
  margin-bottom: 20px;
}

button.play-again {
  width: 100%;
  padding: 15px;
  color: #4865f4;
  font-size: 1rem;
  border-radius: 12px;
  border: navajowhite;
  cursor: pointer;
  transition: 0.3s;
}
button.play-again:hover {
  color: #dc2e4e;
}
.btn {
  border-radius: 50%;
  width: max-content;
  margin: auto;
}
.btn.winner {
  box-shadow:
    0 0 0 30px rgba(255, 255, 255, 0.09),
    0 0 0 70px rgba(255, 255, 255, 0.06),
    0 0 0 120px rgba(255, 255, 255, 0.03);
}
.loading-btn {
  border-radius: 50%;
  border: none;
  width: 200px;
  height: 200px;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-animation: pulse-animation 1.5s ease-out infinite;
  animation: pulse-animation 1.5s ease-out infinite;
}
@keyframes pulse-animation {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
    opacity: 0.3;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0.5;
  }
}
@media (max-width: 991px) {
  .main-div {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 0px;
  }
  .result {
    grid-area: 2 / 1 / 2 / 3;
  }
  .loading-btn {
    width: 180px;
    height: 180px;
  }
}

@media (max-width: 768px) {
  .loading-btn {
    width: 150px;
    height: 150px;
  }
}

@media (max-width: 499px) {
  button.move {
    width: 150px;
    height: 150px;
    background-size: 60px;
  }
  .result h1 {
    font-size: 2.5rem;
  }
  .house-picked,
  .your-picked {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 50px;
  }
  .house-picked h2,
  .your-picked h2 {
    margin-bottom: 0;
  }
  .btn.winner {
    box-shadow:
      0 0 0 20px rgba(255, 255, 255, 0.09),
      0 0 0 40px rgba(255, 255, 255, 0.06),
      0 0 0 60px rgba(255, 255, 255, 0.03);
  }
}
</style>
