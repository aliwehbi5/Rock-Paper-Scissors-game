<template>
  <div class="main-site">
    <button
      @click="nextMove($event.target.dataset.type)"
      data-type="paper"
      class="paper-btn move"
    ></button>
    <button
      @click="nextMove($event.target.dataset.type)"
      data-type="scissors"
      class="scissors-btn move"
    ></button>
    <button
      @click="nextMove($event.target.dataset.type)"
      data-type="rock"
      class="rock-btn move"
    ></button>
  </div>
</template>

<style scoped>
.main-site {
  background: url(https://nityagulati.github.io/rock-paper-scissors/images/bg-triangle.svg)
    no-repeat;
  height: 75vh;
  position: relative;
  background-size: 450px;
  background-position: center;
}

.main-site button {
  position: absolute;
  transform: translateX(-50%);
}

.main-site button:hover {
  transform: translateX(-50%) scale(1.1);
}

.main-site button.paper-btn {
  top: 12%;
  left: 32%;
}

.main-site button.rock-btn {
  bottom: 10%;
  left: 50%;
}

.main-site button.scissors-btn {
  top: 12%;
  left: 69%;
}

@media (max-width: 991px) {
  .main-site button {
    width: 180px;
    height: 180px;
    background-size: 80px;
    border: 10px solid;
  }

  .main-site button.scissors-btn,
  .main-site button.paper-btn {
    top: 8%;
  }
}

@media (max-width: 768px) {
  .main-site button {
    width: 150px;
    height: 150px;
    background-size: 60px;
  }

  .main-site button.scissors-btn {
    left: 85%;
    top: 8%;
  }

  .main-site button.paper-btn {
    left: 16%;
    top: 8%;
  }
}

@media (max-width: 499px) {
  .main-site {
    background-size: 320px;
  }
  .main-site button.paper-btn {
    top: 10%;
  }

  .main-site button {
    width: 120px;
    height: 120px;
    background-size: 50px;
    border: 10px solid;
  }

  .main-site button.scissors-btn,
  .main-site button.paper-btn {
    top: 12%;
    left: 0;
  }

  .main-site button.scissors-btn {
    left: auto;
    right: 0;
  }

  .main-site button.rock-btn {
    bottom: 18%;
  }

  .main-site button:not(.rock-btn) {
    transform: translateX(0);
  }

  .main-site button:not(.rock-btn):hover {
    transform: scale(1.1);
  }
}
</style>

<script>
export default {
  methods: {
    nextMove(type) {
      this.$router.push({ name: 'nextMove', params: { move: type } })
      console.log(type)
    }
  }
}
</script>
