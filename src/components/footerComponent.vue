<template>
  <footer>
    <button class="reset">reset</button>
    <button class="rules">rules</button>
    <div class="rules-div">
      <div class="close">
        <img src="https://nityagulati.github.io/rock-paper-scissors/images/icon-close.svg" alt="" />
      </div>
      <img src="https://nityagulati.github.io/rock-paper-scissors/images/image-rules.svg" alt="" />
    </div>
  </footer>
</template>

<script>
import EventBus from '@/EventBus'

export default {
  mounted() {
    const rulesButton = document.querySelector('.rules')
    const closeButton = document.querySelector('.close img')
    const resetButton = document.querySelector('.reset')

    rulesButton.addEventListener('click', () => {
      document.body.classList.add('dark-background')
    })

    closeButton.addEventListener('click', () => {
      document.body.classList.remove('dark-background')
    })

    resetButton.addEventListener('click', () => {
      localStorage.setItem('score', 0)
      EventBus.emit('score', 0)
    })
  }
}
</script>

<style>
footer {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-end;
}
footer button {
  color: white;
  font-size: 1.2rem;
  border: 2px solid #606e85;
  background-color: transparent;
  text-transform: uppercase;
  color: white;
  padding: 10px 40px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}
footer button:hover {
  color: #4865f4;
  border-color: #4865f4;
  background-color: white;
  box-shadow: 0 0 8px white;
}
.rules-div {
  background-color: white;
  padding: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  z-index: 10;
  transition: 0.3s;
}
.rules-div .close {
  text-align: right;
  margin-bottom: 15px;
}
.rules-div .close img {
  cursor: pointer;
}
.dark-background .rules-div {
  transform: translate(-50%, -50%) scale(1);
}
@media (max-width: 991px) {
  footer {
    justify-content: center;
  }
}
</style>
