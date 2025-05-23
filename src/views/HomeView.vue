<template>
  <div class="home">
    <h2>{{ appTitle }}</h2>
    <h3>{{ counterData.title }}:</h3>
    <div>
      <button class="btn" @click="decreaseCounter(2)">--</button>
      <button class="btn" @click="decreaseCounter(1)">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button class="btn" @click="increaseCounter(1, $event)">+</button>
      <button class="btn" @click="increaseCounter(2)">++</button>
    </div>

    <p>This counter is {{ oddOrEven }}</p>

    <div class="edit">
      <h4>Edit Counter Title:</h4>
      <input type="text" v-model="counterData.title"/>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue';

const appTitle = 'My Amazing Counter App';
const counterData = reactive({
  count: 0,
  title: 'My Counter',
});

const oddOrEven = computed(() => {
  return counterData.count % 2 === 0 ? 'even' : 'odd';
});

const increaseCounter = (amount, event) => {
  counterData.count += amount;
}
const decreaseCounter = (amount) => {
  counterData.count -= amount;
}
</script>

<!-- <script>
export default {
  computed: {
    myComputedProperty() {
      // perform logic based on a data property
      return 'my result';
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
.edit {
  margin-top: 60px;
}
</style>
