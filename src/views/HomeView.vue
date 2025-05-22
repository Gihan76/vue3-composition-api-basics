<template>
  <div class="home">
    <h3>{{ counterData.title }}:</h3>
    <div>
      <button class="btn" @click="decreaseCounter">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button class="btn" @click="increaseCounter">+</button>
    </div>

    <div class="edit">
      <h4>Edit Counter Title:</h4>
      <input type="text" v-model="counterData.title"/>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const counterData = reactive({
  count: 0,
  title: 'My Counter',
});

const increaseCounter = () => {
  counterData.count++;
}
const decreaseCounter = () => {
  if (counterData.count !== 0) counterData.count--;
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
