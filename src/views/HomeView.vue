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
import { reactive, computed, watch, onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, onActivated, onDeactivated } from 'vue';

const appTitle = 'My Amazing Counter App';
const counterData = reactive({
  count: 0,
  title: 'My Counter',
});

// watch - allows to essentially watch a reactive 
// data property and then do something whenever 
// it changes
watch(() => counterData.count, (newCount, oldCount) => {
  if(newCount == 20) alert('Count is 20');
})

// computed - properties which are usually generated 
// based on reactive data which are cached and only 
// updated when their dependencies change.
const oddOrEven = computed(() => {
  return counterData.count % 2 === 0 ? 'even' : 'odd';
});

const increaseCounter = (amount, event) => {
  counterData.count += amount;
}
const decreaseCounter = (amount) => {
  counterData.count -= amount;
}

onBeforeMount(() => {
  console.log('Component is about to be mounted');
})
onMounted(() => {
  console.log('Component has been mounted');
})
onBeforeUnmount(() => {
  console.log('Component is about to be unmounted');
})
onUnmounted(() => {
  console.log('Component has been unmounted');
})
onActivated(() => {
  console.log('Component has been activated');
})
onDeactivated(() => {
  console.log('Component has been deactivated');
})

</script>

<!-- <script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  computed: {
    myComputedProperty() {
      // perform logic based on a data property
      return 'my result';
    }
  },
  watch: {
    count(newCount, oldCount) {
      if (newCount == 20) alert('Count is 20');
    }
  },
  mounted() {
    // do stuff when component is loaded
    console.log('Component mounted');
  },
  unmounted() {
    // do stuff when component is destroyed
    console.log('Component unmounted');
  },
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
