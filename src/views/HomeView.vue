<template>
  <div class="home">
    <h3>{{ counterTitle }}:</h3>
    <div>
      <button class="btn" @click="decreaseCounter">-</button>
      <span class="counter">{{ counter }}</span>
      <button class="btn" @click="increaseCounter">+</button>
    </div>

    <div class="edit">
      <h4>Edit Counter Title:</h4>
      <input type="text" v-model="counterTitle"/>
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
.edit {
  margin-top: 60px;
}
</style>
