<template>
  <div class="home">
    <h3>{{ counterTitle }}:</h3>
    <div>
      <button class="btn" @click="decreaseCounter">-</button>
      <span class="counter">{{ counter }}</span>
      <button class="btn" @click="increaseCounter">+</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const counter = ref(0), 
      counterTitle = ref('My Counter');

const increaseCounter = () => {
  counter.value++;
}
const decreaseCounter = () => {
  if (counter.value !== 0) counter.value--;
}
</script>

<!-- Composition API - script return -->
<!-- <script>
  import { ref } from 'vue';

export default {
  setup() {
    const counter = ref(0);
    const increaseCounter = () => {
      counter.value++;
    }
    const decreaseCounter = () => {
      if (counter.value !== 0) counter.value--;
    }

    return {
      counter,
      increaseCounter,
      decreaseCounter,
    }
  }
}
</script> -->

<!-- Options API -->
<!-- <script>
  export default {
    data() {
      return {
        counter: 0,
      }
    },
    methods: {
      increaseCounter() {
        this.counter++;
      },
      decreaseCounter() {
        if(this.counter !== 0)
          this.counter--;
      }
    }
  }
</script> -->

<style>
.home {
  text-align: center;
  padding: 20px;
}

.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}
</style>
