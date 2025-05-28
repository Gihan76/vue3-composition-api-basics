<template>
    <div class="modals">
        <h1>Modals</h1>
        <button @click="showModal = true">Show modal</button>

        <!-- render child component based on condition -->
        <Modal v-if="showModal">
            <!-- provide slot content -->
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita maiores vel facere laborum, quia quibusdam. Voluptatibus, eaque! Pariatur, esse neque nulla suscipit, reprehenderit cupiditate nisi unde ad dolore expedita magnam!
            </p>
        </Modal>

    </div>
</template>

<!-- composition api -->
<script setup>
import { ref } from 'vue';
import Modal from '@/components/Modal.vue'; // import child component

const showModal = ref(false);
</script>

<!-- options api -->
<!-- <script>
    import Modal from '@/components/Modal.vue';

    export default {
        components: {
            Modal
        }
    }
</script> -->